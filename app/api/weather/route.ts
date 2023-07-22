import { NextRequest, NextResponse } from "next/server";
import axios from 'axios'
import { CityWeather, ForecastedWeatherItem } from "@/types/cityWeather";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lon = searchParams.get("lon");
  const lat = searchParams.get("lat");

  const singleApiRoute = process.env.API_URL_SINGLE
  const forecastApiRoute = process.env.API_URL_FORECAST
  const apiKey = process.env.OPENWEATHER_KEY

  if (!lon || !lat)
    return NextResponse.json({ message: 'Falto poner la longitud o la latitud' }, { status: 400 });

  try {
    const { data: singleData, status: singleStatus } = await axios.get<Api_single_city>(`${singleApiRoute}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`).then()
    console.log('Single data ', singleData)
    console.log('Single status ', singleStatus)
    const { data: forecastData, status: forecastStatus } = await axios.get<Api_forecast_city>(`${forecastApiRoute}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`).then()
    console.log('Forecast data ', forecastData)
    console.log('Forecast status ', forecastStatus)
    let lastDayRecorded: string | undefined = undefined;
    let forecastedDays: ForecastedWeatherItem[] = [];
    forecastData.list.forEach((forecast) => {
      const dateCrop = forecast.dt_txt.slice(0, 10);
      if (!lastDayRecorded || lastDayRecorded !== dateCrop) {
        lastDayRecorded = dateCrop;
        const newForecastItem: ForecastedWeatherItem = {
          date: new Date(forecast.dt_txt),
          icon: forecast.weather[0].icon,
          temp_max: forecast.main.temp_max,
          temp_min: forecast.main.temp_min,
        }
        forecastedDays.push(newForecastItem);
      }
    })
    const newCityWeather: CityWeather = {
      city: singleData.name,
      coord: {
        lat: singleData.coord.lat,
        lon: singleData.coord.lon,
      },
      airPressure: singleData.main.pressure,
      humidity: singleData.main.humidity,
      visibility: singleData.visibility,
      wind: {
        deg: singleData.wind.deg,
        speed: singleData.wind.speed,
      },
      weather: {
        icon: singleData.weather[0].icon,
        temp: singleData.main.temp,
      },
      forecast: forecastedDays
    }
    return NextResponse.json({ message: 'you did it', cityWeather: newCityWeather })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
    } else {
      console.log('unexpected error: ', error);
    }
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }

}
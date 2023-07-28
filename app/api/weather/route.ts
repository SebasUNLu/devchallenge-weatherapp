import { NextRequest, NextResponse } from "next/server";
import axios from 'axios'
import { CityWeather, ForecastedWeatherItem } from "@/types/cityWeather";

let apiCallCounter = 0;
let lastResetDate = new Date();

const CALL_LIMIT = 300;

function isLimitExceeded() {
  const currentDate = new Date();
  const isSameDay = currentDate.toDateString() === lastResetDate.toDateString();

  if (!isSameDay) {
    // Reiniciar el contador si ha pasado un día desde el último reinicio
    apiCallCounter = 0;
    lastResetDate = currentDate;
  }

  return apiCallCounter >= CALL_LIMIT;
}

function incrementCounter() {
  apiCallCounter++;
}

export async function GET(req: NextRequest) {
  if (isLimitExceeded()) {
    return NextResponse.json({ message: 'No hay mas llamadas' }, { status: 403 })
  }
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
    const { data: forecastData, status: forecastStatus } = await axios.get<Api_forecast_city>(`${forecastApiRoute}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`).then()
    let lastDayRecorded: string | undefined = undefined;
    let forecastedDays: ForecastedWeatherItem[] = [];
    forecastData.list.forEach((forecast) => {
      const dateCrop = forecast.dt_txt.slice(0, 10);
      if (!lastDayRecorded || lastDayRecorded !== dateCrop) {
        lastDayRecorded = dateCrop;
        const newForecastItem: ForecastedWeatherItem = {
          date: forecast.dt_txt,
          icon: forecast.weather[0].icon,
          temp_max: forecast.main.temp_max,
          temp_min: forecast.main.temp_min,
        }
        forecastedDays.push(newForecastItem);
      }
    })
    const [first, ...restOfDays] = forecastedDays
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
        main: singleData.weather[0].main
      },
      forecast: restOfDays
    }
    incrementCounter()
    return NextResponse.json({ message: 'you did it', cityWeather: newCityWeather })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
    } else {
      console.log('unexpected error: ', error);
    }
    return NextResponse.json({ message: 'Hubo un error en el servidor. Vuelva a intentar más tarde' }, { status: 500 });
  }

}

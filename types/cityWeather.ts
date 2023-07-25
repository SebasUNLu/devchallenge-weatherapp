export interface ForecastedWeatherItem {
  date: Date,
  icon: string,
  temp_max: number,
  temp_min: number
}

export interface CityWeather {
  city: string,
  coord: {
    lon: number,
    lat: number
  },
  weather: {
    icon: string,
    temp: number, // ºC
    main: string
  },
  airPressure: number,
  wind: {
    speed: number, // velocidad, mph
    deg: number, // direccion, degrees
  },
  visibility: number, // miles
  humidity: number, // %
  forecast: ForecastedWeatherItem[]
}

const day = new Date()
console.log(day)

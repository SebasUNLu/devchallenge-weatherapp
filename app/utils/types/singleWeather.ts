export interface SingleWeather {
  city: string,
  currentDate: Date,
  coord: {
    lon: number,
    lat: number
  },
  weather: {
    icon: string,
    temp: number // ºC
  },
  airPressure: number,
  wind: {
    speed: number, // velocidad, mph
    deg: number, // direccion, degrees
  },
  visibility: number, // miles
  humidity: number, // %
  forecast: {
    date: Date,
    icon: string,
    temp_max: number,
    temp_min: number
  }[]
}
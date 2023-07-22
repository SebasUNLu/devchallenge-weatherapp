interface Api_single_city {
  coord: {
    lon: number,
    lat: number
  },
  weather: {
    icon: string
  }[],
  main: {
    temp: number, // Temperatura a mostrar grande
    temp_min: number,
    temp_max: number,
    pressure: number, //air preassure
    humidity: number // humedad
  },
  visibility: number, //visibilidad
  wind: {
    speed: number, //velocidad
    deg: number, //direccion
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

interface Api_forecast_city {
  list: [
    {
      "dt": number,
      "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "sea_level": number,
        "grnd_level": number,
        "humidity": number,
        "temp_kf": number
      },
      "weather": [
        {
          "id": number,
          "main": string,
          "description": string,
          "icon": string
        }
      ],
      "sys": {
        "pod": string // part of day
      },
      "dt_txt": string
    }
  ],
  city: {
    id: number,
    name: string,
    coord: {
      lat: number,
      lon: number
    },
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
  }
}


const DATE = '2023-07-21 15:00:00';
const today = new Date(DATE)

console.log(today)
console.log(today)
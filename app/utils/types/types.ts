interface Api_single_city {
  coord: {
    lon: number,
    lat: number
  },
  weather: {
    // id: number,
    // main: string,
    // description: string,
    icon: string
  }[],
  // base: string,
  main: {
    temp: number, // Temperatura a mostrar grande
    // feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number, //air preassure
    humidity: number // humedad
  },
  visibility: number, //visibilidad
  wind: {
    speed: number, //velocidad
    deg: number, //direccion
    // gust: number
  },
  // clouds: {
  //   all: number
  // },
  // dt: number,
  // sys: {
  //   type: number,
  //   id: number,
  //   country: string,
  //   sunrise: number,
  //   sunset: number
  // },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

interface Api_forecast_city {
  // "cod": "200",
  // "message": 0,
  // "cnt": 40,
  list: [
    {
      "dt": 1689735600,
      "main": {
        "temp": 277.21,
        "feels_like": 274.39,
        "temp_min": 276.93,
        "temp_max": 277.21,
        "pressure": 1033,
        "sea_level": 1033,
        "grnd_level": 1029,
        "humidity": 85,
        "temp_kf": 0.28
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      // "clouds": {
      //   "all": 21
      // },
      // "wind": {
      //   "speed": 3.18,
      //   "deg": 37,
      //   "gust": 6.09
      // },
      // "visibility": 10000,
      // "pop": 0,
      "sys": {
        "pod": "n" // part of day
      },
      "dt_txt": "2023-07-19 03:00:00"
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
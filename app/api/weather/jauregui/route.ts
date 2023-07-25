import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'you did it', cityWeather: MOCK_JAUREGUI })
}

const MOCK_JAUREGUI = {
  "city": "Santa Rosa Jauregui",
  "coord": {
    "lat": 20.7333,
    "lon": -100.45
  },
  "airPressure": 1015,
  "humidity": 41,
  "visibility": 10000,
  "wind": {
    "deg": 80,
    "speed": 3.98
  },
  "weather": {
    "icon": "04d",
    "temp": 22.77,
    'main': 'Broken Clouds'
  },
  "forecast": [
    {
      "date": "2023-07-25T03:00:00.000Z",
      "icon": "10d",
      "temp_max": 21.86,
      "temp_min": 21.41
    },
    {
      "date": "2023-07-26T03:00:00.000Z",
      "icon": "10d",
      "temp_max": 16.99,
      "temp_min": 16.99
    },
    {
      "date": "2023-07-27T03:00:00.000Z",
      "icon": "10d",
      "temp_max": 17.58,
      "temp_min": 17.58
    },
    {
      "date": "2023-07-28T03:00:00.000Z",
      "icon": "10d",
      "temp_max": 14.03,
      "temp_min": 14.03
    },
    {
      "date": "2023-07-29T03:00:00.000Z",
      "icon": "10d",
      "temp_max": 18.52,
      "temp_min": 18.52
    }
  ]
}
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'you did it', cityWeather: MOCK_LUJAWAN })
}


const MOCK_LUJAWAN = {
  "city": "Lujiawan",
  "coord": {
    "lat": 36.3744,
    "lon": 106.5835
  },
  "airPressure": 1007,
  "humidity": 70,
  "visibility": 10000,
  "wind": {
    "deg": 140,
    "speed": 2.29
  },
  "weather": {
    "icon": "01n",
    "temp": 19.32,
    'main': 'Clear'
  },
  "forecast": [
    {
      "date": "2023-07-25T03:00:00.000Z",
      "icon": "01d",
      "temp_max": 20.4,
      "temp_min": 20.14
    },
    {
      "date": "2023-07-26T03:00:00.000Z",
      "icon": "04d",
      "temp_max": 20.78,
      "temp_min": 20.78
    },
    {
      "date": "2023-07-27T03:00:00.000Z",
      "icon": "04d",
      "temp_max": 19.39,
      "temp_min": 19.39
    },
    {
      "date": "2023-07-28T03:00:00.000Z",
      "icon": "01d",
      "temp_max": 17.69,
      "temp_min": 17.69
    },
    {
      "date": "2023-07-29T03:00:00.000Z",
      "icon": "01d",
      "temp_max": 18.46,
      "temp_min": 18.46
    }
  ]
}
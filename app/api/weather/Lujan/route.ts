import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'you did it', cityWeather: MOCK_LUJAN })
}

const MOCK_LUJAN = {
  "city": "Luján",
  "coord": {
    "lat": -34.5703,
    "lon": -59.105
  },
  "airPressure": 1027,
  "humidity": 71,
  "visibility": 10000,
  "wind": {
    "deg": 113,
    "speed": 3.13
  },
  "weather": {
    "icon": "04d",
    "temp": 11.87,
    'main': 'Broken Clouds',
  },
  "forecast": [
    {
      "date": "2023-07-25T03:00:00.000Z",
      "icon": "04n",
      "temp_max": 8.72,
      "temp_min": 7.15
    },
    {
      "date": "2023-07-26T03:00:00.000Z",
      "icon": "04n",
      "temp_max": 11.6,
      "temp_min": 11.6
    },
    {
      "date": "2023-07-27T03:00:00.000Z",
      "icon": "01n",
      "temp_max": 9.09,
      "temp_min": 9.09
    },
    {
      "date": "2023-07-28T03:00:00.000Z",
      "icon": "04n",
      "temp_max": 7.72,
      "temp_min": 7.72
    },
    {
      "date": "2023-07-29T03:00:00.000Z",
      "icon": "04n",
      "temp_max": 10.26,
      "temp_min": 10.26
    }
  ]
}


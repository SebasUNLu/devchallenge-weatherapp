import clearIcon from '@/public/weather_icons/Clear.png'
import hailIcon from '@/public/weather_icons/Hail.png'
import heavyCloudIcon from '@/public/weather_icons/HeavyCloud.png'
import heavyRainIcon from '@/public/weather_icons/HeavyRain.png'
import lightCloudIcon from '@/public/weather_icons/LightCloud.png'
import lightRainIcon from '@/public/weather_icons/LightRain.png'
import showerIcon from '@/public/weather_icons/Shower.png'
import sleetIcon from '@/public/weather_icons/Sleet.png'
import snowIcon from '@/public/weather_icons/Snow.png'
import thunderstormIcon from '@/public/weather_icons/Thunderstorm.png'

const generateIcon = (iconStr: string) => {
  switch (iconStr.slice(0, 3)) {
    case '01n':
    case '01d': return clearIcon;
    case '02n':
    case '02d': return lightCloudIcon;
    case '03n':
    case '03d': return heavyCloudIcon;
    case '04n':
    case '04d': return heavyCloudIcon;
    case '09n':
    case '09d': return showerIcon;
    case '10n':
    case '10d': return lightRainIcon;
    case '11n':
    case '11d': return thunderstormIcon;
    case '13n':
    case '13d': return snowIcon;
    case '50n':
    case '50d': return heavyCloudIcon;

    default:
      return clearIcon
  }
}

export default generateIcon
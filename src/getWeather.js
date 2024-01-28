import { formatISO } from 'date-fns';

const API_KEY = '09eb9cda033a40c29bc210257242501';

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=no&alerts=no`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(`Error fetching weather data:`);
    console.log(error);

    return null;
  }
}

function processWeatherData(rawData) {
  if (rawData.error) {
    console.log('Error in response from API');
    console.log(rawData.error);
    return rawData;
  }

  const datetimeNow = new Date();
  const processedData = {};
  processedData.location = rawData.location.name;
  processedData.weather = [];

  processedData.weather.push({
    date: formatISO(datetimeNow, { representation: 'date' }),
    condition: rawData.current.condition.text,
    temp_c: rawData.current.temp_c,
    temp_f: rawData.current.temp_f,
    feelslike_c: rawData.current.feelslike_c,
    feelslike_f: rawData.current.feelslike_f,
    precip_mm: rawData.current.precip_mm,
    precip_in: rawData.current.precip_in,
    wind_dir: rawData.current.wind_dir,
    wind_kph: rawData.current.wind_kph,
    wind_mph: rawData.current.wind_mph,
  });

  const remainingForecastToday3h = rawData.forecast.forecastday[0].hour.filter(
    (_, index) => index > datetimeNow.getHours() && index % 3 === 0
  );
  const forecastTomorrow3h = rawData.forecast.forecastday[1].hour.filter(
    (_, index) => index % 3 === 0
  );
  const forecastNext24h = remainingForecastToday3h
    .concat(forecastTomorrow3h.slice(0, 8 - remainingForecastToday3h.length))
    .map((forecast) => ({
      time: forecast.time.split(' ')[1],
      condition: forecast.condition.text,
      temp_c: forecast.temp_c,
      temp_f: forecast.temp_f,
      precip_mm: forecast.precip_mm,
      precip_in: forecast.precip_in,
    }));

  processedData.weather[0].forecastNext24h = forecastNext24h;

  rawData.forecast.forecastday.slice(1).forEach((forecast) => {
    processedData.weather.push({
      date: forecast.date,
      condition: forecast.day.condition.text,
      mintemp_c: forecast.day.mintemp_c,
      mintemp_f: forecast.day.mintemp_f,
      maxtemp_c: forecast.day.maxtemp_c,
      maxtemp_f: forecast.day.maxtemp_f,
      totalprecip_mm: forecast.day.totalprecip_mm,
      totalprecip_in: forecast.day.totalprecip_in,
    });
  });

  return processedData;
}

export default async function getWeather(location) {
  const data = await getWeatherData(location);
  return processWeatherData(data);
}

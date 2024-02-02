import Compass from '@bybas/weather-icons/production/line/all/compass.svg';
import getWeather from './getWeather';
import lookupIcon from './lookupIcon';
import getDayOfTheWeek from './getDayOfTheWeek';

export default class Website {
  selectedLocation;

  timeoutId;

  weatherData;

  displayIsMetric;

  // Call the API every minute.
  API_QUERY_WAIT_TIME = 60 * 1000;

  constructor() {
    this.selectedLocation = null;
    this.intervalId = null;
    this.weatherData = null;
    this.displayIsMetric = true;
  }

  render() {
    const locationInput = document.querySelector('#location-input');
    const locationButton = document.querySelector('#location-button');

    locationButton.addEventListener('click', () => {
      this.#processLocationSearch(locationInput.value);
    });

    locationInput.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this.#processLocationSearch(locationInput.value);
      }
    });

    const metricImperialSwitch = document.querySelector(
      '#metric-imperial-button'
    );
    metricImperialSwitch.addEventListener('click', () => {
      this.displayIsMetric = !this.displayIsMetric;
      this.#renderCurrent();
      this.#render24hForecast();
      this.#renderDailyForecast();
    });

    const windDirection = document.querySelector('#wind-direction');
    windDirection.src = Compass;
  }

  async #processLocationSearch(location) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    this.selectedLocation = location;
    this.#renderWeather('user');
  }

  async #renderWeather(callMethod) {
    if (!this.selectedLocation) return;

    if (callMethod === 'user') {
      document.querySelector('#loading-container').style.display = 'block';
      document.querySelector('#error-container').style.display = 'none';
      document.querySelector('#weather-container').style.display = 'none';
    }

    this.weatherData = await getWeather(this.selectedLocation);

    if (this.weatherData.error) {
      this.#renderError();
      return;
    }

    this.#renderCurrent();
    this.#render24hForecast();
    this.#renderDailyForecast();

    this.timeoutId = setTimeout(() => {
      this.#renderWeather('automatic');
    }, this.API_QUERY_WAIT_TIME);
  }

  #renderError() {
    const loadingContainer = document.querySelector('#loading-container');
    const weatherContainer = document.querySelector('#weather-container');
    const errorContainer = document.querySelector('#error-container');

    console.log(this.weatherData);
    errorContainer.textContent = this.weatherData.error.message;

    loadingContainer.style.display = 'none';
    weatherContainer.style.display = 'none';
    errorContainer.style.display = 'block';
  }

  #renderCurrent() {
    const weatherContainer = document.querySelector('#weather-container');
    const loadingContainer = document.querySelector('#loading-container');
    const errorContainer = document.querySelector('#error-container');

    const currentContainer =
      weatherContainer.querySelector('#current-container');

    const city = currentContainer.querySelector('#current-city');
    city.textContent = this.weatherData.location.name;

    const country = currentContainer.querySelector('#current-country');
    country.textContent = this.weatherData.location.country;

    const date = currentContainer.querySelector('#current-date');
    date.textContent = `${getDayOfTheWeek(
      this.weatherData.location.localtime.split(' ')[0]
    )}, ${this.weatherData.location.localtime}`;

    const lastUpdated = currentContainer.querySelector('#last-updated');
    lastUpdated.textContent = `Last updated: ${this.weatherData.lastUpdated}`;

    const icon = currentContainer.querySelector('#current-weather-icon');
    icon.setAttribute(
      'alt',
      `Weather Icon ${this.weatherData.current.condition_code}`
    );
    icon.src = lookupIcon(
      this.weatherData.current.condition_code,
      new Date().getHours
    );

    const weatherDescription = currentContainer.querySelector(
      '#current-weather-description'
    );
    weatherDescription.textContent = this.weatherData.current.condition;

    const temperature = currentContainer.querySelector('#current-temperature');
    if (this.displayIsMetric) {
      temperature.textContent = `${this.weatherData.current.temp_c}°C`;
    } else {
      temperature.textContent = `${this.weatherData.current.temp_f}°F`;
    }

    const feelsLike = currentContainer.querySelector('#feels-like');
    if (this.displayIsMetric) {
      feelsLike.textContent = `Feels like ${this.weatherData.current.feelslike_c}°C`;
    } else {
      feelsLike.textContent = `Feels like ${this.weatherData.current.feelslike_f}°F`;
    }

    const precipitation = currentContainer.querySelector(
      '#current-precipitation'
    );
    if (this.displayIsMetric) {
      precipitation.textContent = `${this.weatherData.current.precip_mm} mm`;
    } else {
      precipitation.textContent = `${this.weatherData.current.precip_in} in`;
    }

    const windDirection = currentContainer.querySelector('#wind-direction');
    windDirection.setAttribute(
      'alt',
      `Wind direction ${this.weatherData.current.wind_dir} degrees`
    );
    windDirection.style.transform = `rotate(${this.weatherData.current.wind_dir}deg)`;

    const windSpeed = currentContainer.querySelector('#wind-speed');
    if (this.displayIsMetric) {
      windSpeed.textContent = `${this.weatherData.current.wind_kph} km/h`;
    } else {
      windSpeed.textContent = `${this.weatherData.current.wind_mph} mph`;
    }

    loadingContainer.style.display = 'none';
    weatherContainer.style.display = 'grid';
    errorContainer.style.display = 'none';
  }

  #render24hForecast() {
    const forecast24hCards = document.querySelector('#forecast-24h-cards');

    forecast24hCards.innerHTML = '';

    this.weatherData.current.forecastNext24h.forEach((forecast) => {
      const forecast24hCard = document.createElement('div');
      forecast24hCard.classList.add('forecast-24h-card');

      const time = document.createElement('div');
      time.classList.add('forecast-24h-time');
      time.textContent = forecast.time;

      const icon = document.createElement('img');
      icon.classList.add('forecast-24h-icon');
      icon.setAttribute('alt', `Weather Icon ${forecast.condition_code}`);
      icon.src = lookupIcon(
        forecast.condition_code,
        forecast.time.split(':')[0]
      );

      const description = document.createElement('div');
      description.classList.add('forecast-24h-description');
      description.textContent = forecast.condition;

      const temperature = document.createElement('div');
      temperature.classList.add('forecast-24h-temperature');
      if (this.displayIsMetric) {
        temperature.textContent = `${forecast.temp_c}°C`;
      } else {
        temperature.textContent = `${forecast.temp_f}°F`;
      }

      const precipitation = document.createElement('div');
      precipitation.classList.add('forecast-24h-precipitation');
      if (this.displayIsMetric) {
        precipitation.textContent = `${forecast.precip_mm} mm`;
      } else {
        precipitation.textContent = `${forecast.precip_in} in`;
      }

      forecast24hCard.appendChild(time);
      forecast24hCard.appendChild(icon);
      forecast24hCard.appendChild(description);
      forecast24hCard.appendChild(temperature);
      forecast24hCard.appendChild(precipitation);

      forecast24hCards.appendChild(forecast24hCard);
    });
  }

  #renderDailyForecast() {
    const forecastDailyCards = document.querySelector('#forecast-daily-cards');

    forecastDailyCards.innerHTML = '';

    this.weatherData.forecast.forEach((forecast, index) => {
      const forecastDailyCard = document.createElement('div');
      forecastDailyCard.classList.add('forecast-daily-card');

      const title = document.createElement('div');
      title.classList.add('forecast-daily-title');
      if (index === 0) {
        title.textContent = 'Tomorrow';
      } else {
        title.textContent = 'Day after tomorrow';
      }

      const date = document.createElement('div');
      date.classList.add('forecast-daily-date');
      date.textContent = `${getDayOfTheWeek(forecast.date)}, ${forecast.date}`;

      const icon = document.createElement('img');
      icon.classList.add('forecast-daily-icon');
      icon.setAttribute('alt', `Weather Icon ${forecast.condition_code}`);
      icon.src = lookupIcon(forecast.condition_code, 12);

      const description = document.createElement('div');
      description.classList.add('forecast-daily-description');
      description.textContent = forecast.condition;

      const temperature = document.createElement('div');
      temperature.classList.add('forecast-daily-temperature');
      if (this.displayIsMetric) {
        temperature.textContent = `${forecast.mintemp_c} / ${forecast.maxtemp_c}°C`;
      } else {
        temperature.textContent = `${forecast.mintemp_f} / ${forecast.maxtemp_f}°F`;
      }

      const precipitation = document.createElement('div');
      precipitation.classList.add('forecast-daily-precipitation');
      if (this.displayIsMetric) {
        precipitation.textContent = `${forecast.totalprecip_mm} mm`;
      } else {
        precipitation.textContent = `${forecast.totalprecip_in} in`;
      }

      forecastDailyCard.appendChild(title);
      forecastDailyCard.appendChild(date);
      forecastDailyCard.appendChild(icon);
      forecastDailyCard.appendChild(description);
      forecastDailyCard.appendChild(temperature);
      forecastDailyCard.appendChild(precipitation);

      forecastDailyCards.appendChild(forecastDailyCard);
    });
  }
}

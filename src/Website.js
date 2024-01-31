import getWeather from './getWeather';

export default class Website {
  selectedLocation;

  timeoutId;

  weatherDisplayed;

  weatherData;

  API_QUERY_WAIT_TIME = 2000;

  constructor() {
    this.selectedLocation = null;
    this.intervalId = null;
    this.weatherDisplayed = false;
    this.weatherData = null;
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
  }

  async #processLocationSearch(location) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    this.selectedLocation = location;
    this.weatherDisplayed = false;
    this.#renderWeather();
  }

  async #renderWeather() {
    if (!this.selectedLocation) return;

    if (!this.weatherDisplayed) {
      document.querySelector('#loading-container').style.display = 'block';
    }

    this.weatherData = await getWeather(this.selectedLocation);

    if (this.weatherData.error) {
      this.#renderError();
      return;
    }

    this.weatherDisplayed = true;
    this.#renderCurrent();
    this.#render24hForecast();
    this.#renderDailyForecast();

    this.timeoutId = setTimeout(() => {
      this.#renderWeather();
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
    date.textContent = this.weatherData.current.date;

    const lastUpdated = currentContainer.querySelector('#last-updated');
    lastUpdated.textContent = `Last updated: ${this.weatherData.lastUpdated}`;

    // TODO weather icons

    const weatherDescription = currentContainer.querySelector(
      '#current-weather-description'
    );
    weatherDescription.textContent = this.weatherData.current.condition;

    const temperature = currentContainer.querySelector('#current-temperature');
    temperature.textContent = `${this.weatherData.current.temp_c}°C`;

    const feelsLike = currentContainer.querySelector('#feels-like');
    feelsLike.textContent = `Feelse like ${this.weatherData.current.feelslike_c}°C`;

    const precipitation = currentContainer.querySelector(
      '#current-precipitation'
    );
    precipitation.textContent = `${this.weatherData.current.precip_mm} mm`;

    // TODO wind direction as a rotating arrow
    const windDirection = currentContainer.querySelector('#wind-direction');
    windDirection.textContent = `${this.weatherData.current.wind_dir}`;

    const windSpeed = currentContainer.querySelector('#wind-speed');
    windSpeed.textContent = `${this.weatherData.current.wind_kph} km/h`;

    loadingContainer.style.display = 'none';
    weatherContainer.style.display = 'block';
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

      // TODO weather icons
      const icon = document.createElement('img');
      icon.classList.add('forecast-24h-icon');
      icon.setAttribute('alt', 'Weather Icon');

      const temperature = document.createElement('div');
      temperature.classList.add('forecast-24h-temperature');
      temperature.textContent = `${forecast.temp_c}°C`;

      const precipitation = document.createElement('div');
      precipitation.classList.add('forecast-24h-precipitation');
      precipitation.textContent = `${forecast.precip_mm} mm`;

      forecast24hCard.appendChild(time);
      forecast24hCard.appendChild(icon);
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
      date.textContent = forecast.date;

      // TODO weather icons
      const icon = document.createElement('img');
      icon.classList.add('forecast-daily-icon');
      icon.setAttribute('alt', 'Weather Icon');

      const description = document.createElement('div');
      description.classList.add('forecast-daily-description');
      description.textContent = forecast.condition;

      const temperature = document.createElement('div');
      temperature.classList.add('forecast-daily-temperature');
      temperature.textContent = `${forecast.mintemp_c} / ${forecast.maxtemp_c}°C`;

      const precipitation = document.createElement('div');
      precipitation.classList.add('forecast-daily-precipitation');
      precipitation.textContent = `${forecast.totalprecip_mm} mm`;

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

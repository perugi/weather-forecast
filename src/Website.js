import getWeather from './getWeather';

export default class Website {
  selectedLocation;

  timeoutId;

  API_QUERY_WAIT_TIME = 2000;

  constructor() {
    this.selectedLocation = null;
    this.intervalId = null;
  }

  render() {
    const locationInput = document.querySelector('#location-input');
    const locationButton = document.querySelector('#location-button');

    locationButton.addEventListener('click', async () => {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }

      this.selectedLocation = locationInput.value;
      await getWeather(this.selectedLocation);
      this.#getWeather();
    });
  }

  async #getWeather() {
    if (!this.selectedLocation) return;

    console.log(await getWeather(this.selectedLocation));

    this.timeoutId = setTimeout(() => {
      this.#getWeather();
    }, this.API_QUERY_WAIT_TIME);
  }
}

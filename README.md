# weather-forecast

A current weather and forecast web app, based on data from <https://www.weatherapi.com/>

💻 [Live Demo](https://perugi.github.io/weather-forecast/) 💻

![screenshot](https://github.com/perugi/weather-forecast/assets/38496182/29a06b30-cb85-4079-8da3-62125f8662c9)

## 💡 Features

- Searchable weather location with ability to favorite a location (stored in local storage) - when favorited, this location is shown by default on page load.
- Display of current weather, detailed forecast for the next 24 hours and tomorrow / day after tomorrow daily forecasts.
- Animated icons from <https://bas.dev/work/meteocons> (installed as an npm module).
- Switch between metric and imperial units.
- All forecast times and dates take into account the local time of the selected location.
- Automatic periodic calls to the API, once the location has been selected.

## 🛠️ Technologies, Tools, Design Approaches

- HTML, vanilla CSS and JS.
- API calls using the fetch API and async functions.
- Website render functionality implemented as an ES6 Class.

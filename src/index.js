import './reset.css';
import './styles.css';

import Utilities from '@perugi/web-utilities';
import getWeather from './getWeather';

Utilities.renderGHLogo();

getWeather('vancouver').then((data) => {
  console.log(data);
});

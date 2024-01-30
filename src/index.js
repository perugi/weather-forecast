import './reset.css';
import './styles.css';

import Utilities from '@perugi/web-utilities';
import Website from './Website';

Utilities.renderGHLogo();

const website = new Website();
website.render();

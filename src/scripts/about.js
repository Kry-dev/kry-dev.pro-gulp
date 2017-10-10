console.log('about page');
import {initPreloader} from './common/preloader.js';
import './common/water-effect/index-water.js';

import {hamMenu} from './common/hamburgerMenu';
import {initMap} from './common/google-map';
import {toggleClass, smoothScrollTo} from './common/helpers';
import {initPreloader} from './common/preloader.js';

hamMenu();
initMap();

/* scrol down to about section */
var downBtn = document.querySelector('.arrow-down ');
downBtn.addEventListener('click',function () {
    smoothScrollTo('about', 400);
});


initPreloader();
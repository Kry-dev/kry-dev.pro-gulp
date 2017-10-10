console.log('index page');
const $ = require('jquery');
import './common/water-effect/index-water.js';
import {toggleClass} from './common/helpers'
import {initIndexFormValid} from './common/indexFormValid'

import {initPreloader} from './common/preloader.js';
var autorizeBtn = document.querySelector('.autorization-btn');
var resumeBtn = document.querySelector('.resume');


/* EventListeners for flip index page */
autorizeBtn.addEventListener('click', function() {
    toggleClass('intro__content', 'active');
    autorizeBtn.style.visibility = 'hidden';
});
resumeBtn.addEventListener('click', function() {
    toggleClass('intro__content', 'active');
    autorizeBtn.style.visibility = 'visible';
});


initPreloader();
initIndexFormValid();
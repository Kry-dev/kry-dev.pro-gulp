console.log('works page');
import {initPreloader} from './common/preloader.js';
import {hamMenu} from './common/hamburgerMenu';
import {toggleClass, smoothScrollTo} from './common/helpers';
// import {initWorksFormValid} from './common/worksFormValid';

import './common/water-effect/index-water.js';
// initWorksFormValid();

hamMenu();
initPreloader();

/* scroll down to my-works section */
var downBtn = document.querySelector('.arrow-down ');
downBtn.addEventListener('click',function () {
    smoothScrollTo('works', 400);
});
/* scroll up to my-works section */
var upBtn = document.querySelector('.arrow-up__btn');
upBtn.addEventListener('click',function () {
    smoothScrollTo('works', 500);
});

// ============================================

const title = document.querySelector('.description-sl__title');
const skills = document.querySelector('.description-sl__skills');
var mainSlide = [].slice.call(document.querySelectorAll('.photos-sl__item'));

/* Statement to all sliders. Main prop.  */
var currentPos = 1;

var worksNumber = mainSlide.length;

/* Button slider (previous work) */
var prevBtnSlider = {
    elem: document.querySelector('.nav-btns__sl-btn_fill_prev').children[0],
    inc: -1,
    pos: changePos
};
/* Button slider (next work) */
var nextBtnSlider = {
    elem: document.querySelector('.nav-btns__sl-btn_fill_next').children[0],
    inc: 1,
    pos: changePos
};

/* Store for description slider */
var projectDesc = [
    { id:1, title: 'Site of brokerage and management services', skills: 'PDF TO HTML5, SCSS, GIT, WAFFLE.IO, RESPONSIVE LAYOUT, FOUNDATION, WEBPACK '},
    { id:2, title: 'DEVOPS TALKS CONFERENCE', skills: 'PSD to HTML, CSS3, JS, JQUERY, PHOTOSHOP, RESPONSIVE, BOOTSTRAP, GULP, NPM, GIT'},
    { id:3, title: 'Akreev designer portfolio', skills: 'PSD to HTML, CSS3, JS, JQUERY, PHOTOSHOP, RESPONSIVE, BOOTSTRAP, GULP, NPM, GIT'},
    { id:4, title: 'Glenerin Inn & Spa', skills: 'FIXING, new layouts, slider, HTML, CSS3, JS, JQUERY, WORDPRESS'},
    { id:5, title: 'GLOBAL MANUFACTURER OF STRETCH CEILING', skills: 'Fixing errors, MODX, psd to HTML, CSS3'},
    { id:6, title: 'Real Estate Agent', skills: 'Wordpress, add news, some fixing, HTML, CSS, JQUERY, slider, video, PHOTOSHOP'},
    { id:7, title: 'National ATM Wholesale', skills: 'OpenCart, customized layouts theme,psd to HTML, BOOTSTRAP, CSS, SCSS, JS, JQUERY, PHOTOSHOP, RESPONSIVE, GIT'},
    { id:8, title: 'QUALITY REPLACEMENT WINDOWS', skills: 'Wordpress, new layouts, some fixing,psd to HTML, CSS, JQUERY, slider, PHOTOSHOP, GIT'},
    { id:9, title: 'Personal Injury Lawyers', skills: 'Wordpress, new layouts, plugins, some fixing, HTML, CSS, JQUERY, PHOTOSHOP, GIT'},
    { id:10, title: 'Custom Home Builders Hamilton', skills: 'Wordpress, new layouts, plugins, some fixing, HTML, CSS, JQUERY, PHOTOSHOP, GIT'},
    { id:11, title: 'Business Analytics & Digital Marketing', skills: 'Webpack, Gulp, NPM, SCSS, PUG, FLEXBOX, BOOTSTRAP, JS, PSD to PUG, video, sliders'},
    { id:12, title: 'ATM Super-STORE', skills: 'CUSTOMIZATION LAYOUT, HTML, CSS, JQUERY, OPENCART CMS, admin dashboard for back-end: GRUNT, SCSS, ES6, Bootstrap, Flexbox'},
    { id:13, title: 'Southfield Windows and Doors', skills: 'Wordpress, new layouts, plugins, some fixing,psd to HTML, CSS, JQUERY, sliders, PHOTOSHOP, GIT'}
];

/* Need to correct displaing already loading document */
reDrow();

/* On click emitting currentPos  */
prevBtnSlider.elem.parentNode.addEventListener('click', function () {
    currentPos = changePos(prevBtnSlider.inc);
    reDrow();
});
nextBtnSlider.elem.parentNode.addEventListener('click', function () {
    currentPos = changePos(nextBtnSlider.inc);
    reDrow();
});

/**
 * Chenge inner property of current slider position
 * @param {*Number} inc
 */
function changePos(inc) {
    if (inc > 0) {
        return currentPos + inc > worksNumber ? 1 : currentPos + inc;
    }else{
        return currentPos + inc > 0 ? currentPos + inc : worksNumber;
    }
}

/**
 * Redrow slider section (all sliders). Depends of @currentPos global slider.
 */
function reDrow() {
    prevBtnSlider.elem.style.transform = 'translateY(-'+ ((prevBtnSlider.pos(prevBtnSlider.inc))-1) + '00%)';
    nextBtnSlider.elem.style.transform = 'translateY(-'+ ((nextBtnSlider.pos(nextBtnSlider.inc))-1) + '00%)';
    mainSlide.forEach(function(element) {
        element.classList.remove('focus');
    });
    mainSlide[currentPos - 1].classList.add('focus');

    title.innerHTML = projectDesc[currentPos - 1].title;
    skills.innerHTML = projectDesc[currentPos - 1].skills;
    smoothTextAppearance(title);
    smoothTextAppearance(skills);
}

/**
 * Sooth text appearance.
 * @param {*html element} elem
 * @param {*Number} time for letter appearende. Default 60 ms
 */
function smoothTextAppearance(elem, time = 60) {
    let elemInner = elem.innerHTML;
    let elemTimeoutcount = elemInner.length;
    elem.innerHTML = elem.innerHTML.replace(/./g, '<span class="hide-letter">$&</span>');

    // elem.innerHTML = elem.innerHTML.split('').map( el => `<span class="hide-letter">${el}</span>` ).join('');

    [].slice.call(elem.children).forEach((el, i)=>{
        setTimeout(function() {
            el.classList.add('show-letter')
        }, time * i);
    });

    /* приводим элемент в первоначальны вид. Нужно ли? */
    setTimeout(()=>{
        elem.innerHTML = elemInner;
    }, time * elemTimeoutcount)
}
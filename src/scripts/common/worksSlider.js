var worksSlider(){

    const title = document.querySelector('.description-sl__title');
    const skills = document.querySelector('.description-sl__skills');
    const link = document.querySelector('.description-sl__link');
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
        { id:1, title: 'Site of brokerage and management services', skills: 'HTML5 , SCSS, GIT, WAFFLE.IO, RESPONSIVE LAYOUT, FOUNDATION, WEBPACK '},
        { id:2, title: 'DEVOPS TALKS CONFERENCE', skills: 'HTML , CSS, JS, JQUERY, PHOTOSHOP, RESPONSIVE, GULP, NPM, GIT  '},
        { id:3, title: 'The Rocket ATM SuperStore', skills: 'CUSTOMIZATION LAYOUT, HTML , CSS, JQUERY, OPENCART CMS'},
        { id:4, title: 'ATM E-STORE', skills: 'CUSTOMIZATION LAYOUT, HTML , CSS, JQUERY, OPENCART CMS'}
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
        link.innerHTML = projectDesc[currentPos - 1].link;
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
}
export {worksSlider};
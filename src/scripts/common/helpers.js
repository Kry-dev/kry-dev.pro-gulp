/**
 * Toggle active class from element
 * @param {*String} className
 * @param {*String} keyWord
 */
function toggleClass(className, keyWord) {
    document.querySelector('.' + className).classList.toggle(className+ '_' + keyWord);
}

/**
 * Smooth scroll to element
 * @param {*String or html element} element
 * @param {*Number} duration (ms)
 */
function smoothScrollTo(element, duration) {
    /* checking type of element. If it's a string select this element by class name, else work whith html element */
    /* in other words we can pass in function class name or html element*/
    var targetBlock =
        typeof element === 'string' ?
            document.querySelector('.' + element) :
            element;
    var duration = duration || 300;
    var startPoint = window.pageYOffset;
    var distance = Math.ceil(targetBlock.getBoundingClientRect().top);
    var iteration = 120;
    var endPoint = distance + startPoint;
    var distancePerTick = distance / iteration;
    var sumParts = Math.ceil(startPoint + distancePerTick);
    var tickTime = Math.ceil(duration / iteration);

    var animate = setTimeout(function tick() {
        if (distance < 150){
            window.scrollTo(0, endPoint);
            return;
        }
        window.scrollTo(0, sumParts);
        iteration--;
        sumParts += distancePerTick;
        animate = setTimeout(tick, tickTime);
        if (iteration <= 0) {
            clearTimeout(animate);
        }
    }, tickTime)
}

export {toggleClass, smoothScrollTo};
import {toggleClass} from './helpers';

/* activate hamburger menu and animate it */
function hamMenu(){
    var hamBtn = document.querySelector('.hamburger-bnt');
    var menuItem = document.querySelectorAll('.ham-menu__item');
    
    hamBtn.addEventListener('click',function (e) {
        var timer = 200;

        /* scroll ban then menu is active  */
        if (hamBtn.className === 'hamburger-bnt'){
            document.body.style.overflow = 'hidden';
        }else {
            document.body.style.overflow = 'initial';
        }
        
        toggleClass('ham-menu','active');
        toggleClass('hamburger-bnt','active');

        menuItem.forEach(function(item) {
            /* showing menu items whith delay */
            if(item.className === 'ham-menu__item'){
                setTimeout(function(){
                    item.classList.toggle('ham-menu__item_animate')
                },timer); 
                timer += 200;
            }else{
                item.classList.toggle('ham-menu__item_animate')
            }
        })
    })
}
export {hamMenu};
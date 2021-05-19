// HEADER-POPUP

let introButton = document.querySelector('.intro__button');
let introPopup = document.querySelector('.intro__popup-background');


let player;

function onYouTubePlayerAPIReady() {   //create iframe in #vid_url   
    player = new YT.Player('vid_url', {
        height: '100%',
        width: '100%',
        videoId: 'n5BweokbxoU'
    })
}

introButton.addEventListener('click', function(){
    introPopup.classList.add('open-popup');
    document.querySelector('body').style.overflow = 'hidden';
})

introPopup.addEventListener('click', function(event){
        if(event.target == introPopup) {
            introPopup.classList.remove('open-popup');
            document.querySelector('body').style.overflow = 'auto';
            player.pauseVideo();
        }
})











// Картинки управлени слайдером
let sliderPerson = document.querySelectorAll('.slider__person-img');

let sliderText = document.querySelector('.slider__text');

// КНОПКИ

let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');


let personContainer = document.querySelector('.slider__person-container')

let active = 1;

sliderPerson.forEach(function(indicator, index){
    indicator.addEventListener('click', function(){
        active = index;
        document.querySelector('.slider__person-img--active').classList.remove('slider__person-img--active');
        indicator.classList.add('slider__person-img--active');
        sliderText.style.transform = 'translate(' + (active) * -33.333 + '%)';
        console.log(index);
    })
})

leftBtn.addEventListener('click', function(){
    active = (active > 0) ? active - 1 : 2;
    document.querySelector('.slider__person-img--active').classList.remove('slider__person-img--active');
    personContainer.children[active].classList.add('slider__person-img--active');
    sliderText.style.transform = 'translate(' + (active) * -33.333 + '%)';
})

rightBtn.addEventListener('click', function(){
    active = (active < 2) ? active + 1 : 0;
    document.querySelector('.slider__person-img--active').classList.remove('slider__person-img--active');
    personContainer.children[active].classList.add('slider__person-img--active');
    sliderText.style.transform = 'translate(' + (active) * -33.333 + '%)';
})













let modeSwitch = document.querySelector('.mode__switch');
let individualSwitch = document.querySelector('.mode__individual-switch');
let companySwitch = document.querySelector('.mode__company-switch');
let modeStarter = document.querySelector('.mode__set-starter');
let modePro = document.querySelector('.mode__set-pro');

// let modeStarter = document.querySelector('.mode__set-starter');
// let modePro = document.querySelector('.mode__set-pro');

individualSwitch.addEventListener('click', function(){
    //Переключаем ползунок влево
    modeSwitch.classList.remove('mode__switch-two');
    // Меняем цвет текста в параграфе на неактивный
    document.querySelector('.mode__individual-p').classList.add('active-p');
    // Меняем цвет текста в параграфе на активный
    document.querySelector('.mode__company-p').classList.remove('active-p');
    modePro.classList.remove('mode__set-active')
    modeStarter.classList.add('mode__set-active')
})

modeStarter.addEventListener('click', function(){
    modeStarter.classList.add('mode__set-active');
    modePro.classList.remove('mode__set-active');
    if(modeStarter.classList.contains('mode__set-active')) {
        modeSwitch.classList.remove('mode__switch-two');
        document.querySelector('.mode__individual-p').classList.add('active-p');
        // Меняем цвет текста в параграфе на активный
        document.querySelector('.mode__company-p').classList.remove('active-p');
    }
})

modePro.addEventListener('click', function(){
    modePro.classList.add('mode__set-active');
    modeStarter.classList.remove('mode__set-active');
    if(modePro.classList.contains('mode__set-active')) {
        modeSwitch.classList.add('mode__switch-two');
        document.querySelector('.mode__individual-p').classList.remove('active-p');
        // Меняем цвет текста в параграфе на активный
        document.querySelector('.mode__company-p').classList.add('active-p');
    }
})


companySwitch.addEventListener('click', function(){
    //Переключаем ползунок вправо
    modeSwitch.classList.add('mode__switch-two');
    // Меняем цвет текста в параграфе на неактивный
    document.querySelector('.mode__individual-p').classList.remove('active-p');
    // Меняем цвет текста в параграфе на активный
    document.querySelector('.mode__company-p').classList.add('active-p');
    modePro.classList.add('mode__set-active')
    modeStarter.classList.remove('mode__set-active')
})










//МОБИЛЬНОЕ МЕНЮ

let menuBtn = document.querySelector('.header__icon-menu');
let mobileMenu = document.querySelector('.header__left-item');

menuBtn.addEventListener('click', function(){
    mobileMenu.classList.toggle('header__mobile-menu--active');
    // Получаем пути к иконкам через data-атрибуты картинки
    let menuCloseIcon = menuBtn.getAttribute('data-close');
    let menuIcon = menuBtn.getAttribute('data-icon');

    if(window.screen.width <= 576 && mobileMenu.classList.contains('header__mobile-menu--active')){
        menuBtn.src = `${menuCloseIcon}`;
    } else {
        menuBtn.src = `${menuIcon}`;
    };
});
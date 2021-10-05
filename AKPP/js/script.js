//стрелка в нав у сабменю
const submenu = document.querySelector('.nav__submenu-wrapp');
if (submenu) { 
    submenu.addEventListener("click", function (e) {
        submenu.classList.toggle('nav__submenu-wrapp--is-visibal');
    });
}

// плюсик у сервисов в хеадере
const plus = document.querySelector('.header__services-plus');
const popUp = document.querySelector('.header__services-pop-up');
if (plus) { 
    plus.addEventListener("click", function (e) {//событие клика по бургеру
        plus.classList.toggle('header__services-plus--change');//добавляем класс бургеру
        popUp.classList.toggle('header__services-pop-up--visibal');//добавляем меню выезжающему класс
        
    });
}

//бургер
const burger = document.querySelector('.header__header-burger');//бургеру присваеваем значение
const backofnav = document.querySelector('.back-of-nav');//меню выезжающее присваеваем значение
const burgerNav = document.querySelector('.header__header-burger-nav');
const Nav = document.querySelector('.nav');
if (burger) { //роверка есть ли бургер
    burger.addEventListener("click", function (e) {//событие клика по бургеру
        document.body.classList.toggle('body-is-lock');// к боди добавляем класс
        burger.classList.toggle('header__header-burger--is-change');//добавляем класс бургеру
        backofnav.classList.toggle('back-of-nav__is-visibal');//добавляем меню выезжающему класс
        burgerNav.classList.toggle('header__header-burger-nav--is-visible');//добавляем меню выезжающему класс
        Nav.classList.toggle('nav__is-visibal');
    });
}

if (burgerNav) { 
    burgerNav.addEventListener("click", function (e) {
        document.body.classList.toggle('body-is-lock');
        burger.classList.toggle('header__header-burger--is-change');
        backofnav.classList.toggle('back-of-nav__is-visibal');
        burgerNav.classList.toggle('header__header-burger-nav--is-visible');
        Nav.classList.toggle('nav__is-visibal');

    });
}

if (backofnav) { 
    backofnav.addEventListener("click", function (e) {
        document.body.classList.toggle('body-is-lock');
        burger.classList.toggle('header__header-burger--is-change');
        backofnav.classList.toggle('back-of-nav__is-visibal');
        burgerNav.classList.toggle('header__header-burger-nav--is-visible');
        Nav.classList.toggle('nav__is-visibal');
        
    });
}

// в хеадер акция
const stock = document.querySelector('.header__footer-stock-inner');
const stockArrow = document.querySelector('.header__footer-stock-arrow');
const popUpStock = document.querySelector('.header__footer-stock-popUp');
if (stock) { 
    stock.addEventListener("click", function (e) {
        stockArrow.classList.toggle('header__footer-stock-arrow--is-change');
        popUpStock.classList.toggle('header__footer-stock-popUp--is-visibal');
    });
}

//прокрутка к секции
const menuLinks = document.querySelectorAll('.menu__link[data-goto]'); ////создаем массив ссылок у кого есть этот класс и атрибут data-goto (в html ссылкам пишем (data-goto="#home-id" это id блока куда перейти ) (class="menu__link" это класс для js))
if (menuLinks.length > 0) {//// проверяем есть ли что-то в массиве
    menuLinks.forEach(menuLink => {//// пробегаем по массиву
        menuLink.addEventListener("click", onMenuLinkClick);//// вешаем событие клик и при клике направляемся в функцию onMenuLinkClick
    });

    function onMenuLinkClick(e) {//// создаем функцию onMenuLinkClick
        const menuLink = e.target;//// получаем обьект по которому кликнули
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {//// условие  если (заполнен ли data-goto) и (существует ли обьект на который ссылается этот data-goto)
            const gotoBlock = document.querySelector(menuLink.dataset.goto);//// получаем в константу этот обьект
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 30;////вычисляем положение обьекта с учетом высоты шапки (gotoBlockValue = расстояние от верха + кол-во прокрученых пикселей по оси Y - высота шапки)
            
            window.scrollTo({//// обращаемся к окну браузера и функция прокрутки
                top: gotoBlockValue,////указываю нужно прокрутиться к месту высчитанному до этого
                behavior: "smooth"//// прокрутить плавно
            });
        }
    }
}

//прокрутка к секции

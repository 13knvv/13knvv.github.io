//кнопка включения музыки
const btm1 = document.querySelector('.btm-m1');
const btm2 = document.querySelector('.btm-m2');
const btm3 = document.querySelector('.btm-m3');
const control1 = document.querySelector('.btm-music__control1');
const control2 = document.querySelector('.btm-music__control2');
const control3 = document.querySelector('.btm-music__control3');
if (btm1) { 
    btm1.addEventListener("click", function (e) {
        control1.classList.toggle('btm-music--play');
        control1.classList.toggle('btm-music--stop'); 
    });
}

if (btm2) { 
    btm2.addEventListener("click", function (e) {
        control2.classList.toggle('btm-music--play');
        control2.classList.toggle('btm-music--stop'); 
    });
}

if (btm3) { 
    btm3.addEventListener("click", function (e) {
        control3.classList.toggle('btm-music--play');
        control3.classList.toggle('btm-music--stop'); 
    });
}


//бургер
const burger = document.querySelector('.nav-burger');
const menuBody = document.querySelector('.site-nav');
if (burger) { 
    burger.addEventListener("click", function (e) {
        document.body.classList.toggle('is_lock');
        burger.classList.toggle('is_change');
        menuBody.classList.toggle('is_active');
    });
}



/*


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
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;////вычисляем положение обьекта с учетом высоты шапки (gotoBlockValue = расстояние от верха + кол-во прокрученых пикселей по оси Y - высота шапки)
                ////////////////закрываем выезжающее меню после нажатия ссылки///////////////
            if (burger.classList.contains('change')) {/// если у массива burger есть класс .change
                document.body.classList.remove('lock');// то убрать 
                burger.classList.remove('change');//      эти классы
                menuBody.classList.remove('_active');//   у этих
                headerlang.classList.remove('show');//    массивах
            }
                /////////////////end закрыли выезжающее меню после нажатия ссылки////////////////////
            window.scrollTo({//// обращаемся к окну браузера и функция прокрутки
                top: gotoBlockValue,////указываю нужно прокрутиться к месту высчитанному до этого
                behavior: "smooth"//// прокрутить плавно
            });
            e.preventDefault();////отключение работы ссылки
        }
    }
}

//прокрутка к секции
*/
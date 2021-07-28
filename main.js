
let menubtn = document.querySelectorAll('.header-btn');
for (item of menubtn) {
    item.onclick = function () {
        document.getElementById('nav-check').checked = false;
    }
}


//Позиция прокрутки
const scrollPos = () => window.pageYOffset || document.documentElement.scrollTop;


// навигация по сайту 
let heder = document.querySelector('.header');
let head_height = heder.clientHeight;
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        let block = document.getElementById(blockID.substr(1, blockID.length - 1)); //#hid2
        // console.log(head_height);
        let jmp = block.offsetTop;
        if (scrollPos() > block.offsetTop)
            jmp = jmp - head_height;
        window.scrollTo({
            top: jmp,
            behavior: 'smooth'
        })
    })
}



//Скрытие / Показ шапки при прокрутке вниз / вверх

let lastScroll = 0;
const defaultOffsetScroll = 200;
const headerIsHidden = () => heder.classList.contains('header__hide');

window.addEventListener('scroll', function () {
    if (scrollPos() > lastScroll && !headerIsHidden() && scrollPos() > defaultOffsetScroll) {
        heder.classList.add('header__hide');
    }
    else if (scrollPos() < lastScroll && headerIsHidden()) {
        heder.classList.remove('header__hide');
    }
    lastScroll = scrollPos();
})


const spoilers = document.querySelectorAll('.question-item');
for (item of spoilers) {
    item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        }
        else {
             for (el of spoilers) {
                 el.classList.remove('active');
             }
            this.classList.add('active');
        }
    })
}



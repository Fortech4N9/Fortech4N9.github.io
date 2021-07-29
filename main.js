
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

// спойлеры
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

//модальные окна 
const btns = document.querySelectorAll('.header-button');
const modalOverlay = document.querySelector('.modals-overlay');
const modals = document.querySelectorAll('.popap-enterence');
const back = document.querySelector('.back')

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('popap-enterence--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('popap-enterence--visible');
		modalOverlay.classList.add('modals-overlay--visible');
	});
});

back.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == back) {
		modalOverlay.classList.remove('modals-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('popap-enterence--visible');
		});
	}
});
//Função para parar o scroll!
function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.scrollX ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}


//Função para habilitar o scroll!
function enableScroll() {
    window.onscroll = function () { };
}




const openModalButtom = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () => {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalButtom, closeModalButton, fade].forEach((el) => {
    el.addEventListener('click', () => toggleModal())
});

openModalButtom.addEventListener('click',() => disableScroll())
closeModalButton.addEventListener('click', () => enableScroll())
fade.addEventListener('click', () => enableScroll())


//Modal 2!
const openModalButtom2 = document.querySelector('#open-modal2');
const closeModalButton2 = document.querySelector('#close-modal2');
const modal2 = document.querySelector('#modal2');
const fade2 = document.querySelector('#fade2');

const toggleModal2 = () => {
    modal2.classList.toggle('hide');
    fade2.classList.toggle('hide');
}

[openModalButtom2, closeModalButton2, fade2].forEach((el) => {
    el.addEventListener('click', () => toggleModal2())
});

openModalButtom2.addEventListener('click',() => disableScroll())
closeModalButton2.addEventListener('click', () => enableScroll())
fade2.addEventListener('click', () => enableScroll())
//Fim Modal 2!





document.getElementById('ambientacao').addEventListener('click',() => playAudio())
document.getElementById('parar').addEventListener('click',() => pauseAudio())
document.getElementById('open-modal2').addEventListener('click',() => playVideo())
document.getElementById('close-modal2').addEventListener('click',() => pauseVideo())


function playAudio() {
    let x = document.getElementById("audio");
    x.play();
}

function playVideo() {
    let x = document.getElementById("video");
    x.play();
}

function pauseAudio() {
    let x = document.getElementById("audio");
    x.pause();
}

function pauseVideo() {
    let x = document.getElementById("video");
    x.pause();
} 

const slideCopy = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector('.logos').appendChild(slideCopy);
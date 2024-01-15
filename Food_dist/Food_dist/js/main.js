const open_btns = document.querySelectorAll('button[data-modal]')
const close_btns = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

open_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})

close_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})

const slides = document.querySelectorAll('.offer__slide')
const next_btn = document.querySelector('.offer__slider-next')
const prev_btn = document.querySelector('.offer__slider-prev')
let cur = document.querySelector('#current')
let slideIndex = 0

slideShow(slideIndex)

function slideShow(n) {

    if (n === slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1

    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')
}



next_btn.onclick = () => {
    slideIndex++

    if (cur.textContent < 4) {
        cur.textContent = '0' + (+cur.textContent + 1)
    
    }
    
    slideShow(slideIndex)
}

prev_btn.onclick = () => {
    slideIndex--
    if (cur.textContent > 1) {
        cur.textContent = '0' + (+cur.textContent - 1)
        

    }
    slideShow(slideIndex)
}






const tabcont = document.querySelectorAll('.tabcontent')
const btns = document.querySelectorAll('.tabheader__item')

let tabcontIndex = 0

let prev = 0

function tabShow(k) {
    if (k === tabcont.length) {
        tabcontIndex = 0
    }

    if (k < 0) {
        tabcontIndex = tabcont.length - 1
    }
    tabcont.forEach(tab => tab.classList.add('hide', 'fade'))
    tabcont[tabcontIndex].classList.remove('hide')
}

btns.forEach((btn, idx) => {
    btn.onclick = () => {

        tabcontIndex++
        btns[prev].classList.remove('tabheader__item_active')
        btn.classList.add('tabheader__item_active')
        prev = idx
        tabShow(tabcontIndex)
    }
})

tabShow(tabcontIndex)





const user_data = {
    gender: "woman"
}



const gender_btns = document.querySelectorAll('[data-gender]')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const actions = document.querySelectorAll('.calculating__choose_big div')
const result_view = document.querySelector('.res')

gender_btns.forEach(btn => {
    btn.onclick = () => {
        gender_btns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        const g = btn.dataset.gender
        user_data["gender"] = g
        
    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        user_data[inp.id] = inp.value
    }
})

let prev_div = 1
actions.forEach((div, idx)=> {
    div.onclick = () => {

        actions[prev_div].classList.remove('calculating__choose-item_active')
        div.classList.add('calculating__choose-item_active')
        prev_div = idx

        const cft = div.dataset.cft

        if(user_data.gender === 'woman') {
            const result =  (655.1 + (9.563 * user_data['weight']) + (1.85 * user_data['height']) - (4.676 * user_data['age'])) * cft

            result_view.textContent = result.toFixed(0)
        } else {
            const result = (66.5 + (13.75 * user_data['weight']) + (5.003 * user_data['height']) - (6,775 * user_data['age'])) * cft

            result_view.textContent = result.toFixed(0)
        }
    }
})




const sec = document.querySelector('#seconds')
const min = document.querySelector('#minutes')
const hour = document.querySelector('#hours')
let seconds = 60
setInterval(() => {
    if(sec.textContent <= 0) {
        sec.textContent = seconds
        min.textContent--
        jsConfetti.addConfetti()
    }
    
    sec.textContent--

}, 1000)

const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

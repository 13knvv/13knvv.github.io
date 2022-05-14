const btnPrev = document.getElementById('carousel__btn_prev')
const btnNext = document.getElementById('carousel__btn_next')
const carousel = document.getElementById('carousel__img-inner')
let carouselPosition = 0
let step = 300
let numberOfVisibleImg = 2
const countImg = carousel.querySelectorAll('img').length

btnPrev.addEventListener('click', onPrev) 
btnNext.addEventListener('click', onNext) 

function onPrev() {
  carouselPosition += step
  carouselPosition = Math.min(carouselPosition, 0)
  carousel.style.marginLeft = carouselPosition + 'px'
}

function onNext() {
  carouselPosition -= step
  carouselPosition = Math.max(carouselPosition, -step * (countImg - numberOfVisibleImg))
  carousel.style.marginLeft = carouselPosition + 'px'
}

//////////////////////
const imgArr = carousel.querySelectorAll('img')
const moduleImgWrapp = document.querySelector('.module-imgWrapp')
const moduleImg = document.querySelector('.module-img')
const x = document.querySelector('.module-x')


imgArr.forEach((img) => {
  img.addEventListener('click', openModuleImg)
})

function openModuleImg(e) {
  moduleImgWrapp.style.display = 'flex'
  moduleImg.src = e.target.src
  document.body.style.overflow  = 'hidden'
}

moduleImgWrapp.addEventListener('click', closeModuleImg)

function closeModuleImg(e) {
  if (e.target === moduleImgWrapp || e.target === x ) {
    moduleImgWrapp.style.display = 'none'
    moduleImg.src = ''
    document.body.style.overflow  = 'visible'
  }
  
}
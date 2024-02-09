const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  slidesPerView:'auto',
  centeredSlides: true,
  speed: 1000,
 
 });

//Make the slider elements visible before the first slider events 
const container = document.querySelector('.container')
const sliderBg = document.querySelector('.slider-bg')
const svg = document.querySelector('svg')
const sliderText = document.querySelectorAll('.swiper-slide-active>h2')
const sliderImage = document.querySelector('.swiper-slide-active>div')
container.style.backgroundColor = '#B09675' 
//sliderText.style.opacity = '100%'
sliderImage.style.opacity = '100%'
sliderBg.style.backgroundColor = '#B09675'
svg.style.fill='#B09675'

 
//play when slider moves from right to left
 swiper.on('slideNextTransitionStart',()=>{
  const sliderText = document.querySelectorAll('.swiper-slide-active>h2')
  const sliderImage = document.querySelector('.swiper-slide-active>div')
  const prevSliderText = document.querySelectorAll('.swiper-slide-prev>h2')
  const prevSliderImage = document.querySelector('.swiper-slide-prev>div')
  const currentSlide = document.querySelector('.swiper-slide-active')
  const sliderBg = document.querySelector('.slider-bg')
  const svg = document.querySelector('svg')
  const nextAnim = gsap.timeline()
  nextAnim.fromTo(sliderText, {opacity:0, x:250}, {opacity:1, x:0, duration:1, ease:'power4-out'})
  nextAnim.fromTo(sliderImage, {x:150, opacity:0}, {x:0, opacity:1, duration:0.7, ease:'power4-out'}, '-=0.7')
  nextAnim.fromTo(prevSliderText, {opacity:1, x:0}, {opacity:0, x:-200, duration:0.5, ease:'power4-out'}, '<')
  nextAnim.fromTo(prevSliderImage, {x:0, opacity:1}, {x:-150, opacity:0, duration:0.5, ease:'power4-out'}, '<')
  nextAnim.fromTo(sliderBg, {yPercent:150}, {yPercent:0, duration:0.8, ease:'power4-out'}, '<')
  nextAnim.to('.container', {backgroundColor: `${backgroundColor}`, duration:0}, '-=0.2')
 })

//reverse play when slider moves from left to right
 swiper.on('slidePrevTransitionStart',()=>{
  const sliderText = document.querySelectorAll('.swiper-slide-active>h2')
  const sliderImage = document.querySelector('.swiper-slide-active>div')
  const nextSliderText = document.querySelectorAll('.swiper-slide-next>h2')
  const nextSliderImage = document.querySelector('.swiper-slide-next>div')
  const currentSlide = document.querySelector('.swiper-slide-active')
  const sliderBg = document.querySelector('.slider-bg')
  const svg = document.querySelector('svg')
  const nextAnim = gsap.timeline()
  nextAnim.fromTo(sliderText, {opacity:0, x:-250}, {opacity:1, x:0, duration:1, ease:'power4-out'})
  nextAnim.fromTo(sliderImage, {x:-150, opacity:0}, {x:0, opacity:1, duration:0.7, ease:'power4-out'}, '-=0.7')
  nextAnim.fromTo(nextSliderText, {opacity:1, x:0}, {opacity:0, x:200, duration:0.5, ease:'power4-out'}, '<')
  nextAnim.fromTo(nextSliderImage, {x:0, opacity:1}, {x:150, opacity:0, duration:0.5, ease:'power4-out'}, '<')
  nextAnim.fromTo(sliderBg, {yPercent:150}, {yPercent:0, duration:0.8, ease:'power4-out'}, '<')
  nextAnim.to('.container', {backgroundColor: `${backgroundColor}`, duration:0}, '-=0.2')
 })

 //change the slider bg to match flavours
 function changeBgColor () {
  const currentSlide = document.querySelector('.swiper-slide-active');
 const sliderBg = document.querySelector('.slider-bg');
 const svg = document.querySelector('svg')

 const slideClass = currentSlide.classList;

 switch (true) {
  case slideClass.contains('is-strawberry'):
   backgroundColor = '#F4B9C8';
   break;
  case slideClass.contains('is-banana'):
   backgroundColor = '#FDEE9A';
   break;
  case slideClass.contains('is-ube'):
   backgroundColor = '#D4B6D4';
   break;
  case slideClass.contains('is-mango'):
   backgroundColor = '#FFD249';
   break;
  case slideClass.contains('is-churro'):
   backgroundColor = '#E27391';
   break;
  case slideClass.contains('is-coffee'):
   backgroundColor = '#B09675';   
   break;
  default:
   // If none of the above conditions match
   backgroundColor = 'defaultColor';  
 }
 sliderBg.style.backgroundColor = backgroundColor;
 svg.style.fill = backgroundColor;

 return backgroundColor;

}

 swiper.on('transitionStart', changeBgColor)
 

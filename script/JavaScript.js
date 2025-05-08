// site loaded

window.addEventListener('load',function(){
    window.scrollTo(0,0);
});

// burger

const navItems = document.getElementById("nav-items");
const burgerMenu = document.getElementById("burger-menu");

burgerMenu.addEventListener('click', function() {
    if (navItems.classList.contains('active')) {
        // Закрытие
        navItems.style.height = navItems.scrollHeight + "px"; // сначала ставим высоту
        requestAnimationFrame(function() {
            navItems.style.height = "0"; // потом сбрасываем
        });
        navItems.classList.remove('active');
    }
    else {
        // Открытие
        navItems.style.height = "0";
        navItems.classList.add('active');
        requestAnimationFrame(function() {
            navItems.style.height = navItems.scrollHeight + "px";
        });
    };
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
        navItems.style.height = "";
        navItems.classList.remove('active');
    };
});
let header = document.querySelector(".header");
let lastScroll = 0;
window.addEventListener('scroll', function(){
    let navItems = document.getElementById("nav-items");
    let burgerIsOpen = navItems.classList.contains("active");
    let currentScroll = window.pageYOffset;
if(!burgerIsOpen){
    if(currentScroll < lastScroll){
        header.classList.remove("hidden");
    }
    else if(currentScroll > lastScroll && currentScroll > 60){
        header.classList.add("hidden");
    }
};
    lastScroll = currentScroll;
    console.log(lastScroll);
}); 

// our-heroes remodulade

let front = document.querySelector(".Our-heroes__container");
let originalContent = front.innerHTML;    // Сохраняем изначальный HTML один раз при загрузке
let isDesktopVersion = false;
function updateContent() {
    if (window.innerWidth <= 900 && !isDesktopVersion) {
        front.innerHTML = `
            <div class="Our-heroes__left">
                <img src="images/Our-heroes.jpg" alt="">
            </div>
            <h2>Our heroes</h2>
            <a href="#" class="Our-heroes__btn btn"><span>Heroes characteristics</span></a>`;
            isDesktopVersion = true;
    }
    else if (window.innerWidth > 900 && isDesktopVersion){
        // Возвращаем изначальный HTML
        front.innerHTML = originalContent;
        isDesktopVersion = false;
    }
}
window.addEventListener("resize", updateContent);
updateContent();

 // Ждём полной загрузки страницы
function preload(){
   const preloader = document.getElementById('preloader');
   const loadingText = document.getElementById('loading-text');
 
   // Этап 1: Показ "Загрузка..."
   loadingText.textContent = 'Загрузка...';
 
   setTimeout(() => {
     // Этап 2: Меняем текст через 3 секунды
     loadingText.textContent = 'Проверка на бота...';
 
     setTimeout(() => {
       // Этап 3: Прелоадер исчезает через 3 секунды после второго текста
       preloader.style.transition = 'opacity 0.6s ease';
       preloader.style.opacity = 0;
 
       setTimeout(() => {
         preloader.style.display = 'none';
         document.body.style.overflow = 'auto'; // Возвращаем прокрутку
       }, 600); // Ждём окончания анимации исчезновения
     }, 3000);
   }, 3000);
};
preload();
  
function updateContent() {
      const originalContent = front.innerHTML;
      let isDesktopVersion = window.innerWidth > 900;
      if (window.innerWidth <= 900 && isDesktopVersion) {
        front.innerHTML = `
          <div class="Our-heroes__left">
            <img src="images/Our-heroes.jpg" alt="">
          </div>
          <h2>Our heroes</h2>
          <a href="#" class="Our-heroes__btn btn"><span>Heroes characteristics</span></a>`;
        isDesktopVersion = false;
      } 
      else if (window.innerWidth > 900 && !isDesktopVersion) {
        front.innerHTML = originalContent;
        isDesktopVersion = true;
      }
}
window.addEventListener("resize", updateContent);
updateContent();
// Our-heroes water effect

const splash = document.querySelector('.paint-splash');
const container = document.querySelector('.Our-heroes__container');

const colors = ['#FF3C38', '#FF5E00', '#FFD700', '#00C896', '#008CFF', '#9A00FF'];
let lastColor = null;

function getRandomColor() {
  let newColor;
  do {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  } while (newColor === lastColor);

  lastColor = newColor;
  return newColor;
}

function triggerPaintSplash() {
  const color = getRandomColor();
  
  // Сразу применяем цвет к всплеску
  splash.style.backgroundColor = color;
  splash.style.opacity = 1; // Убираем задержку в изменении прозрачности
  splash.style.transform = 'translateY(0) scale(1)'; // Расширение и опускание

  splash.style.animation = 'none';
  void splash.offsetWidth; // Перезапуск анимации
  splash.style.animation = 'paintFallSmooth 2.8s ease-in-out forwards'; // Плавная анимация

  // Меняем цвет фона в момент завершения анимации
  setTimeout(function() {
    container.style.backgroundColor = color;
  },1375);
}

triggerPaintSplash();
setInterval(triggerPaintSplash, 7000);

// slides

let slides = document.querySelectorAll(".slide");
let indicators = document.querySelectorAll(".carousel__indicators");
let currentIndex = 0;
function showSlide(){
    for(let i=0; i < slides.length; i++){
        slides[i].style.opacity = "0";
        slides[i].style.transition = "opacity 0.5s ease, transform 0.5s ease";
        slides[i].style.transform = "translateX(-100%)";
        indicators[i].classList.remove("active");
    }
    slides[currentIndex].style.opacity = "1";
    slides[currentIndex].style.transform = "translateX(0)";
    indicators[currentIndex].classList.add("active");
}
function nextSlide(){
    currentIndex++;
    if(currentIndex>=slides.length){
        currentIndex = 0;
    }
    showSlide();
}
function goToSlide(index){
    currentIndex = index;
    showSlide()
}

for(let i=0;i<indicators.length;i++){
        indicators[i].addEventListener('click',function(){
            goToSlide(i);
        })
}


showSlide();

setInterval(nextSlide,5000);

// rating

const ratings = [
  { selector: ".Marvel__card__image-1", rating: 7.9 },
  { selector: ".Marvel__card__image-2", rating: 6.7 },
  { selector: ".Marvel__card__image-3", rating: 7.0 },
  { selector: ".Marvel__card__image-4", rating: 7.0 },
  { selector: ".Marvel__card__image-5", rating: 6.9 },
  { selector: ".Marvel__card__image-6", rating: 8.0 },
  { selector: ".Marvel__card__image-7", rating: 7.2 },
  { selector: ".Marvel__card__image-8", rating: 6.8 }
];

ratings.forEach(({selector, rating}) => {
    const card = document.querySelector(selector);
    if (!card) return;
    const rateBox = card.querySelector(".card__rate");
    rateBox.querySelector("span").textContent = rating.toFixed(1);
    if (rating >= 7.9) {
        rateBox.style.backgroundColor = "green";
      } else if (rating >= 7) {
        rateBox.style.backgroundColor = "orange";
      } else {
        rateBox.style.backgroundColor = "red";
      }
});

// scrollbar

const wrapper = document.querySelector(".Marvel__cards__wrapper");
const track = document.querySelector(".scroll-track");
const thumb = document.querySelector(".scroll-thumb");

function updateThumb(){
    const visible = wrapper.clientWidth;
    const scrollWidth = wrapper.scrollWidth;
    const ratio = visible / scrollWidth;
    const trackWidth = track.offsetWidth;
    const thumbWidth = Math.max(trackWidth * ratio, 100);
    thumb.style.width = `${thumbWidth}px`;
    updateThumbPosition();
};

function updateThumbPosition(){
    const ratio = wrapper.scrollLeft / (wrapper.scrollWidth - wrapper.clientWidth);
    const maxLeft = track.offsetWidth - thumb.offsetWidth;
    thumb.style.left = `${ratio * maxLeft}px`
};

wrapper.addEventListener('scroll',updateThumbPosition);
window.addEventListener('resize',updateThumb);

let isDragging = false;
let startX, startScrollLeft;

thumb.addEventListener('mousedown', (event)=>{
    isDragging = true;
    startX = event.clientX;
    startScrollLeft = wrapper.scrollLeft;
    document.body.style.userSelect = "none";
});

document.addEventListener('mousemove', (event)=>{
    if(!isDragging) return;
    const dx = event.clientX - startX;
    const scrollRatio = (wrapper.scrollWidth - wrapper.clientWidth) / (track.offsetWidth-thumb.offsetWidth);
    wrapper.scrollLeft = startScrollLeft + dx * scrollRatio;
});

document.addEventListener('mouseup', () =>{
    isDragging = false;
    document.body.style.userSelect = '';
});
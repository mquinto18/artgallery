let loginRegister = document.querySelector(".login-section");
let loginOverlay = document.querySelector(".myLogin-overlap");
let registerOverlay = document.querySelector(".myRegister-overlap");
let closeOvelay = document.querySelector(".closebtnRegis");
let closeLog = document.querySelector(".closebtnLog");
let whiteLine = document.querySelector(".white-line");
let register = document.querySelector(".register");
let login = document.querySelector(".login");
let cart = document.querySelector(".cart");

function scrollHeader(){
    const headerColor = document.querySelector(".header-menu");
    if(this.scrollY >= 80) headerColor.classList.add("header-scroll");
    loginRegister.style.border = "1px solid #000000";
    whiteLine.style.backgroundColor = "#000000";
    cart.style.filter = "invert(0%) sepia(100%) saturate(0%) hue-rotate(22deg) brightness(94%) contrast(101%)";
}


function openLogin(event) {
  event.preventDefault(); // Prevent the default behavior of the click event
  loginOverlay.style.display = "block";
}

function closeLogin() {
  loginOverlay.style.display = "none";
}

function openRegister(event) {
  event.preventDefault(); // Prevent the default behavior of the click event
  registerOverlay.style.display = "block";
}

function closeRegister() {
  registerOverlay.style.display = "none";
}



closeLog.addEventListener("click", closeLogin);
login.addEventListener("click", function(event) {
  openLogin(event);
});


closeOvelay.addEventListener("click", closeRegister);
register.addEventListener("click", function(event) {
  openRegister(event);
});






window.addEventListener("scroll", scrollHeader);

var swiperArt = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: -100,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  durantion: 2500,
  delay: 400
})
sr.reveal(`.title-name`);
sr.reveal(`.title-button`, {delay:500})
sr.reveal(`.section-title`, {delay:600})
sr.reveal(`.content`, {interval: 100});
sr.reveal(`.third-title`, {origin:"bottom"});
sr.reveal(`.third-line`, {origin:"left"});
sr.reveal(`.text-description`, {origin:"left"});
sr.reveal(`.third-btn`, {origin:"right"});
sr.reveal(`.third-text, .third-texts`);
sr.reveal(`.swiper-wrapper`, {delay:0})
sr.reveal(`.fourth-title`);
sr.reveal(`.first-content`, {origin:"bottom", interval: 80});
sr.reveal(`.left`, {origin:"left"});
sr.reveal(`.right`, {origin:"right"});
sr.reveal(`.fifth-line`, {origin:"left"});
sr.reveal(`.fifth-btn`, {origin:"bottom"});
sr.reveal(`.sixth-title,.sixth-description`, {origin:"left"});
sr.reveal(`.sixth-updated`, {origin:"right"});
sr.reveal(`.sixth-img`, {origin:"left", delay:500});
sr.reveal(`.seven-first, .seven-two, .seven-two`, {origin:"bottom"});






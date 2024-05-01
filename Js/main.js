const serarchEl = document.querySelector(".search");
const searchInputEl = serarchEl.querySelector("input");

serarchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  serarchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  serarchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      //gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //버튼 보이기
      gsap.to(toTopEl, .2, {
        x: 0
      });
    } else {
      //배지 보이기
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: "block",
      });
      //버튼 숨기기
      gsap.to(toTopEl, .2, {
        x: 100
      });
    }
  }, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

//visual 영역의 이미지 나타내기
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

//new swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
new Swiper(".promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awrads .swiper-prev',
    nextEl: '.awrads .swiper-next'
  }
});


const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한반복
    yoyo: true,
    ease: Power1.easseInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating', 1, 15);
floatingObject('.floating', .5, 15);
floatingObject('.floating', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 설정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();



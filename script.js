const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__link");
// select by id
const dealsLeft = document.getElementById("dealsLeft");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
var isAnimating = false;

function scrollLeftAnimate(elem, unit) {
  if (!elem || isAnimating) {
    //if element not found / if animating, do not execute slide
    return;
  }

  var time = 300; // animation duration in MS, the smaller the faster.
  var from = elem.scrollLeft; // to continue the frame posistion
  var aframe = 10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
  isAnimating = true; //if animating prevent double trigger animation

  var start = new Date().getTime(),
    timer = setInterval(function () {
      var step = Math.min(1, (new Date().getTime() - start) / time);
      elem.scrollLeft = step * unit + from;
      if (step === 1) {
        clearInterval(timer);
        isAnimating = false;
      }
    }, aframe);
}

function initDealCarrousel(dealCarrouselID) {
  var target = document.querySelector(
    "#" + dealCarrouselID + " .va-carrousel-flexbox"
  );
  var cardOutterWidth;
  var maxCarrouselScroll;

  function updateUpaCarrouselInfo() {
    cardOutterWidth = document.querySelector(
      "#" + dealCarrouselID + " .va-card"
    ).offsetWidth; //you can define how far the scroll
    maxCarrouselScroll =
      document.querySelectorAll("#" + dealCarrouselID + " .va-card").length *
        cardOutterWidth -
      document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox")
        .clientWidth;
  }

  document
    .querySelector("#" + dealCarrouselID + " .deals-scroll-left")
    .addEventListener("click", function () {
      updateUpaCarrouselInfo(); //in case window resized, will get new info
      if (target.scrollLeft > 0) {
        scrollLeftAnimate(target, -cardOutterWidth * 1.1);
      }
    });

  document
    .querySelector("#" + dealCarrouselID + " .deals-scroll-right")
    .addEventListener("click", function () {
      updateUpaCarrouselInfo(); //in case window resized, will get new info
      if (target.scrollLeft < maxCarrouselScroll) {
        scrollLeftAnimate(target, cardOutterWidth * 1.1);
      }
    });
}
// Initiate the container with ID
initDealCarrousel("va_container"); //carrousel ID
function reveal1() {
  var reveals1 = document.querySelectorAll(".image-gallery");

  for (var i = 0; i < reveals1.length; i++) {
    var windowHeight1 = window.innerHeight;
    var elementTop1 = reveals1[i].getBoundingClientRect().top;
    var elementVisible1 = 150;

    if (elementTop1 < windowHeight1 - elementVisible1) {
      reveals1[i].classList.add("active");
    } else {
      reveals1[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal1);
function reveal() {
  var reveals = document.querySelectorAll(".slider");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
function reveal2() {
  var reveals2 = document.querySelectorAll(".re");

  for (var i = 0; i < reveals2.length; i++) {
    var windowHeight2 = window.innerHeight;
    var elementTop2 = reveals2[i].getBoundingClientRect().top;
    var elementVisible2 = 100;

    if (elementTop2 < windowHeight2 - elementVisible2) {
      reveals2[i].classList.add("active");
    } else {
      reveals2[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal2);
function reveal3() {
  var reveals3 = document.querySelectorAll(".faq");

  for (var i = 0; i < reveals3.length; i++) {
    var windowHeight3 = window.innerHeight;
    var elementTop3 = reveals3[i].getBoundingClientRect().top;
    var elementVisible3 = 150;

    if (elementTop3 < windowHeight3 - elementVisible3) {
      reveals3[i].classList.add("active");
    } else {
      reveals3[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal3);

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      var previousSlide = this.slides[this.previousIndex];
      var currentSlide = this.slides[this.activeIndex];

      var previousVideo = previousSlide.querySelector("video");
      if (previousVideo) {
        previousVideo.pause();
      }
    },
  },
});

swiper.on("slideChange", function () {
  var currentSlide = this.slides[this.activeIndex];

  var currentVideo = currentSlide.querySelector("video");
  if (currentVideo) {
    currentVideo.play();

    currentVideo.addEventListener("ended", function () {
      swiper.slideNext();
    });
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    swiper.slidePrev();
  }
  
  else if (e.key === "ArrowDown") {
    swiper.slideNext();
  }
});



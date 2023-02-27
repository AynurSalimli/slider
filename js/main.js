const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let latestSlide = slides.length - 1;

slides.forEach((slide, index) => {
  let calculatePercent = 100 * (index - currentSlide);
  slide.style.transform = `translateX(${calculatePercent}%)`;
});

nextBtn.addEventListener("click", () => {
  if (currentSlide === latestSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides.forEach((slide, index) => {
    let calculatePercent = 100 * (index - currentSlide);
    slide.style.transform = `translateX(${calculatePercent}%)`;
  });
});

prevBtn.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = latestSlide;
  } else {
    currentSlide--;
  }

  slides.forEach((slide, index) => {
    let calculatePercent = 100 * (index - currentSlide);
    slide.style.transform = `translateX(${calculatePercent}%)`;
  });
});

// second slider

const secondPrevBtn = document.querySelector(".second--btn-prev");
const secondNextBtn = document.querySelector(".second--btn-next");
const secondSlides = document.querySelectorAll(".second--slide");

let secondCurrentSlide = 0;
let secondLatestSlide = secondSlides.length - 1;

secondSlides.forEach((slide, index) => {
  let calculatePercent = 100 * index;
  slide.style.transform = `translateX(${calculatePercent}%)`;
});

secondNextBtn.addEventListener("click", () => {
  if (secondCurrentSlide === secondLatestSlide) {
    secondCurrentSlide = 0;
  } else {
    secondCurrentSlide++;
  }

  secondSlides.forEach((slide, index) => {
    let calculatePercent = 100 * (index - secondCurrentSlide);
    slide.style.transform = `translateX(${calculatePercent}%)`;
  });
});

secondPrevBtn.addEventListener("click", () => {
  if (secondCurrentSlide === 0) {
    secondCurrentSlide = secondLatestSlide;
  } else {
    secondCurrentSlide--;
  }

  secondSlides.forEach((slide, index) => {
    let calculatePercent = 100 * (index - secondCurrentSlide);
    slide.style.transform = `translateX(${calculatePercent}%)`;
  });
});

// third slider

const thirdPrevBtn = document.querySelector(".third-btn-prev");
const thirdNextBtn = document.querySelector(".third-btn-next");
const thirdSlides = document.querySelectorAll(".third--slide");
const thirdDots = document.querySelector(".dots");

let thirdCurrentSlide = 0;
let thirdLatestSlide = thirdSlides.length - 1;

thirdSlides.forEach((slide, index) => {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  if (index == thirdCurrentSlide) {
    dot.classList.add("active");
  }
  thirdDots.appendChild(dot);

  let calculatePercent = 100 * index;
  slide.style.transform = `translateX(${calculatePercent}%)`;
});

thirdNextBtn.addEventListener("click", () => {
  if (thirdCurrentSlide === thirdLatestSlide) {
    thirdCurrentSlide = 0;
  } else {
    thirdCurrentSlide++;
  }

  thirdSlides.forEach((slide, index) => {
    let calculatePercent = 100 * (index - thirdCurrentSlide);
    slide.style.transform = `translateX(${calculatePercent}%)`;
  });
  changeActive();
});

thirdPrevBtn.addEventListener("click", () => {
  if (thirdCurrentSlide === 0) {
    thirdCurrentSlide = thirdLatestSlide;
  } else {
    thirdCurrentSlide--;
  }

  thirdSlides.forEach((slide, index) => {
    let calculatePercent = 100 * (index - thirdCurrentSlide);
    slide.style.transform = `translateX(${calculatePercent}%)`;
  });
  changeActive();
});

function changeActive() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.remove("active");

    if (index == thirdCurrentSlide) {
      dot.classList.add("active");
    }
  });
}

function changeSlidesWithDots() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      document
        .querySelectorAll(".dot")
        .forEach((dot) => dot.classList.remove("active"));
      dot.classList.add("active");
      thirdCurrentSlide = index;
      thirdSlides.forEach((slide, index) => {
        let calculatePercent = 100 * (index - thirdCurrentSlide);
        slide.style.transform = `translateX(${calculatePercent}%)`;
      });
    });
  });
}

changeSlidesWithDots();

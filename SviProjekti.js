document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".slides");
  const dotsContainer = document.querySelector(".dots");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let slidesData = [];

  // Load slides data from external file (or define it here)
  function loadSlidesData() {
    slidesData = [
      {
        id: 1,
        title:
          "Razvoj i implementacija prilagodljivih 3D printanih ortopedskih pomagala",
        image: "img/projekt1.jpg",
      },
      {
        id: 2,
        title: "Robotizirani Sustav za Automatizirano Sviranje Klavira",
        image: "img/projekt2.png",
      },
    ];
    renderSlides();
  }

  function renderSlides() {
    slidesContainer.innerHTML = "";
    dotsContainer.innerHTML = "";

    slidesData.forEach((slide, index) => {
      const slideElement = document.createElement("div");
      slideElement.classList.add("slide");
      slideElement.innerHTML = `
                  <img src="${slide.image}" alt="${slide.title}">
                  <div class="slide-title">${slide.title}</div>
              `;
      slidesContainer.appendChild(slideElement);
    });

    const totalSlides = Math.ceil(slidesData.length);
    for (let i = 0; i < totalSlides; i++) {
      const dotElement = document.createElement("div");
      dotElement.classList.add("dot");
      if (i === 0) dotElement.classList.add("active");
      dotElement.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dotElement);
    }

    updateSliderPosition();
  }

  let currentSlide = 0;

  function updateSliderPosition() {
    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    slidesContainer.style.transform = `translateX(-${
      currentSlide * slideWidth
    }px)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  function goToSlide(index) {
    currentSlide = index;
    slidesContainer.style.transition = "transform 0.5s ease";
    updateSliderPosition();
  }

  prevButton.addEventListener("click", () => {
    currentSlide =
      currentSlide > 0 ? currentSlide - 1 : Math.ceil(slidesData.length) - 1;
    slidesContainer.style.transition = "transform 0.5s ease";
    updateSliderPosition();
  });

  nextButton.addEventListener("click", () => {
    currentSlide =
      currentSlide < Math.ceil(slidesData.length) - 1 ? currentSlide + 1 : 0;
    slidesContainer.style.transition = "transform 0.5s ease";
    updateSliderPosition();
  });

  loadSlidesData();
});

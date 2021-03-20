const logosContainer = document.getElementById("logos-container");
const iconsContainer = document.getElementById("icons-container");
const logos = document.getElementById("logos");
const icons = document.getElementById("icons");

logos.addEventListener("click", (e) => {
  logos.classList.add("visited");
  icons.classList.remove("visited");

  logosContainer.style.opacity = 1;
  iconsContainer.style.opacity = 0;
});

icons.addEventListener("click", (e) => {
  icons.classList.add("visited");
  logos.classList.remove("visited");

  logosContainer.style.opacity = 0;
  iconsContainer.style.opacity = 1;
});

const start = gsap.timeline({
  defaults: {
    ease: "power1.out",
  },
});

start.fromTo(
  ".header",
  {
    y: -100,
    opacity: 0,
    duration: 0.2,
  },
  {
    y: 0,
    opacity: 1,
  }
);

start.fromTo(
  ".scaleUp",
  {
    duration: 0.4,
    opacity: 0,
    stagger: 0.2,
  },
  {
    opacity: 1,
  }
);

start.fromTo(
  ".slideIn",
  {
    x: 100,
    opacity: 0,
    duration: 0.4,
  },
  {
    x: 0,
    opacity: 1,
  }
);

start.fromTo(
  ".fadeIn",
  {
    duration: 0.4,
    y: 20,
    opacity: 0,
    stagger: 0.2,
  },
  {
    y: 0,
    opacity: 1,
  }
);

start.fromTo(
  ".scale",
  {
    // scale: 0,
    // transformOrigin: "center",
    opacity: 0,
    duration: 0.4,
  },
  {
    opacity: 1,
  }
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top center",
  },
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "top center",
  },
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "top center",
  },
});

tl2
  .from(".line", { scaleX: 0 })
  .from(".skill", { opacity: 0, duration: 0.3, stagger: 0.4 });

tl3.from(".line-project", { scaleX: 0 });

tl4
  .from(".line-touch", { scaleX: 0 })
  .from(".slideRight", { opacity: 0, stagger: 0.2 });

$(document).ready(function () {
  // Split into words
  ["style-2", "style-3"].forEach((style) => {
    const text = $(`.${style} h1`).text().trim();
    const words = text.split(" ");
    const html = words
      .map((word, i) => {
        const delay = 0.7 * i;
        return `<span class="word-wrapper"><span class="word" style="animation-delay:${delay}s">${word}</span></span>`;
      })
      .join(" ");
    $(`.${style} h1`).html(html);
  });

  initAnimations();
});

$(document).ready(function () {
  // Menu toggle
  $(".mobile-bars").click(function () {
    const nav = $(".nav");

    if (nav.hasClass("show")) {
      nav.fadeOut(200).removeClass("show");
    } else {
      nav.fadeIn(200).addClass("show");
    }
  });

  // Click outside of .nav ul → hide menu
  $(document).on("click", function (e) {
    const nav = $(".nav");
    const target = $(e.target);

    // If menu is open, and click is outside nav ul
    if (nav.hasClass("show") && !target.closest(".nav ul").length && !target.closest(".mobile-bars").length) {
      nav.fadeOut(300).removeClass("show");
    }
  });
});

function initAnimations() {
  // Style 2: Word Flow
  const tl2 = gsap.timeline();
  tl2.to(".style-2 .word", {
    y: 0,
    duration: 1.2,
    ease: "power4.out",
    stagger: {
      amount: 0.5,
      ease: "power2.inOut",
    },
  });
  // Style 2: Word Flow
  const tl3 = gsap.timeline();
  tl3.to(".style-3 .word", {
    y: 0,
    duration: 1.2,
    ease: "power4.out",
    stagger: {
      amount: 0.5,
      ease: "power2.inOut",
    },
  });

  window.timelines = [tl2, tl3];
}

// Hero Card Mouse Position Animation (Hover-based)
document.addEventListener("DOMContentLoaded", function () {
  const heroArea = document.querySelector(".hero-area");
  const heroCard1 = document.querySelector(".hero-card1");
  const heroCard2 = document.querySelector(".hero-card2");

  if (!heroArea || !heroCard1 || !heroCard2) return;

  heroArea.addEventListener("mousemove", function (e) {
    const rect = heroArea.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;

    const distance = Math.abs(mouseX - centerX);
    const maxDistance = rect.width / 2;
    const intensity = Math.min(distance / maxDistance, 1);

    if (mouseX < centerX) {
      heroCard1.style.transform = `perspective(20px) rotate3d(${1 * intensity}, -14, 0, -2deg)`;
      heroCard2.style.transform = `perspective(10px) rotate3d(${1 * intensity}, -14, 0, 2deg)`;
    } else {
      heroCard1.style.transform = `perspective(10px) rotate3d(${1 * intensity}, -14, 0, 2deg)`;
      heroCard2.style.transform = `perspective(20px) rotate3d(${1 * intensity}, -14, 0, -2deg)`;
    }
  });

  heroArea.addEventListener("mouseleave", function () {
    heroCard1.style.transform = ""; // reset to CSS
    heroCard2.style.transform = "";
  });
});

const animation = lottie.loadAnimation({
  container: document.getElementById("lottie-empower"),
  renderer: "svg",
  loop: true,
  autoplay: false, // Autoplay off
  path: "./assets/js/empower.json",
});

// .empower-bg er upor hover korle animation start hobe
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY >= 700) {
    animation.play(); // Empower animation starts
  }
});

let focus = document.querySelector(".focus");

document.addEventListener("mousemove", function (e) {
  let x = e.pageX;
  let y = e.pageY;

  focus.style.background =
    "radial-gradient(circle at " + x + "px " + y + "px ,rgba(190, 255, 255, 0.2), transparent 40%)";
});
function createDots() {
  // Select all containers with either class name
  const dotsContainers = document.querySelectorAll(".dots-background, .dotsBackground");
  const numberOfDots = 80;

  dotsContainers.forEach((dotsContainer) => {
    // Clear existing dots to prevent duplicates
    dotsContainer.innerHTML = "";

    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";

      // Random size between 1px and 4px
      const size = Math.random() * 3 + 1;
      dot.style.width = size + "px";
      dot.style.height = size + "px";

      // Random position
      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = Math.random() * 100 + "%";

      // Random animation delay
      dot.style.animationDelay = Math.random() * 4 + "s";

      // Add variety to star colors and animations
      const variation = Math.random();
      if (variation < 0.1) {
        dot.classList.add("bright");
      } else if (variation < 0.2) {
        dot.classList.add("blue");
      }

      // Add different twinkling patterns and movement
      const twinkleType = Math.random();
      const movementType = Math.random();

      if (twinkleType < 0.2) {
        dot.classList.add("fast-twinkle");
        // Add movement to fast twinkling stars
        if (movementType < 0.5) {
          dot.classList.add("floating");
        }
      } else if (twinkleType < 0.4) {
        dot.classList.add("slow-twinkle");
        // Add movement to slow twinkling stars
        if (movementType < 0.5) {
          dot.classList.add("drifting");
        }
      } else {
        // Regular twinkling stars with movement
        if (movementType < 0.3) {
          dot.classList.add("floating");
        } else if (movementType < 0.6) {
          dot.classList.add("drifting");
        } else if (movementType < 0.8) {
          dot.classList.add("swaying");
        }
      }

      // Add random delays for movement animations
      if (
        dot.classList.contains("floating") ||
        dot.classList.contains("drifting") ||
        dot.classList.contains("swaying")
      ) {
        dot.style.animationDelay = Math.random() * 8 + "s, " + Math.random() * 6 + "s";
      }

      dotsContainer.appendChild(dot);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  createDots();
});

// Function to create white dots End
function copyEmail(box) {
  const email = box.querySelector(".email-text").textContent;
  navigator.clipboard.writeText(email).then(() => {
    box.classList.add("copied");
    setTimeout(() => {
      box.classList.remove("copied");
    }, 2000);
  });
}

// Function to copy email address End
// GSAP Animation for Hero Icons - Top to CSS position, then keyframes
document.addEventListener("DOMContentLoaded", function () {
  // Set initial state - elements start from top center
  gsap.set(".hero-animation-1 img", {
    opacity: 0,
    left: 0,
    right: 0,
    margin: "auto",
    top: -100, // Start from above viewport
  });

  gsap.set(".hero-animation-2 img", {
    opacity: 0,
    left: 0,
    right: 0,
    margin: "auto",
    top: -100,
  });

  gsap.set(".hero-animation-3 img", {
    opacity: 0,
    left: 0,
    right: 0,
    margin: "auto",
    top: -100,
  });

  gsap.set(".hero-animation-4 img", {
    opacity: 0,
    left: 0,
    right: 0,
    margin: "auto",
    top: -100,
  });

  gsap.set(".hero-animation-5 img", {
    opacity: 0,
    left: 0,
    right: 0,
    margin: "auto",
    top: -100,
  });

  gsap.set(".hero-animation-6 img", {
    opacity: 0,
    left: 0,
    right: 0,
    margin: "auto",
    top: -100,
  });

  gsap.set(".hero-animation-7 img", {
    opacity: 0,
    left: 0,
    right: 0,
    margin: "auto",
    top: -100,
  });

  // Animate to exact CSS positions with keyframe starting transforms
  gsap.to(".hero-animation-1 img", {
    opacity: 0.5, // Match CSS keyframe 0% opacity
    left: 142,
    right: "auto",
    margin: 0,
    top: "auto",
    // Apply the starting transform from CSS keyframe 0%
    y: 40,  // translateY(40px) from iconAnim1 0%
    x: 0,   // translateX(0px) from iconAnim1 0%
    rotation: 0, // rotate(0deg) from iconAnim1 0%
    duration: 5,
    ease: "power1.out",
    delay: 0.1,
  });

  gsap.to(".hero-animation-2 img", {
    opacity: 0.5, // Match CSS keyframe 0% opacity
    left: 257,
    right: "auto",
    margin: 0,
    top: "auto",
    bottom: 100,
    // Apply the starting transform from CSS keyframe 0%
    y: 30,  // translateY(30px) from iconAnim2 0%
    x: -5,  // translateX(-5px) from iconAnim2 0%
    rotation: 0, // rotate(0deg) from iconAnim2 0%
    duration: 5,
    ease: "power1.out",
    delay: 0.2,
  });

  gsap.to(".hero-animation-3 img", {
    opacity: 0.5, // Match CSS keyframe 0% opacity
    left: -361,
    right: 0,
    margin: "auto",
    top: "auto",
    bottom: 110,
    // Apply the starting transform from CSS keyframe 0%
    y: 50,  // translateY(50px) from iconAnim3 0%
    x: 0,   // translateX(0px) from iconAnim3 0%
    rotation: 0, // rotate(0deg) from iconAnim3 0%
    duration: 6,
    ease: "power1.out",
    delay: 0.3,
  });

  gsap.to(".hero-animation-4 img", {
    opacity: 0.5, // Match CSS keyframe 0% opacity
    left: 0,
    right: -444,
    margin: "auto",
    top: "auto",
    bottom: 100,
    // Apply the starting transform from CSS keyframe 0%
    y: 35,  // translateY(35px) from iconAnim4 0%
    x: 10,  // translateX(10px) from iconAnim4 0%
    rotation: 0, // rotate(0deg) from iconAnim4 0%
    duration: 5,
    ease: "power1.out",
    delay: 0.4,
  });

  gsap.to(".hero-animation-5 img", {
    opacity: 0.5, // Match CSS keyframe 0% opacity
    left: 717,
    right: 0,
    margin: "auto",
    top: "auto",
    bottom: 200,
    // Apply the starting transform from CSS keyframe 0%
    y: 45,  // translateY(45px) from iconAnim5 0%
    x: -8,  // translateX(-8px) from iconAnim5 0%
    rotation: 0, // rotate(0deg) from iconAnim5 0%
    duration: 5,
    ease: "power2.out",
    delay: 0.5,
  });

  gsap.to(".hero-animation-6 img", {
    opacity: 0.5, // Match CSS keyframe 0% opacity
    left: "auto",
    right: 230,
    margin: 0,
    top: "auto",
    bottom: 84,
    // Apply the starting transform from CSS keyframe 0%
    y: 28,  // translateY(28px) from iconAnim6 0%
    x: 5,   // translateX(5px) from iconAnim6 0%
    rotation: 0, // rotate(0deg) from iconAnim6 0%
    duration: 5,
    ease: "power2.out",
    delay: 0.6,
  });

  gsap.to(".hero-animation-7 img", {
    opacity: 1,
    left: 0,
    right: 0,
    margin: "auto",
    top: "auto",
    // Add your hero-animation-7 CSS position and keyframe starting transform here
    duration: 1,
    ease: "power2.out",
    delay: 0.7,
  });
});

// Optional: If you want to ensure CSS animations start after GSAP completes
// You can temporarily disable CSS animations and re-enable them:
/*
// Add this CSS to temporarily disable keyframe animations
const style = document.createElement('style');
style.textContent = `
  .hero-animation-1 img,
  .hero-animation-2 img,
  .hero-animation-3 img,
  .hero-animation-4 img,
  .hero-animation-5 img,
  .hero-animation-6 img {
    animation-play-state: paused !important;
  }
`;
document.head.appendChild(style);

// Re-enable animations after GSAP completes (adjust timing as needed)
setTimeout(() => {
  style.remove();
}, 7000); // Adjust based on your longest GSAP animation duration + delay
*/

// focus hover color
// Get the focus background element
const focusBg = document.querySelector(".focus-bg");
const ecmArea = document.querySelector(".ecm-card-main");
ecmArea.addEventListener("mousemove", function (e) {
  const rect = ecmArea.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  focusBg.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 190, 56, 0.7), transparent 300px)`;
});
ecmArea.addEventListener("mouseleave", function () {
  focusBg.style.background = "transparent";
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollY", window.scrollY);
});

window.addEventListener("load", () => {
  const scrollY = localStorage.getItem("scrollY");
  if (scrollY) {
    window.scrollTo(0, scrollY);
    localStorage.removeItem("scrollY");
  }
});

const holdingContent = document.querySelector(".holding-content");
const ball = document.querySelector(".rotating-ball");

function setAnimationDuration() {
  const width = holdingContent.clientWidth;
  const height = holdingContent.clientHeight;

  const perimeter = 2 * (width + height); // Total distance ball will travel
  const speed = 100; // pixels per second (adjust as you like)

  const duration = perimeter / speed; // seconds
  ball.style.animationDuration = `${duration}s`;
}

// Call on load
setAnimationDuration();

// Call on window resize to adjust dynamically
window.addEventListener("resize", setAnimationDuration);

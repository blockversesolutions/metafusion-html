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

// Hero Card Mouse Position Animation
document.addEventListener("DOMContentLoaded", function () {
  const heroArea = document.querySelector(".hero-area");
  const heroCard1 = document.querySelector(".hero-card1");
  const heroCard2 = document.querySelector(".hero-card2");

  if (!heroArea || !heroCard1 || !heroCard2) return;

  heroArea.addEventListener("mousemove", function (e) {
    const rect = heroArea.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;
    heroArea.classList.remove("mouse-left", "mouse-right");
    if (mouseX < centerX) {
      heroArea.classList.add("mouse-left");
    } else {
      heroArea.classList.add("mouse-right");
    }
    const distance = Math.abs(mouseX - centerX);
    const maxDistance = rect.width / 2;
    const intensity = Math.min(distance / maxDistance, 1);
    if (mouseX < centerX) {
      heroCard1.style.transform = `rotate(${-60 * intensity}deg)  translateX(${-5 * intensity}px)`;
      heroCard2.style.transform = `rotateY(${-45 * intensity}deg) translateX(${-2 * intensity}px)`;
    } else {
      heroCard1.style.transform = `rotateY(${45 * intensity}deg) translateX(${2 * intensity}px)`;
      heroCard2.style.transform = `rotate(${60 * intensity}deg) translateX(${5 * intensity}px)`;
    }
  });
  heroArea.addEventListener("mouseleave", function () {
    heroArea.classList.remove("mouse-left", "mouse-right");
    heroCard1.style.transform = "";
    heroCard2.style.transform = "";
  });
});

lottie.loadAnimation({
  container: document.getElementById("lottie-empower"), // the dom element
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./assets/js/tt.json",
});

let focus = document.querySelector(".focus");

document.addEventListener("mousemove", function (e) {
  let x = e.pageX;
  let y = e.pageY;

  focus.style.background =
    "radial-gradient(circle at " + x + "px " + y + "px ,rgba(190, 255, 255, 0.2), transparent 40%)";
});



// Function to create white dots start
function createDots() {
  const dotsContainer = document.getElementById("dotsBackground");
  const numberOfDots = 70;

  for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    const size = Math.random() * 3 + 1;
    dot.style.width = size + "px";
    dot.style.height = size + "px";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = Math.random() * 100 + "%";
    dot.style.animationDelay = Math.random() * 3 + "s";

    dotsContainer.appendChild(dot);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createDots();
});
// Function to create white dots End
function copyEmail(box) {
  const email = box.querySelector('.email-text').textContent;
  navigator.clipboard.writeText(email).then(() => {
    box.classList.add('copied');
    setTimeout(() => {
      box.classList.remove('copied');
    }, 2000);
  });
}

// Function to copy email address End
// GSAP Animation for Hero Icons - After reload to Before reload positions
document.addEventListener('DOMContentLoaded', function() {
  
  // Set initial state (after reload positions) with opacity 0
  gsap.set('.hero-animation-1 img', {
    opacity: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0
  });
  
  gsap.set('.hero-animation-2 img', {
    opacity: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0
  });
  
  gsap.set('.hero-animation-3 img', {
    opacity: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0
  });
  
  gsap.set('.hero-animation-4 img', {
    opacity: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0
  });
  
  gsap.set('.hero-animation-5 img', {
    opacity: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0
  });
  
  gsap.set('.hero-animation-6 img', {
    opacity: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0
  });
  
  gsap.set('.hero-animation-7 img', {
    opacity: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0
  });
  
  // Animate to final positions (before reload positions)
  gsap.to('.hero-animation-1 img', {
    opacity: 1,
    left: 142,
    right: 'auto',
    margin: 0,
    top: 'auto',
    duration: 8,
    ease: "power1.out",
    delay: 0.1
  });
  
  gsap.to('.hero-animation-2 img', {
    opacity: 1,
    left: 257,
    right: 'auto',
    margin: 0,
    top: 'auto',
    bottom: 100,
    duration: 8,
    ease: "power1.out",
    delay: 0.2
  });
  
  gsap.to('.hero-animation-3 img', {
    opacity: 1,
    left: -361,
    right: 0,
    margin: 'auto',
    top: 'auto',
    bottom: 110,
    duration: 6,
    ease: "power1.out",
    delay: 0.3
  });
  
  gsap.to('.hero-animation-4 img', {
    opacity: 1,
    left: 0,
    right: -444,
    margin: 'auto',
    top: 'auto',
    bottom: 100,
    duration: 8,
    ease: "power1.out",
    delay: 0.4
  });
  
  gsap.to('.hero-animation-5 img', {
    opacity: 1,
    left: 717,
    right: 0,
    margin: 'auto',
    top: 'auto',
    bottom: 200,
    duration: 6,
    ease: "power2.out",
    delay: 0.5
  });
  
  gsap.to('.hero-animation-6 img', {
    opacity: 1,
    left: 'auto',
    right: 230,
    margin: 0,
    top: 'auto',
    bottom: 84,
    duration: 5,
    ease: "power2.out",
    delay: 0.6
  });
  
  gsap.to('.hero-animation-7 img', {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.7
  });
  
});

// focus hover color 

let focusbg = document.querySelector(".focus-bg");

document.addEventListener("mousemove", function (e) {
  let x = e.pageX;
  let y = e.pageY;

  focusbg.style.background =
    "radial-gradient(circle at " + x + "px " + y + "px ,rgba(190, 255, 255, 0.2), transparent 40%)";
});

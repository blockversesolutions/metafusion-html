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
  $(document).on("click", function (e) {
    const nav = $(".nav");
    const target = $(e.target);
    if (nav.hasClass("show") && !target.closest(".nav ul").length && !target.closest(".mobile-bars").length) {
      nav.fadeOut(300).removeClass("show");
    }
  });
});

function initAnimations() {
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
    heroCard1.style.transform = "";
    heroCard2.style.transform = "";
  });
});




function createDots() {
  // Select all containers with either class name
  const dotsContainers = document.querySelectorAll(".dots-background, .dotsBackground");
  const numberOfDots = 80;

  dotsContainers.forEach((dotsContainer) => {
    dotsContainer.innerHTML = "";

    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      const size = Math.random() * 3 + 1;
      dot.style.width = size + "px";
      dot.style.height = size + "px";
      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = Math.random() * 100 + "%";
      dot.style.animationDelay = Math.random() * 4 + "s";
      const variation = Math.random();
      if (variation < 0.1) {
        dot.classList.add("bright");
      } else if (variation < 0.2) {
        dot.classList.add("blue");
      }
      const twinkleType = Math.random();
      const movementType = Math.random();

      if (twinkleType < 0.2) {
        dot.classList.add("fast-twinkle");
        if (movementType < 0.5) {
          dot.classList.add("floating");
        }
      } else if (twinkleType < 0.4) {
        dot.classList.add("slow-twinkle");
        if (movementType < 0.5) {
          dot.classList.add("drifting");
        }
      } else {
        if (movementType < 0.3) {
          dot.classList.add("floating");
        } else if (movementType < 0.6) {
          dot.classList.add("drifting");
        } else if (movementType < 0.8) {
          dot.classList.add("swaying");
        }
      }
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

// Email coppy text Start
function copyEmail(box) {
  const email = box.querySelector(".email-text").textContent;
  navigator.clipboard.writeText(email).then(() => {
    box.classList.add("copied");
    setTimeout(() => {
      box.classList.remove("copied");
    }, 2000);
  });
}


// Email coppy text End

// focus hover color


  const focusBg = document.querySelector(".focus-bg");
  const ecmArea = document.querySelector(".ecm-card-main");

  ecmArea.addEventListener("mousemove", function (e) {
    const rect = ecmArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    focusBg.style.opacity = "1";
    focusBg.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 190, 56, 0.7), transparent 300px)`;
  });

  ecmArea.addEventListener("mouseleave", function () {
    focusBg.style.opacity = "0";
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


// Dropdown menu active section code Start
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-item").forEach((el) =>
      el.classList.remove("active")
    );
    this.classList.add("active");
  });
}); 
// Dropdown menu active section code End 

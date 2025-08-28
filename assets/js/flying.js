const logo = document.getElementById('logo');
const targetBox = document.getElementById('target-box');

function flyLogoToTarget() {
  const logoRect = logo.getBoundingClientRect();
  const targetRect = targetBox.getBoundingClientRect();

  const logoCenterX = logoRect.left + logoRect.width / 2;
  const logoCenterY = logoRect.top + logoRect.height / 2;

  const targetCenterX = targetRect.left + targetRect.width / 2;
  const targetCenterY = targetRect.top + targetRect.height / 2;

  const deltaX = targetCenterX - logoCenterX;
  const deltaY = targetCenterY - logoCenterY;

  logo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(2.8)`;
  logo.classList.add('logo-flying');

  // Trigger bounce after flying completes
  setTimeout(() => {
    logo.classList.add('logo-bounce');
  }, 1000); // match with transition duration
}

function resetLogo() {
  logo.style.transform = `translate(0, 0) scale(1)`;
  logo.classList.remove('logo-flying');
  logo.classList.remove('logo-bounce');
}


window.addEventListener('scroll', () => {
  const triggerY = targetBox.getBoundingClientRect().top;

  if (triggerY < window.innerHeight / 2) {
    flyLogoToTarget();
  } else {
    resetLogo();
  }
});

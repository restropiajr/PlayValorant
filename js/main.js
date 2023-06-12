const $togglerButtons = document.querySelector('.toggler-buttons');
const $togglerOpen = document.querySelector('.toggler-open');
const $togglerClose = document.querySelector('.toggler-close');
const $navbarLinks = document.querySelector('.navbar-links');

// Event listener to show navbar links
function navbarToggler() {
  if (event.target === $togglerOpen) {
    $navbarLinks.classList.remove('hidden');
    $togglerOpen.classList.add('hidden');
    $togglerClose.classList.remove('hidden');
  } else if (event.target === $togglerClose) {
    $navbarLinks.classList.add('hidden');
    $togglerOpen.classList.remove('hidden');
    $togglerClose.classList.add('hidden');
  }
}
$togglerButtons.addEventListener('click', navbarToggler);

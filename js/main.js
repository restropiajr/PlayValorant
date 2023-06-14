/* global valorantData */
const $togglerButtons = document.querySelector('.toggler-buttons');
const $togglerOpen = document.querySelector('.toggler-open');
const $togglerClose = document.querySelector('.toggler-close');
const $navbarLinksMobile = document.querySelector('.navbar-links.mobile');
const $agentsLink = document.querySelectorAll('.agentsLink');
const $landingPage = document.querySelector('[data-view="landing-page"]');
const $agentsPage = document.querySelector('[data-view="agents-page"]');
const $valorantLogoNavbar = document.querySelector('.valorant-logo-navbar');
const $scrollUpButton = document.querySelector('.scroll-up-button');
const $abilities = document.querySelector('.abilities');
const $abilityOne = document.querySelector('.ability-one');
const $abilityTwo = document.querySelector('.ability-two');
const $abilityThree = document.querySelector('.ability-three');
const $abilityFour = document.querySelector('.ability-four');
const $abilityOneDescription = document.querySelector('.ability-one-description');
const $abilityTwoDescription = document.querySelector('.ability-two-description');
const $abilityThreeDescription = document.querySelector('.ability-three-description');
const $abilityFourDescription = document.querySelector('.ability-four-description');

// navbarToggler function
function navbarToggler(event) {
  if (event.target === $togglerOpen) {
    $navbarLinksMobile.classList.remove('hidden');
    $togglerOpen.classList.add('hidden');
    $togglerClose.classList.remove('hidden');
  } else if (event.target === $togglerClose) {
    $navbarLinksMobile.classList.add('hidden');
    $togglerOpen.classList.remove('hidden');
    $togglerClose.classList.add('hidden');
  }
}

// Event listener to show navbar links
$togglerButtons.addEventListener('click', navbarToggler);

// scrollUpButtonToggler function
function scrollUpButtonToggler() {
  if (window.scrollY > 200) {
    $scrollUpButton.classList.add('show');
  } else {
    $scrollUpButton.classList.remove('show');
  }
}

// Event listener to hide navbar links (mobile view) if open and was not closed before going to desktop view.
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    $navbarLinksMobile.classList.add('hidden');
    $togglerOpen.classList.remove('hidden');
    $togglerClose.classList.add('hidden');
  }
});

// Event listener to show scroll up button
window.addEventListener('scroll', scrollUpButtonToggler);

// viewSwap function
function viewSwap(view) {
  if (view === 'landing-page') {
    $landingPage.classList.remove('hidden');
    $agentsPage.classList.add('hidden');
  } else if (view === 'agents-page') {
    $agentsPage.classList.remove('hidden');
    $landingPage.classList.add('hidden');
  }

  $navbarLinksMobile.classList.add('hidden');
  $togglerOpen.classList.remove('hidden');
  $togglerClose.classList.add('hidden');
  valorantData.view = view;
}

// Event listener to swap to landing page
$valorantLogoNavbar.addEventListener('click', () => {
  viewSwap('landing-page');
});

// Event listener to swap to agents page
$agentsLink.forEach(link => {
  link.addEventListener('click', () => {
    viewSwap('agents-page');
  });
});

// Event listener to wait for HTML to parse before DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
  viewSwap(valorantData.view);
});

// showAbilityDescription function
function showAbilityDescription(event) {
  if (event.target === $abilityOne) {
    $abilityOneDescription.classList.remove('hidden');
  } else if (event.target === $abilityTwo) {
    $abilityTwoDescription.classList.remove('hidden');
  } else if (event.target === $abilityThree) {
    $abilityThreeDescription.classList.remove('hidden');
  } else if (event.target === $abilityFour) {
    $abilityFourDescription.classList.remove('hidden');
  }
}

// Event listener to show ability description when hovered on ability
$abilities.addEventListener('mouseover', showAbilityDescription);

// unShowAbilityDescription function
function unShowAbilityDescription(event) {
  if (event.target === $abilityOne) {
    $abilityOneDescription.classList.add('hidden');
  } else if (event.target === $abilityTwo) {
    $abilityTwoDescription.classList.add('hidden');
  } else if (event.target === $abilityThree) {
    $abilityThreeDescription.classList.add('hidden');
  } else if (event.target === $abilityFour) {
    $abilityFourDescription.classList.add('hidden');
  }
}

// Event listener to show ability description when hovered on ability
$abilities.addEventListener('mouseout', unShowAbilityDescription);

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
  window.scrollTo({ top: 0 });
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
  getAgentData();
  viewSwap(valorantData.view);
});

// renderAgent function
function renderAgent(agent) {
  const $sectionRow = document.createElement('div');
  $sectionRow.className = 'section row';
  $sectionRow.setAttribute('data-agent', agent.displayName.toLowerCase());

  const $agentSectionColHalf = document.createElement('div');
  $agentSectionColHalf.className = 'agent-section column-half';
  $sectionRow.appendChild($agentSectionColHalf);

  const $agentContainer = document.createElement('div');
  $agentContainer.className = 'agent-container';
  $agentSectionColHalf.appendChild($agentContainer);

  const $agentImg = document.createElement('img');
  $agentImg.className = 'agent-img';
  $agentImg.setAttribute('src', agent.fullPortraitV2);
  $agentImg.setAttribute('alt', agent.displayName);
  $agentContainer.appendChild($agentImg);

  const $agentName = document.createElement('h2');
  $agentName.className = 'agent-name';
  $agentName.textContent = agent.displayName.toUpperCase();
  $agentSectionColHalf.appendChild($agentName);

  const $descriptionSectionColHalf = document.createElement('div');
  $descriptionSectionColHalf.className = 'description-section column-half';
  $sectionRow.appendChild($descriptionSectionColHalf);

  const $roleTitle = document.createElement('h3');
  $roleTitle.textContent = 'ROLE';
  $descriptionSectionColHalf.appendChild($roleTitle);

  const $roleDescription = document.createElement('p');
  $roleDescription.textContent = agent.role.description;
  $descriptionSectionColHalf.appendChild($roleDescription);

  const $biographyTitle = document.createElement('h3');
  $biographyTitle.textContent = 'BIOGRAPHY';
  $descriptionSectionColHalf.appendChild($biographyTitle);

  const $biographyDescription = document.createElement('p');
  $biographyDescription.textContent = agent.description;
  $descriptionSectionColHalf.appendChild($biographyDescription);

  const $abilitiesTitle = document.createElement('h3');
  $abilitiesTitle.textContent = 'ABILITIES';
  $descriptionSectionColHalf.appendChild($abilitiesTitle);

  const $abilitiesRow = document.createElement('div');
  $abilitiesRow.className = 'row';
  $descriptionSectionColHalf.appendChild($abilitiesRow);

  const $abilitiesColFull = document.createElement('div');
  $abilitiesColFull.className = 'abilities column-full';
  $abilitiesRow.appendChild($abilitiesColFull);

  const $abilityOneContainer = document.createElement('div');
  $abilityOneContainer.className = 'ability-container';
  $abilitiesColFull.appendChild($abilityOneContainer);

  const $abilityOneImg = document.createElement('img');
  $abilityOneImg.className = 'ability-one ability-img';
  $abilityOneImg.setAttribute('src', agent.abilities[0].displayIcon);
  $abilityOneImg.setAttribute('alt', agent.abilities[0].displayName);
  $abilityOneContainer.appendChild($abilityOneImg);

  const $abilityOneName = document.createElement('p');
  $abilityOneName.className = 'ability-name';
  $abilityOneName.textContent = agent.abilities[0].displayName;
  $abilityOneContainer.appendChild($abilityOneName);

  const $abilityTwoContainer = document.createElement('div');
  $abilityTwoContainer.className = 'ability-container';
  $abilitiesColFull.appendChild($abilityTwoContainer);

  const $abilityTwoImg = document.createElement('img');
  $abilityTwoImg.className = 'ability-two ability-img';
  $abilityTwoImg.setAttribute('src', agent.abilities[1].displayIcon);
  $abilityTwoImg.setAttribute('alt', agent.abilities[1].displayName);
  $abilityTwoContainer.appendChild($abilityTwoImg);

  const $abilityTwoName = document.createElement('p');
  $abilityTwoName.className = 'ability-name';
  $abilityTwoName.textContent = agent.abilities[1].displayName;
  $abilityTwoContainer.appendChild($abilityTwoName);

  const $abilityThreeContainer = document.createElement('div');
  $abilityThreeContainer.className = 'ability-container';
  $abilitiesColFull.appendChild($abilityThreeContainer);

  const $abilityThreeImg = document.createElement('img');
  $abilityThreeImg.className = 'ability-three ability-img';
  $abilityThreeImg.setAttribute('src', agent.abilities[2].displayIcon);
  $abilityThreeImg.setAttribute('alt', agent.abilities[2].displayName);
  $abilityThreeContainer.appendChild($abilityThreeImg);

  const $abilityThreeName = document.createElement('p');
  $abilityThreeName.className = 'ability-name';
  $abilityThreeName.textContent = agent.abilities[2].displayName;
  $abilityThreeContainer.appendChild($abilityThreeName);

  const $abilityFourContainer = document.createElement('div');
  $abilityFourContainer.className = 'ability-container';
  $abilitiesColFull.appendChild($abilityFourContainer);

  const $abilityFourImg = document.createElement('img');
  $abilityFourImg.className = 'ability-four ability-img';
  $abilityFourImg.setAttribute('src', agent.abilities[3].displayIcon);
  $abilityFourImg.setAttribute('alt', agent.abilities[3].displayName);
  $abilityFourContainer.appendChild($abilityFourImg);

  const $abilityFourName = document.createElement('p');
  $abilityFourName.className = 'ability-name';
  $abilityFourName.textContent = agent.abilities[3].displayName;
  $abilityFourContainer.appendChild($abilityFourName);

  const $abilityOneDescription = document.createElement('p');
  $abilityOneDescription.className = 'ability-one-description hidden';
  $abilityOneDescription.textContent = agent.abilities[0].description;
  $descriptionSectionColHalf.appendChild($abilityOneDescription);

  const $abilityTwoDescription = document.createElement('p');
  $abilityTwoDescription.className = 'ability-two-description hidden';
  $abilityTwoDescription.textContent = agent.abilities[1].description;
  $descriptionSectionColHalf.appendChild($abilityTwoDescription);

  const $abilityThreeDescription = document.createElement('p');
  $abilityThreeDescription.className = 'ability-three-description hidden';
  $abilityThreeDescription.textContent = agent.abilities[2].description;
  $descriptionSectionColHalf.appendChild($abilityThreeDescription);

  const $abilityFourDescription = document.createElement('p');
  $abilityFourDescription.className = 'ability-four-description hidden';
  $abilityFourDescription.textContent = agent.abilities[3].description;
  $descriptionSectionColHalf.appendChild($abilityFourDescription);

  // Event listener to show and unshow ability description
  $abilityOneContainer.addEventListener('mouseenter', () => {
    $abilityOneDescription.classList.remove('hidden');
  });

  $abilityOneContainer.addEventListener('mouseleave', () => {
    $abilityOneDescription.classList.add('hidden');
  });

  $abilityTwoContainer.addEventListener('mouseenter', () => {
    $abilityTwoDescription.classList.remove('hidden');
  });

  $abilityTwoContainer.addEventListener('mouseleave', () => {
    $abilityTwoDescription.classList.add('hidden');
  });

  $abilityThreeContainer.addEventListener('mouseenter', () => {
    $abilityThreeDescription.classList.remove('hidden');
  });

  $abilityThreeContainer.addEventListener('mouseleave', () => {
    $abilityThreeDescription.classList.add('hidden');
  });

  $abilityFourContainer.addEventListener('mouseenter', () => {
    $abilityFourDescription.classList.remove('hidden');
  });

  $abilityFourContainer.addEventListener('mouseleave', () => {
    $abilityFourDescription.classList.add('hidden');
  });

  return $sectionRow;
}

// getAgentData function
function getAgentData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/agents');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    xhr.response.data.forEach(agent => {
      if (agent.isPlayableCharacter === true) {
        $agentsPage.appendChild(renderAgent(agent));
      }
    });
  });
  xhr.send();
}

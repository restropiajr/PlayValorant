/* global valorantData */
const $togglerButtons = document.querySelector('.toggler-buttons');
const $togglerOpen = document.querySelector('.toggler-open');
const $togglerClose = document.querySelector('.toggler-close');
const $navbarLinksMobile = document.querySelector('.navbar-links.mobile');
const $agentsLink = document.querySelectorAll('.agentsLink');
const $weaponsLink = document.querySelectorAll('.weaponsLink');
const $mapsLink = document.querySelectorAll('.mapsLink');
const $skinsLink = document.querySelectorAll('.skinsLink');
const $favoritesLink = document.querySelectorAll('.favoritesLink');
const $landingPage = document.querySelector('[data-view="landing-page"]');
const $agentsPage = document.querySelector('[data-view="agents-page"]');
const $weaponsPage = document.querySelector('[data-view="weapons-page"]');
const $skinsPage = document.querySelector('[data-view="skins-page"]');
const $mapsPage = document.querySelector('[data-view="maps-page"]');
const $favoritesPage = document.querySelector('[data-view="favorites-page"]');
const $skinSectionRow = document.querySelector('#skin-section-row');
const $favoriteSectionRow = document.querySelector('#favorite-section-row');
const $valorantLogoNavbar = document.querySelector('.valorant-logo-navbar');
const $scrollUpButton = document.querySelector('.scroll-up-button');
const $searchForm = document.querySelector('.search-form');
let $allSkins;

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

// Event listener to show scroll up button
window.addEventListener('scroll', scrollUpButtonToggler);

// Event listener to hide navbar links (mobile view) if open and was not closed before going to desktop view.
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    $navbarLinksMobile.classList.add('hidden');
    $togglerOpen.classList.remove('hidden');
    $togglerClose.classList.add('hidden');
  }
});

// viewSwap function
function viewSwap(view) {
  if (view === 'landing-page') {
    $landingPage.classList.remove('hidden');
    $agentsPage.classList.add('hidden');
    $weaponsPage.classList.add('hidden');
    $mapsPage.classList.add('hidden');
    $skinsPage.classList.add('hidden');
    $favoritesPage.classList.add('hidden');
  } else if (view === 'agents-page') {
    $landingPage.classList.add('hidden');
    $agentsPage.classList.remove('hidden');
    $weaponsPage.classList.add('hidden');
    $mapsPage.classList.add('hidden');
    $skinsPage.classList.add('hidden');
    $favoritesPage.classList.add('hidden');
  } else if (view === 'weapons-page') {
    $landingPage.classList.add('hidden');
    $agentsPage.classList.add('hidden');
    $weaponsPage.classList.remove('hidden');
    $mapsPage.classList.add('hidden');
    $skinsPage.classList.add('hidden');
    $favoritesPage.classList.add('hidden');
  } else if (view === 'maps-page') {
    $landingPage.classList.add('hidden');
    $agentsPage.classList.add('hidden');
    $weaponsPage.classList.add('hidden');
    $mapsPage.classList.remove('hidden');
    $skinsPage.classList.add('hidden');
    $favoritesPage.classList.add('hidden');
  } else if (view === 'skins-page') {
    $landingPage.classList.add('hidden');
    $agentsPage.classList.add('hidden');
    $weaponsPage.classList.add('hidden');
    $mapsPage.classList.add('hidden');
    $skinsPage.classList.remove('hidden');
    $favoritesPage.classList.add('hidden');
  } else if (view === 'favorites-page') {
    $landingPage.classList.add('hidden');
    $agentsPage.classList.add('hidden');
    $weaponsPage.classList.add('hidden');
    $mapsPage.classList.add('hidden');
    $skinsPage.classList.add('hidden');
    $favoritesPage.classList.remove('hidden');
  }

  $navbarLinksMobile.classList.add('hidden');
  $togglerOpen.classList.remove('hidden');
  $togglerClose.classList.add('hidden');
  window.scrollTo({ top: 0 });
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

// Event listener to swap to weapons page
$weaponsLink.forEach(link => {
  link.addEventListener('click', () => {
    viewSwap('weapons-page');
  });
});

// Event listener to swap to maps page
$mapsLink.forEach(link => {
  link.addEventListener('click', () => {
    viewSwap('maps-page');
  });
});

// Event listener to swap to skins page
$skinsLink.forEach(link => {
  link.addEventListener('click', () => {
    $searchForm.reset();
    $allSkins.forEach(skin => {
      skin.classList.remove('hidden');
    });
    viewSwap('skins-page');
  });
});

// Event listener to swap to favorites page
$favoritesLink.forEach(link => {
  link.addEventListener('click', () => {
    viewSwap('favorites-page');
  });
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
  $abilityOneName.textContent = agent.abilities[0].displayName.toUpperCase();
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
  $abilityTwoName.textContent = agent.abilities[1].displayName.toUpperCase();
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
  $abilityThreeName.textContent = agent.abilities[2].displayName.toUpperCase();
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
  $abilityFourName.textContent = agent.abilities[3].displayName.toUpperCase();
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

// renderWeapon function
function renderWeapon(weapon) {
  const $sectionRow = document.createElement('div');
  $sectionRow.className = 'section row';
  $sectionRow.setAttribute('data-weapon', weapon.displayName.toLowerCase());

  const $weaponSectionColHalf = document.createElement('div');
  $weaponSectionColHalf.className = 'weapon-section column-half';
  $sectionRow.appendChild($weaponSectionColHalf);

  const $weaponContainer = document.createElement('div');
  $weaponContainer.className = 'weapon-container';
  $weaponSectionColHalf.appendChild($weaponContainer);

  const $weaponImg = document.createElement('img');
  $weaponImg.className = 'weapon-img';
  $weaponImg.setAttribute('src', weapon.displayIcon);
  $weaponImg.setAttribute('alt', weapon.displayName);
  $weaponContainer.appendChild($weaponImg);

  const $weaponName = document.createElement('h2');
  $weaponName.className = 'weapon-name';
  $weaponName.textContent = weapon.displayName.toUpperCase();
  $weaponSectionColHalf.appendChild($weaponName);

  const $descriptionSectionColHalf = document.createElement('div');
  $descriptionSectionColHalf.className = 'description-section column-half';
  $sectionRow.appendChild($descriptionSectionColHalf);

  const $categoryTitle = document.createElement('h3');
  $categoryTitle.textContent = 'CATEGORY';
  $descriptionSectionColHalf.appendChild($categoryTitle);

  const $categoryDescription = document.createElement('p');
  $categoryDescription.textContent = weapon.category.replace('EEquippableCategory::', '');
  $descriptionSectionColHalf.appendChild($categoryDescription);

  const $descriptionTitle = document.createElement('h3');
  $descriptionTitle.textContent = 'DESCRIPTION';
  $descriptionSectionColHalf.appendChild($descriptionTitle);

  const $weaponDescription = document.createElement('p');
  let weaponDescription = null;
  switch (weapon.displayName) {
    case 'Odin':
      weaponDescription = 'A powerful LMG with high damage, high rate of fire, and a large magazine capacity for breaking through defenses.';
      break;
    case 'Ares':
      weaponDescription = 'A heavy machine gun with a high rate of fire, suitable for suppressing fire and holding positions.';
      break;
    case 'Vandal':
      weaponDescription = 'A high-damage assault rifle with moderate recoil, capable of eliminating enemies with a single headshot.';
      break;
    case 'Bulldog':
      weaponDescription = 'A rifle with burst fire mode, offering moderate recoil and decent damage.';
      break;
    case 'Phantom':
      weaponDescription = 'A fully automatic rifle with low recoil and good accuracy, versatile for close to medium-range encounters.';
      break;
    case 'Judge':
      weaponDescription = 'A devastating shotgun known for its close-range stopping power and rapid fire rate.';
      break;
    case 'Bucky':
      weaponDescription = 'A shotgun with a wider spread and moderate damage, effective at close range.';
      break;
    case 'Frenzy':
      weaponDescription = 'A compact SMG with a high rate of fire but reduced accuracy.';
      break;
    case 'Classic':
      weaponDescription = 'A versatile starter pistol with burst fire mode for close-range encounters.';
      break;
    case 'Ghost':
      weaponDescription = 'A silenced pistol with low recoil and good accuracy, ideal for stealthy plays.';
      break;
    case 'Sheriff':
      weaponDescription = 'A heavy revolver capable of eliminating enemies with a single headshot.';
      break;
    case 'Shorty':
      weaponDescription = 'A shotgun with limited range but high damage potential at close quarters.';
      break;
    case 'Operator':
      weaponDescription = 'A powerful sniper rifle that guarantees a one-shot kill regardless of the body part hit.';
      break;
    case 'Guardian':
      weaponDescription = 'A semi-automatic rifle with high accuracy, suitable for tapping and controlled bursts.';
      break;
    case 'Marshal':
      weaponDescription = 'A sniper rifle that can eliminate enemies with a single shot to the chest or head.';
      break;
    case 'Spectre':
      weaponDescription = 'A versatile SMG with good accuracy and manageable recoil for medium-range combat.';
      break;
    case 'Stinger':
      weaponDescription = 'An SMG with a fast rate of fire, suitable for close to medium-range engagements.';
      break;
    case 'Melee':
      weaponDescription = 'A lethal melee weapon for silent and swift takedowns, offering increased movement speed for agile plays.';
      break;
    default:
      weaponDescription = 'Unknown weapon.';
      break;
  }

  $weaponDescription.textContent = weaponDescription;
  $descriptionSectionColHalf.appendChild($weaponDescription);

  return $sectionRow;
}

// getWeaponData function
function getWeaponData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/weapons');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    xhr.response.data.forEach(weapon => {
      $weaponsPage.appendChild(renderWeapon(weapon));
    });
  });
  xhr.send();
}

// renderMap function
function renderMap(map) {
  const $sectionRow = document.createElement('div');
  $sectionRow.className = 'section row';
  $sectionRow.setAttribute('data-map', map.displayName.toLowerCase());

  const $mapSectionColFull = document.createElement('div');
  $mapSectionColFull.className = 'map-section column-full';
  $sectionRow.appendChild($mapSectionColFull);

  const $mapImgsRow = document.createElement('div');
  $mapImgsRow.className = 'map-imgs row';
  $mapSectionColFull.appendChild($mapImgsRow);

  const $mapSplashContainer = document.createElement('div');
  $mapSplashContainer.className = 'map-splash-container column-half';
  $mapImgsRow.appendChild($mapSplashContainer);

  const $mapSplashImg = document.createElement('img');
  $mapSplashImg.className = 'map-splash-img';
  $mapSplashImg.setAttribute('src', map.splash);
  $mapSplashImg.setAttribute('alt', map.displayName.toLowerCase());
  $mapSplashContainer.appendChild($mapSplashImg);

  const $mapLayoutContainer = document.createElement('div');
  $mapLayoutContainer.className = 'map-layout-container column-half';
  $mapImgsRow.appendChild($mapLayoutContainer);

  const $mapLayoutImg = document.createElement('img');
  $mapLayoutImg.className = 'map-layout-img';
  $mapLayoutImg.setAttribute('src', map.displayIcon);
  $mapLayoutImg.setAttribute('alt', `${map.displayName.toLowerCase()}-layout`);
  $mapLayoutContainer.appendChild($mapLayoutImg);

  const $mapName = document.createElement('h2');
  $mapName.className = 'map-name';
  $mapName.textContent = map.displayName.toUpperCase();
  $mapSectionColFull.appendChild($mapName);

  const $descriptionSectionColFull = document.createElement('div');
  $descriptionSectionColFull.className = 'description-section column-full';
  $sectionRow.appendChild($descriptionSectionColFull);

  const $descriptionTitle = document.createElement('h3');
  $descriptionTitle.textContent = 'DESCRIPTION';
  $descriptionSectionColFull.appendChild($descriptionTitle);

  const $mapDescription = document.createElement('p');
  let mapDescription = null;
  if (map.narrativeDescription) {
    mapDescription = map.narrativeDescription;
  } else {
    switch (map.displayName) {
      case 'Piazza':
        mapDescription = 'Piazza takes you to a charming Mediterranean coastal town, with narrow alleys, open squares, and verticality that immerse you in its picturesque setting.';
        break;
      case 'District':
        mapDescription = 'District transports you to a futuristic metropolis, featuring towering skyscrapers, neon lights, and a mix of tight corridors, expansive plazas, and vertical elements for fast-paced, strategic gameplay.';
        break;
      case 'Kasbah':
        mapDescription = 'Kasbah invites you to explore an ancient Moroccan fortress, offering narrow alleys, hidden courtyards, and multi-level structures, creating a diverse and tactical environment for thrilling encounters.';
        break;
      default:
        mapDescription = 'Unknown map.';
        break;
    }
  }

  $mapDescription.textContent = mapDescription;
  $descriptionSectionColFull.appendChild($mapDescription);

  return $sectionRow;
}

// getMapData function
function getMapData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/maps');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    xhr.response.data.forEach(map => {
      if (map.displayName !== 'The Range') {
        $mapsPage.appendChild(renderMap(map));
      }
    });
  });
  xhr.send();
}

// renderSkin function
function renderSkin(skin) {
  const $skinSectionColThird = document.createElement('div');
  $skinSectionColThird.className = 'skin-section column-third';
  $skinSectionColThird.setAttribute('data-skin', skin.displayName.toLowerCase());

  const $favoritesTogglerMenu = document.createElement('div');
  $favoritesTogglerMenu.className = 'favorites-toggler-buttons';
  $skinSectionColThird.appendChild($favoritesTogglerMenu);

  const $favoritesOff = document.createElement('i');
  $favoritesOff.className = 'favorites-off fa-regular fa-heart fa-xl';
  $favoritesTogglerMenu.appendChild($favoritesOff);

  const $favoritesOn = document.createElement('i');
  $favoritesOn.className = 'favorites-on fa-solid fa-heart fa-xl hidden';
  $favoritesTogglerMenu.appendChild($favoritesOn);

  const $skinContainer = document.createElement('div');
  $skinContainer.className = 'skin-container';
  $skinSectionColThird.appendChild($skinContainer);

  const $skinImg = document.createElement('img');
  $skinImg.className = 'skin-img';
  $skinImg.setAttribute('src', skin.levels[0].displayIcon);
  $skinImg.setAttribute('alt', skin.displayName.toLowerCase());
  $skinContainer.appendChild($skinImg);

  const $skinName = document.createElement('h2');
  $skinName.className = 'skin-name';
  $skinName.textContent = skin.displayName.toUpperCase();
  $skinSectionColThird.appendChild($skinName);

  return $skinSectionColThird;
}

// renderFavoriteSkin function
function renderFavoriteSkin(skin) {
  const $skinSectionColThird = document.createElement('div');
  $skinSectionColThird.className = 'skin-section column-third';
  $skinSectionColThird.setAttribute('data-skin', skin.displayName.toLowerCase());

  const $skinContainer = document.createElement('div');
  $skinContainer.className = 'skin-container';
  $skinSectionColThird.appendChild($skinContainer);

  const $skinImg = document.createElement('img');
  $skinImg.className = 'skin-img';
  $skinImg.setAttribute('src', skin.levels[0].displayIcon);
  $skinImg.setAttribute('alt', skin.displayName.toLowerCase());
  $skinContainer.appendChild($skinImg);

  const $skinName = document.createElement('h2');
  $skinName.className = 'skin-name';
  $skinName.textContent = skin.displayName.toUpperCase();
  $skinSectionColThird.appendChild($skinName);

  return $skinSectionColThird;
}

// getSkinData function
function getSkinData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/weapons/skins');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    xhr.response.data.forEach(skinData => {
      if (!(skinData.displayName.toLowerCase().includes('standard') || skinData.displayName.toLowerCase().includes('random') || skinData.displayName.toLowerCase() === 'melee')) {
        $skinSectionRow.appendChild(renderSkin(skinData));
        if (!valorantData.skins.some(existingSkinData => existingSkinData.uuid === skinData.uuid)) {
          valorantData.skins.push(skinData);
        }
      }
    });
    $allSkins = document.querySelectorAll('[data-skin]');
    renderFavoritesPage();
    updateFavoritesTogglerStatus();
  });
  xhr.send();
}

// Event listener to favorite a skin (skin page)
$skinSectionRow.addEventListener('click', event => {
  $allSkins.forEach(skinDiv => {
    const $favoritesTogglerOff = skinDiv.firstChild.childNodes[0];
    const $favoritesTogglerOn = skinDiv.firstChild.childNodes[1];
    const skinName = skinDiv.getAttribute('data-skin');
    const matchedSkinData = valorantData.skins.find(existingSkinData => existingSkinData.displayName.toLowerCase() === skinName.toLowerCase());
    if (event.target === $favoritesTogglerOff) {
      $favoritesTogglerOff.classList.add('hidden');
      $favoritesTogglerOn.classList.remove('hidden');
      if (!valorantData.favorites.some(existingFavoriteSkinData => existingFavoriteSkinData.displayName.toLowerCase() === skinName.toLowerCase())) {
        valorantData.favorites.push(matchedSkinData);
      }
    } else if (event.target === $favoritesTogglerOn) {
      $favoritesTogglerOff.classList.remove('hidden');
      $favoritesTogglerOn.classList.add('hidden');
      const favoriteSkinDataIndex = valorantData.favorites.findIndex(existingFavoriteSkinData => existingFavoriteSkinData.displayName.toLowerCase() === skinName.toLowerCase());
      if (favoriteSkinDataIndex !== -1) {
        valorantData.favorites.splice(favoriteSkinDataIndex, 1);
      }
    }
    renderFavoritesPage();
  });
});

function renderFavoritesPage() {
  $favoriteSectionRow.textContent = '';
  if (valorantData.favorites.length === 0) {
    const $fillerDiv = document.createElement('div');
    $fillerDiv.classList.add('filler');

    const $noFavoriteSkinsMessage = document.createElement('p');
    $noFavoriteSkinsMessage.className = 'no-favorite-skins-message';
    $noFavoriteSkinsMessage.textContent = 'No favorite skins found.';
    $fillerDiv.appendChild($noFavoriteSkinsMessage);

    $favoriteSectionRow.appendChild($fillerDiv);
  } else {
    valorantData.favorites.forEach(favoriteSkinData => {
      $favoriteSectionRow.appendChild(renderFavoriteSkin(favoriteSkinData));
    });
  }
}

// updateFavoritesTogglerStatus function
function updateFavoritesTogglerStatus() {
  $allSkins.forEach(skinDiv => {
    const $favoritesTogglerOff = skinDiv.firstChild.childNodes[0];
    const $favoritesTogglerOn = skinDiv.firstChild.childNodes[1];
    const skinName = skinDiv.getAttribute('data-skin');
    if (valorantData.favorites.some(existingFavoriteSkinData => existingFavoriteSkinData.displayName.toLowerCase() === skinName.toLowerCase())) {
      $favoritesTogglerOff.classList.add('hidden');
      $favoritesTogglerOn.classList.remove('hidden');
    } else {
      $favoritesTogglerOff.classList.remove('hidden');
      $favoritesTogglerOn.classList.add('hidden');
    }
  });
}

// Event listener to search a weapon category or skin
$searchForm.addEventListener('input', event => {
  const searchText = event.target.value.toLowerCase();
  $allSkins.forEach(skin => {
    const skinName = skin.getAttribute('data-skin');
    if (skinName.toLowerCase().includes(searchText)) {
      skin.classList.remove('hidden');
    } else {
      skin.classList.add('hidden');
    }
  });
});

// Event listener to wait for HTML to parse before DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
  getAgentData();
  getWeaponData();
  getMapData();
  getSkinData();
  viewSwap('landing-page');
});

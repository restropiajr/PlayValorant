/* exported valorantData */

let valorantData = {
  skins: []
};

window.addEventListener('beforeunload', () => {
  const valorantDataJSON = JSON.stringify(valorantData);
  localStorage.setItem('valorantData', valorantDataJSON);
});

function parseJSONData() {
  const previousValorantDataJSON = localStorage.getItem('valorantData');
  if (previousValorantDataJSON !== null) {
    valorantData = JSON.parse(previousValorantDataJSON);
  }
}
parseJSONData();

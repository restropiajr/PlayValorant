/* exported valorantData */

let valorantData = {
  view: 'landing-page'
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

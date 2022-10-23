const API_KEY = "0BbD0Xs-M2qA0XA9lQZP8_aJ9Xg";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const respons = await fetch(queryString);

    const data = await respons.json();

    if (respons.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.Error);
    }
}

function displayStatus(data) {
    
    let heading = "API key Status";
    let results = `<div>Your key is valid until:</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;

    resultsModal.show();
}
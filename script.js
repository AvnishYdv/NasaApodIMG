const apiKey = 'vrhoEjFsYAyplGVs1uQQ9mNNVV7M7HiLLOSG5IhH';
const url = 'https://api.nasa.gov/planetary/apod?';

// Fetch and display the APOD for today when the page loads
window.onload = function() {
    const today = new Date().toISOString().split('T')[0];
    fetchImage(today);
};

document.getElementById('fetch-image').addEventListener('click', () => {
    const dateInput = document.querySelector('.details-input input');
    const date = dateInput.value;
    fetchImage(date);
});

document.getElementById('fetch-hd').addEventListener('click', () => {
    const dateInput = document.querySelector('.details-input input');
    const date = dateInput.value;
    fetchHdImage(date);
});

function fetchImage(date) {
    if (!date) {
        alert('Please select a date.');
        return;
    }
    let imageContainer = document.querySelector('.image-container');
    imageContainer.innerHTML = ''; // Clear previous image

    let request = new XMLHttpRequest();
    request.open('GET', url + "date=" + date + "&api_key=" + apiKey, true);

    request.send();
    request.onload = function() {
        if (request.status === 200) {
            let data = JSON.parse(request.responseText);
            let imageUrl = data.url;

            let image = document.createElement('img');
            image.src = imageUrl;
            image.alt = data.title;

            let dateText = document.createElement('p');
            dateText.textContent = `Date: ${date}`;

            imageContainer.appendChild(dateText);
            imageContainer.appendChild(image);
        } else {
            alert("Please enter the date in the correct format.");
        }
    }
}

function fetchHdImage(date) {
    if (!date) {
        alert('Please select a date.');
        return;
    }
    let imageContainer = document.querySelector('.image-container');
    imageContainer.innerHTML = ''; // Clear previous image

    let request = new XMLHttpRequest();
    request.open('GET', url + "date=" + date + "&api_key=" + apiKey, true);

    request.send();
    request.onload = function() {
        if (request.status === 200) {
            let data = JSON.parse(request.responseText);
            let imageUrl = data.hdurl;

            let image = document.createElement('img');
            image.src = imageUrl;
            image.alt = data.title;

            let dateText = document.createElement('p');
            dateText.textContent = `Date: ${date}`;

            imageContainer.appendChild(dateText);
            imageContainer.appendChild(image);
        } else {
            alert("Please enter the date in the correct format.");
        }
    }
}

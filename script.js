const btn = document.querySelector('.btn');
const userLocation = document.querySelector('#location');


// Get the current position of the user using Geolocation API and display it 

btn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(showPosition);
})


//function 
function showPosition(position){
    userLocation.innerHTML = `
     Latitude: ${position.coords.latitude} <br>
     Longtitude:${position.coords.longitude}
    `
}
let url = 'https://randomuser.me/api/?results=12';
let card = document.querySelector('.card')
let gallery = document.getElementById('gallery');
let modalContainer = document.querySelector('modal-container')

// Use the Fetch API to get the initial employee information
// Access the json data
// Map the data to access the different key/value pairs

fetch(url)
.then(res =>  res.json())
.then(data => data.results.map(info => {
    generateHTML(info)
}))


// Helper functions

// Generate HTML
function generateHTML(item){

    // Create a loop for each item in the array
    // Append to the HTML card item


}
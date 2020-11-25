// Declare variables

let url = 'https://randomuser.me/api/?results=12';
let gallery = document.getElementById('gallery');
let modalContainer = document.querySelector('modal-container')
let body = document.querySelector('body')

// Use the Fetch API to get the initial employee information
// Access the json data
// Use a helper function to generate the HTML for gallery and cards

fetch(url)
.then(res =>  res.json())
.then(data => generateHTML(data.results))
.then(() => generateModal())


//  ** Helper functions ** //

// Generate HTML
function generateHTML(item){

    // Create a loop for each item in the array
    // Append to the HTML card item


    
    // Declare html variable
    let html = ''

    // Loop through the items passed in to function, in this case data.results
    for(let i = 0; i < item.length; i++){
        
        // If there is an item in the array...
        if(item[i]){

            // Append the 'card' html markup to the html variable
            // And interpolate the information that was passed in as an argument using template strings
            html += `
            <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${item[i].picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${item[i].name.first} ${item[i].name.last}</h3>
                <p class="card-text">${item[i].email}</p>
                <p class="card-text cap">${item[i].location.city}</p>
            </div>
        </div>
            
            `
        }
    }

    // Append the html variable to the gallery
    gallery.innerHTML = html


}

// When a card or any item in the card is clicked, modal appears

// Function to generate the modal on click

function generateModal(info){
    let card = document.querySelectorAll('.card')

    for(let i = 0; i < card.length; i++){
        card[i].addEventListener('click', (e)=>{
             
            console.log(e.target)
        

        
        })
    }
    
}



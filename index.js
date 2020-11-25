let url = 'https://randomuser.me/api/?results=12';
// let card = document.querySelectorAll('.card')
let gallery = document.getElementById('gallery');
let modalContainer = document.querySelector('modal-container')



// Use the Fetch API to get the initial employee information
// Access the json data
// Map the data to access the different key/value pairs

fetch(url)
.then(res =>  res.json())
.then(data => generateHTML(data.results))
.then(()=> createCard())


// Helper functions

// Generate HTML
function generateHTML(item){

    // Create a loop for each item in the array
    // Append to the HTML card item
    

    let html = ''

    for(let i = 0; i < item.length; i++){
        console.log(item[i])
        if(item[i]){
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

    gallery.innerHTML = html


}

// When button is clicked, modal appears
// for loop and iteration for card[i]??

function createCard(){
    let card = document.querySelectorAll('.card')

    for(let i = 0; i < card.length; i++){
        card[i].addEventListener('click', ()=>{
            console.log("Hello")
        })
    }
    
}


function createModal(info){
    
let modal = `

 <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>
`
body += modal

}



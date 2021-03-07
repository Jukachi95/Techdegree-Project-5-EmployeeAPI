// Declare variables

let url = 'https://randomuser.me/api/?results=12&nat=us';
let gallery = document.getElementById('gallery');
let modalContainer = document.querySelector('modal-container')
let body = document.querySelector('body')

// Use the Fetch API to get the initial employee information
// Access the json data
// Use a helper function to generate the HTML for gallery and cards

fetch(url)
.then(res =>  res.json())
.then(
    data =>{
        generateHTML(data.results)
        generateModal(data.results)        
    } 
)


//  ** Helper functions ** //

// Generate HTML
function generateHTML(item){


    
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

// Function that creates a modal when a card or any item in the card is clicked
function generateModal(info){
    let card = document.querySelectorAll('.card')

    // Loop through the 'card' items
    for(let i = 0; i < card.length; i++){

        // Once a card has 'card' item has been clicked....
        card[i].addEventListener('click', (e)=>{
             
        
                    for(let i = 0; i < info.length; i++){
                        // If the 'card' has a first name, last name, email or city property then...
                        if(e.target.innerHTML.includes(info[i].name.first) || e.target.innerHTML.includes(info[i].location.city || e.target.innerHTML.includes(info[i].email))){
                                console.log(info[i])
                                
                                    

                                            // Create a modal on click
                                            let modal = `
                                            <div class="modal-container">
                                            <div class="modal">
                                                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                                                <div class="modal-info-container">
                                                    <img class="modal-img" src="${info[i].picture.large}" alt="profile picture">
                                                    <h3 id="name" class="modal-name cap">${info[i].name.first} ${info[i].name.last}</h3>
                                                    <p class="modal-text">${info[i].email}</p>
                                                    <p class="modal-text cap">${info[i].location.city}</p>
                                                    <hr>
                                                    <p class="modal-text"> ${info[i].phone}</p>
                                                    <p class="modal-text">${info[i].location.state}</p>
                                                    <p class="modal-text">Birthday: ${info[i].dob.date.slice(8,10)}/${info[i].dob.date.slice(5,7)}/${info[i].dob.date.slice(0,4)}</p>
                                                </div>
                                            </div>  
                                            `
                                                   // Birthday: Using the birthday string from API call, use slice to select different parts of the info[i].dob string to create a template string formatted as the appropriate dob


                                                            // Insert the 'modal' variable into the body
                                                            // Use the insertAdjacentHTML so that the HTML does not conflict with content already there
                                                            // Use "afterbegin" to place "modal" inside body, but before the first element
                                                            body.insertAdjacentHTML("afterbegin", modal)

                                                        
                                                                // Select the main modal using event listener and close when 'x' button is clicked
                                                                document.getElementById('modal-close-btn').addEventListener('click', (e)=>{
                                                                    let mainModal = document.querySelector('.modal-container');
                                                                    mainModal.style.display = "none";
                                                                    
                                                        })

                         }
                    }
        
        })
    }
    
}










                                    // Format the date by removing last digits that are not needed
                                    // Select date and store in variable from loop
                                    // let newDate = info[i].dob.date
                                    // Slice the string and store in new variable
                                //     let dateSplit = newDate.split("")
                                //     let dateReverse = dateSplit.reverse()
                                //     let dateJoin = dateReverse.join("")
                                //     let dateSlice = dateJoin.slice(14, 24)
                                //     let newDateSplit = dateSlice.split("");
                                //     let newDateReverse = newDateSplit.reverse()
                                //     let newDateJoin = newDateReverse.join("")

                                //     let regex = /^(d{2})\/(d{2})\/(d{4})$/
                                //    let finalDate = newDateJoin.replace(newDateJoin, regex)
                                //     console.log(finalDate)
                                    

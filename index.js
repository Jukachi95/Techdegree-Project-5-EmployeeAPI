let url = 'https://randomuser.me/api/?results=12'
let gallery = document.getElementById('gallery');
let modalContainer = document.querySelector('modal-container')

// Fetch the initial information

fetch(url)
.then(res =>  res.json())
.then(data => data.results.map(info => {
    console.log(info.picture, info.name.first, info.name.second, info.location, info.email)
}))


// Helper functions
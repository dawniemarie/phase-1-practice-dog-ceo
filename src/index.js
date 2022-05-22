//created empty array that is filled with filtered breeds for dropdown
let breeds = []

//renders dog images to DOM
function getBreeds() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(response => response.json())
    .then(response => {
        const dogImageContainer = document.getElementById("dog-image-container")
        response.message.forEach(url => {
            const img = document.createElement("img")
            img.src = url 
            dogImageContainer.append(img)
        })
    }
    )}

//gets object array and renders on DOM (appearing as a list)(original breed list)
function getBreedNames(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(response => {
        breeds = Object.keys(response.message)
        addBreedNamesToDom(breeds)
        })
    }

function addBreedNamesToDom(breeds) {
    const ul = document.querySelector("#dog-breeds")
    breeds.map(breed => {
        const li = document.createElement("li")
        li.textContent = breed
        ul.append(li)
    })
}

//font color of clicked on 'li' changes
document.addEventListener("click", event => {
    if(event.target.matches("li")) {
        event.target.style.color = "pink"

    }})
//cleared out HTML and passed through filtered breeds for dropdown (new breed list)
document.addEventListener("change", event => {
    if (event.target.matches("#breed-dropdown")) {
        const ul = document.querySelector("#dog-breeds")
        ul.innerHTML = ""
        const filteredBreeds = breeds.filter(breed => breed[0] === event.target.value)
        addBreedNamesToDom(filteredBreeds)
    }   
})


getBreeds()
getBreedNames()
const imgs = [
    "images/hip1.jpg",
    "images/hip3.jpg",
    "images/hip3.jpg"
]

let container = document.getElementById("container")

function renderImage(){

    const images = ""
    for (let i = 0; i < imgs.length; i++){
        container.innerHTML += `<img class = "team" src="${img[i]}" alt="">`
    }
}

renderImage()
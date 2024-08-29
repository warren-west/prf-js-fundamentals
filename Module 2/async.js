// We want to get data from a server
// This will take some time
// Instead of using generic callbacks,
// We will use a Promise (or Async / Await - coming soon)


// Promises:
// (a super practical example)
// fetch("https://seasond-pushy-kingfisher.glitch.me/guitars")
//     .then((data) => {
//         return data.json()
//     })
//     .then((json) => {
//         console.log(json)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


const guitarName = document.getElementById("guitar-name")
const guitarImage = document.getElementById("guitar-img")

function renderGuitarDetails(gName, gImg) {

    console.log("render", gName, gImg);
    

    guitarName.innerText = gName
    guitarImage.src = gImg
}

// Async & Await:
async function getGuitarData() {

    try {
        const data = await fetch("https://seasoned-pushy-kingfisher.glitch.me/guitars")
        const json = await data.json()
    
        renderGuitarDetails(json[0].manufacturer, json[0].image)

        console.log(json)

    } catch(error) {
        console.log("This is the error...", error)
    }
}

getGuitarData()
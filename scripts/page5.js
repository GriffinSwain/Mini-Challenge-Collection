let adjectiveInput = document.getElementById("adjectiveInput");
let nounInput = document.getElementById("nounInput");
let adjestInput = document.getElementById("adjestInput");
let verbInput = document.getElementById("verbInput");
let noiseInput = document.getElementById("noiseInput");
let characterInput = document.getElementById("characterInput");
let animalInput = document.getElementById("animalInput");
let bodypartInput = document.getElementById("bodypartInput");
let noun2Input = document.getElementById("noun2Input");
let nameInput = document.getElementById("nameInput");

let madlibSubBtn = document.getElementById("madlibSubBtn");
let madlibReturn = document.getElementById("madlibReturn");

let savedInput = "";
let savedInput2 = "";
let savedInput3 = "";
let savedInput4 = "";
let savedInput5 = "";
let savedInput6 = "";
let savedInput7 = "";
let savedInput8 = "";
let savedInput9 = "";
let savedInput10 = "";
let madlibUrl = "";

madlibSubBtn.addEventListener("click", function () {
    madlibApi(savedInput)
    })
    
    function urlCall(url) {
        fetch(url).then(
            response => response.text()
        ).then(
            data => {
                madlibReturn.textContent = data
                console.log(data)
            }
        )
    }
    
    function madlibApi(savedInput, savedInput2, savedInput3, savedInput4, savedInput5, savedInput6, savedInput7, savedInput8, savedInput9, savedInput10){
        savedInput = adjectiveInput.value
        savedInput2 = nounInput.value
        savedInput3 = adjestInput.value
        savedInput4 = verbInput.value
        savedInput5 = noiseInput.value
        savedInput6 = characterInput.value
        savedInput7 = animalInput.value
        savedInput8 = bodypartInput.value
        savedInput9 = noun2Input.value
        savedInput10 = nameInput.value
        madlibUrl = "https://griffinminichapi.azurewebsites.net/minichallenge/MadLibs/" + savedInput + "/" + savedInput2 + "/" + savedInput3 + "/" + savedInput4 + "/" + savedInput5 + "/" + savedInput6 + "/" + savedInput7 + "/" + savedInput8 + "/" + savedInput9 + "/" + savedInput10;
        urlCall(madlibUrl)
    }
let numInput = document.getElementById("numInput");
let numReturn = document.getElementById("numReturn");
let numSubBtn = document.getElementById("numSubBtn");

let savedInput = "";
let OddOrEvenUrl = "";

numSubBtn.addEventListener("click", function () {
    OddOrEvenApi(savedInput)
    })
    
    function urlCall(url) {
        fetch(url).then(
            response => response.text()
        ).then(
            data => {
                numReturn.textContent = data
                console.log(data)
            }
        )
    }
    
    function OddOrEvenApi(savedInput){
        savedInput = numInput.value
        OddOrEvenUrl = "https://griffinminichapi.azurewebsites.net/minichallenge/OddOrEven/" + savedInput;
        urlCall(OddOrEvenUrl)
    }
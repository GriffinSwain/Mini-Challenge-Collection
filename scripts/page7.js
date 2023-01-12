let textInput = document.getElementById("textInput");
let reverseReturn = document.getElementById("reverseReturn");
let textSubBtn = document.getElementById("textSubBtn");

let savedInput = "";
let ReverseItUrl = "";

textSubBtn.addEventListener("click", function () {
    ReverseItApi(savedInput)
    })
    
    function urlCall(url) {
        fetch(url).then(
            response => response.text()
        ).then(
            data => {
                reverseReturn.textContent = data
                console.log(data)
            }
        )
    }
    
    function ReverseItApi(savedInput){
        savedInput = textInput.value
        ReverseItUrl = "https://griffinminichapi.azurewebsites.net/minichallenge/ReverseIt/" + savedInput;
        urlCall(ReverseItUrl)
    }
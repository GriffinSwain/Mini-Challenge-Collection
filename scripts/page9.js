// let textInput = document.getElementById("textInput");
// let textInput = "bad";
let textReturn = document.getElementById("textReturn");
let badSubBtn = document.getElementById("badSubBtn");
let decentSubBtn = document.getElementById("decentSubBtn");
let goodSubBtn = document.getElementById("goodSubBtn");
let textSubBtn = document.getElementById("textSubBtn");

let savedInput = "";
let RestaurantPickerUrl = "";

badSubBtn.addEventListener("click", function () {
    textInput = "bad";
})

goodSubBtn.addEventListener("click", function () {
    textInput = "good";
})

decentSubBtn.addEventListener("click", function () {
    textInput = "decent";
})

textSubBtn.addEventListener("click", function () {
    RestaurantPickerApi(savedInput)
    })
    
    function urlCall(url) {
        fetch(url).then(
            response => response.text()
        ).then(
            data => {
                textReturn.textContent = data
                console.log(data)
            }
        )
    }
    
    function RestaurantPickerApi(savedInput){

        if (textInput == "bad"){
            savedInput = "bad";
        }
        if (textInput == "good"){
            savedInput = "good";
        }
        if (textInput == "decent"){
            savedInput = "decent";
        }
        if (textInput == ""){
            textReturn = "Please click a button"
        }
            RestaurantPickerUrl = "https://griffinminichapi.azurewebsites.net/minichallenge/RestaurantPicker/" + savedInput;
            urlCall(RestaurantPickerUrl)
        }
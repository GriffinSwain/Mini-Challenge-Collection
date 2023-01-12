let textInput = document.getElementById("textInput");
let textReturn = document.getElementById("textReturn");
let textSubBtn = document.getElementById("textSubBtn");

let savedInput = "";
let RestaurantPickerUrl = "";

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

        if (textInput == "good" || "bad" || "decent"){

            savedInput = textInput.value
            RestaurantPickerUrl = "https://griffinminichapi.azurewebsites.net/minichallenge/RestaurantPicker/" + savedInput;
            urlCall(RestaurantPickerUrl)
        }
        else{
            textReturn.textContent = "Enter a valid response";
        }
    }
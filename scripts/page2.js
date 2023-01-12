let num1Input = document.getElementById("num1Input");
let num2Input = document.getElementById("num2Input");
let num1Return = document.getElementById("num1Return");
let numSubBtn = document.getElementById("2NumSubBtn");
// let num2Return = document.getElementById("num2Return");

let savedInput = "";
let savedInput2 = "";
let Add2NumbersUrl;



numSubBtn.addEventListener("click", function () {
AddingApi(savedInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            num1Return.textContent = data
            console.log(data)
        }
    )
}

function AddingApi(savedInput, savedInput2){
    savedInput = num1Input.value
    savedInput2 = num2Input.value
    Add2NumbersUrl = "https://griffinminichapi.azurewebsites.net/minichallenge/addingnumbers/" + savedInput + "/" + savedInput2;
    urlCall(Add2NumbersUrl)
}
// else{
    //     helloReturn.textContent = "Enter a valid response";
    // }
    
    // var numbers = /^[0-9]+$/;
    // if(nameInput.value.match(numbers)){
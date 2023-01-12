let num1Input = document.getElementById("num1Input");
let num2Input = document.getElementById("num2Input");
let num1Return = document.getElementById("numReturn");
let numSubBtn = document.getElementById("numSubBtn");

let savedInput = "";
let savedInput2 = "";
let GreaterOrLessUrl = "";



numSubBtn.addEventListener("click", function () {
GreaterOrLessApi(savedInput)
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

function GreaterOrLessApi(savedInput, savedInput2){
    savedInput = num1Input.value
    savedInput2 = num2Input.value
    GreaterOrLessUrl = "https://griffinminichapi.azurewebsites.net/minichallenge/GreaterOrLess/" + savedInput + "/" + savedInput2;
    urlCall(GreaterOrLessUrl)
}
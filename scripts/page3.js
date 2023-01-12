let nameInput = document.getElementById("nameInput");
let wakeInput = document.getElementById("wakeInput");
let responseReturn = document.getElementById("responseReturn");
let questionSubBtn = document.getElementById("questionSubBtn");

let savedInput = "";
let savedInput2 = "";
let askingQuestionsUrl = "";


questionSubBtn.addEventListener("click", function () {
    AskingApi(savedInput)
    })
    
    function urlCall(url) {
        fetch(url).then(
            response => response.text()
        ).then(
            data => {
                responseReturn.textContent = data
                console.log(data)
            }
        )
    }
    
    function AskingApi(savedInput, savedInput2){
        savedInput = nameInput.value
        savedInput2 = wakeInput.value
        askingQuestionsUrl = "https://griffinminichapi.azurewebsites.net/minichallenge/askingquestions/" + savedInput + "/" + savedInput2;
        urlCall(askingQuestionsUrl)
    }
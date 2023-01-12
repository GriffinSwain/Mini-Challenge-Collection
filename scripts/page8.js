let textInput = document.getElementById("textInput");
let infoReturn = document.getElementById("infoReturn");
let textSubBtn = document.getElementById("textSubBtn");

let savedInput = "";
let StudentDirectoryUrl = "";

textSubBtn.addEventListener("click", function () {
    StudentDirectoryApi(savedInput)
    })
    
    function urlCall(url) {
        fetch(url).then(
            response => response.text()
        ).then(
            data => {
                infoReturn.textContent = data
                console.log(data)
            }
        )
    }
    
    function StudentDirectoryApi(savedInput){
        savedInput = textInput.value
        StudentDirectoryUrl = "https://griffinminichapi.azurewebsites.net/StudentDirectory/StudentLookUp/" + savedInput;
        urlCall(StudentDirectoryUrl)
    }
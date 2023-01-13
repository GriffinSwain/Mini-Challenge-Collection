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
            response => response.json()
        ).then(
            data => {
                infoReturn.textContent = "First Name: " + data.firstName;
                lastReturn.textContent = "Last Name: " + data.lastName;
                slackReturn.textContent = "Slack Name: " + data.slackName;
                emailReturn.textContent = "Email: " + data.email;
                hobbiesReturn.textContent = "Hobbies: " + data.hobbies;
                console.log(data.firstName)
            }
        )
    }
    
    function StudentDirectoryApi(savedInput){
        savedInput = textInput.value
        StudentDirectoryUrl = "https://griffinminichapi.azurewebsites.net/StudentDirectory/StudentLookUp/" + savedInput;
        urlCall(StudentDirectoryUrl)
    }
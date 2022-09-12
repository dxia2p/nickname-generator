let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");

let randomNicknameButton = document.getElementById("randomNickname");
let allNicknames = document.getElementById("allNicknames");

let nicknamesList = document.getElementById("nicknamesList");

let nicknamesArr = ["Crusher", "the Scientist", "Twinkle-toes", "the Coder", "the Jester", "the Sloth", "Quick-Silver"];

randomNicknameButton.addEventListener("click", ()=>{
    let randNickname = firstNameInput.value + ` "` + nicknamesArr[randomNumber(0, nicknamesArr.length - 1)] + `" ` + lastNameInput.value;
    nicknamesList.innerHTML = randNickname;
});

allNicknames.addEventListener("click", ()=>{
    for(let i = 0; i < nicknamesArr.length; i++){
        let nickname = firstNameInput.value + ` "` + nicknamesArr[i] + `" ` + lastNameInput.value;
        nicknamesList.innerHTML += nickname + "<br>";
    }
});

function randomNumber(lowerBound, upperBound){
    return Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound);
}
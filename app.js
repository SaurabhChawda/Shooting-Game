var firstPLyName = document.querySelector("#first-player-input") // For First Player Name
var secondPLyName = document.querySelector("#second-player-input") // For second player Name
var btnforminput = document.querySelector("#btn-form-input") // Submit Button

var plyOne = document.querySelector("#first-player-result") // For First Player Result 
var PlyTwo = document.querySelector("#second-player-result") // For Second Player Result 

var btnClick = document.querySelector("#btn-result") //For Button Game
var ResetGame = document.querySelector("#btn-reset") //For Button Reset
var finalResult = document.querySelector("#Final-result") //For Final Result



var playerOneOutput = document.querySelector("#first-player-output") // For First Player Name Ouput
var playerTwoOutput = document.querySelector("#second-player-output") // For Second Player Name Ouput

//The Code Between 14 - 26 is for taking the player Name And Print in Game Section
btnClick.disabled=true;
btnforminput.addEventListener('click', clickHandler)

function clickHandler() {

    if (firstPLyName.value.length == 0 && secondPLyName.value.length == 0) {
        alert("☠️Enter the Player Name☠️")
        btnClick.disabled = true;
    } else {
        playerOneOutput.innerHTML = firstPLyName.value
        playerTwoOutput.innerHTML = secondPLyName.value
        btnClick.disabled = false;
    }
}


btnClick.addEventListener("click", clickResultHandler);

var incOne = 0,
    incTwo = 0,
    buttonLimit = 0,
    playerOne = 100,
    playerTwo = 100;

function clickResultHandler() {
    btnforminput.disabled = true;
    ResetGame.disabled = true;
    buttonLimit = buttonLimit + 1
    checkLimitToFive();
    generateRandomNumber();

}

function checkLimitToFive(){
    if (buttonLimit == 5) {
        result();
        btnClick.disabled = true;
        ResetGame.disabled = false;

    }

}
function generateRandomNumber(){
    for (let i = 0; i < 100; i++) {
        var playerOneDec = Math.floor(Math.random() * 5) + 0;
        playerOne = playerOne - playerOneDec

        var playerTwoDec = Math.floor(Math.random() * 5) + 0;
        playerTwo = playerTwo - playerTwoDec

        if (playerOne <= 0) {
            incOne = incOne + 1
            plyOne.innerHTML = incOne

            if (incOne >= 3) {
                result();
                ResetGame.disabled = false;
            }
        break;
        }
        if (playerTwo <= 0) {
            incTwo = incTwo + 1
            PlyTwo.innerHTML = incTwo

            if (incTwo >= 3) {
                result();
                ResetGame.disabled = false;
            }
        break;
        }
    }

}

function result() {
    if (incOne >= incTwo) {
        finalResult.innerHTML = "🎉🎊Congratulations " + playerOneOutput.value + "You Have Won the Game🎊🎉" 
    } else {
        finalResult.innerHTML = "🎉🎊Congratulations " + playerTwoOutput.value + "You Have Won the Game🎊🎉"
    }
}

ResetGame.addEventListener('click',refresh)
function refresh() {
    window .location.reload();
}

var firstPLyName = document.querySelector("#first-player-input")
var secondPLyName = document.querySelector("#second-player-input")
var btnforminput = document.querySelector("#btn-form-input")

var playerOneOutput = document.querySelector("#first-player-output")
var playerTwoOutput = document.querySelector("#second-player-output")

var plyOne = document.querySelector("#first-player-result")
var PlyTwo = document.querySelector("#second-player-result")

var btnClick = document.querySelector("#btn-result")
var finalResult = document.querySelector("#Final-result")
var errormessage = document.querySelector("#error-message")


btnforminput.addEventListener('click', clickHandler)

function clickHandler() {
    if (firstPLyName.value.length == 0 && secondPLyName.value.length == 0){
        alert("☠️Enter the Player Name☠️")
        btnClick.disabled = true;
    }
    else{
    playerOneOutput.innerHTML = firstPLyName.value
    playerTwoOutput.innerHTML = secondPLyName.value
        btnClick.disabled = false;
    }
}

btnClick.addEventListener("click", clickResultHandler);
var incOne = 0
var incTwo = 0
var buttonLimit = 0

function clickResultHandler() {
    buttonLimit = buttonLimit + 1

    if (buttonLimit === 5) {
        result();
        btnClick.disabled = true;
    }
    var playerOne = 100;
    var playerTwo = 100;

    for (let i = 0; i < 100; i++) {
        var playerOneDec = Math.floor(Math.random() * 5);
        playerOne = playerOne - playerOneDec

        var playerTwoDec = Math.floor(Math.random() * 5);
        playerTwo = playerTwo - playerTwoDec

        if (playerOne <= 0) {
            incOne = incOne + 1
            plyOne.innerHTML = incOne
            if(incOne>=3){
                result();
            }
            break;
        }
        if (playerTwo <= 0) {
            incTwo = incTwo + 1
            PlyTwo.innerHTML = incTwo

            if(incTwo>=3){
                result();
            }
            break;
        }
    }
}

function result() {
    if (incOne >= incTwo) {
        finalResult.innerHTML = "🎉🎊Congratulations " + playerOneOutput.value + "🎊🎉";
        reset();
    } else {
        finalResult.innerHTML = "🎉🎊Congratulations " + playerTwoOutput.value + "🎊🎉";
        reset();
    }
}

function reset(){
    firstPLyName.value = null ;
    secondPLyName.value = null ;
    plyOne.innerHTML = 0;
    PlyTwo.innerHTML = 0;
    incOne = 0;
    incTwo = 0;
    btnClick.disabled = true;
}
/*
One gun
Six chambers
One bullet
*/

//Start the game
function startFireWithGun() {
    //The index number of chamber that bullet will be loaded is created
    var chamberNumber = Math.floor(Math.random() * 6);

    //If that is true, player begins, else computer does
    var isSaidYes = document.getElementById("yes").checked;

    for (var i = 0; i < 6; i++) {
        var isTurnEven = ((i % 2) == 0) ? true : false;

        var isItEqual = (chamberNumber == i) ? true : false;

        var result;

        if (isSaidYes && isTurnEven) {
            //Player's turn
            result = writeTurn("Player", isItEqual, (i + 1) * 2000);
        }
        else if (isSaidYes && !isTurnEven) {
            //Computer's turn
            result = writeTurn("Computer", isItEqual, (i + 1) * 2000);
        }
        else if (!isSaidYes && isTurnEven) {
            //Computer's turn
            result = writeTurn("Computer", isItEqual, (i + 1) * 2000);
        }
        else { //!isSaidYes && !isTurnEven
            //Player's turn
            result = writeTurn("Player", isItEqual, (i + 1) * 2000);
        }

        if (!result) {
            writeTurn("", false, (i + 2) * 2000);
            return;
        }
    }
}

//Write detail of turn
function writeTurn(player, isItEqual, time) {
    var result = false;
    var textValue;

    if (player == "") {
        textValue = "Game is over!";
        setTimeout(function () {
            createElement(textValue);
            changeSituation();
        }, time);
        return;
    }

    if (!isItEqual) {
        textValue = player + " is OK.";
        result = true;
    }
    else {
        textValue = player + " is dead.";
    }

    setTimeout(function () {
        createElement(textValue);
    }, time);

    return result;
}

//Create new element which displays detail of turn
function createElement(textValue) {
    var tag, text, element;

    tag = document.createElement("p");
    text = document.createTextNode(textValue);
    tag.appendChild(text);
    element = document.getElementById("board");
    element.appendChild(tag);
}

//Reload the page
function reloadPage() {
    location.reload();
}

//Make element visible or disable
function changeSituation() {
    document.getElementById("new").style.visibility = "visible";
    document.getElementById("reload").style.visibility = "visible";
    document.getElementById("start").disabled = true;
}

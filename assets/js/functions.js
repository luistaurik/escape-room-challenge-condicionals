// Al final del codigo esta el bloque de codigo con el desafio textual del primer punto del desafio.
// Esta oculto para la tematica del proyecto de un "Escape Room" 

function showMap() {
    let initialDisplay, finalDisplay;
    initialDisplay = document.querySelector("#map").style.display;
    document.querySelector("#map").style.display = "block";
    if (initialDisplay === "block" || initialDisplay === "flex") {
    finalDisplay = "none";
    } else {
    finalDisplay = "block";
    }
    document.querySelector("#map").style.display = finalDisplay;
}

function showButtonIcon() {
    let initialDisplay, finalDisplay;
    initialDisplay = document.querySelector("#map-button").style.display;
    finalDisplay = "block"
    document.querySelector("#map-button").style.display = finalDisplay;
}

function showTutorial1() {
    let initialDisplay, finalDisplay;
    initialDisplay = document.querySelector("#tutorial-message").style.display;
    finalDisplay = "block"
    document.querySelector("#tutorial-message").style.display = finalDisplay;
}

function showMapButton() {
    let initialDisplay, finalDisplay;
    initialDisplay = document.querySelector("#map").style.display;
    document.querySelector("#map").style.display = "block";
    if (initialDisplay === "block" || initialDisplay === "flex") {
    finalDisplay = "none";
    } else {
    finalDisplay = "block";
    }
    document.querySelector("#map").style.display = finalDisplay;
}

function countStickers1() {
    let theAgile, notification;
    notification = document.querySelector("#agile-number");
    theAgile = document.querySelector("#the-agile").value;
    if(theAgile > 10) {
        notification.textContent = "You cannot have more than 10 members of this character"
    }
    else {
        notification.textContent = "You have " + theAgile + " Members of this character"
    };

}   

function countStickers2() {
    let theCreative, notification;
    notification = document.querySelector("#creative-number");
    theCreative = document.querySelector("#the-creative").value;
    if(theCreative > 10) {
        notification.textContent = "You cannot have more than 10 members of this character"
    }
    else {
        notification.textContent = "You have " + theCreative + " Members of this character"
    };

}  

function countStickers3() {
    let theStrong, notification;
    notification = document.querySelector("#strong-number");
    theCreative = document.querySelector("#the-strong").value;
    if(theStrong > 10) {
        notification.textContent = "You cannot have more than 10 members of this character"
    }
    else {
        notification.textContent = "You have " + theCreative + " Members of this character"
    };

}  

function countTotal() {
    let agiles, creatives, strongs, calculateMessage, sumStickers;
    agiles = document.querySelector("#the-agile").value;
    creatives = document.querySelector("#the-creative").value;
    strongs = document.querySelector("#the-strong").value;
    calculateMessage = document.querySelector("#team-message");
    sumStickers = Number(agiles) + Number(creatives) + Number(strongs);
    if (sumStickers === 0 || agiles === "" || creatives === "" || strongs === "") {
        calculateMessage.textContent = "You must have at least one member of each type in your team"
    }
    else if (sumStickers <= 10) {
        calculateMessage.textContent = "You have " + sumStickers + " members in your team";
    } 
    else {
        calculateMessage.textContent = "You cannot have more than 10 members in your team";
    }
}

function countTotalCondition() {
    let agiles, creatives, strongs, calculateMessage, sumStickers;
    agiles = document.querySelector("#the-agile").value;
    creatives = document.querySelector("#the-creative").value;
    strongs = document.querySelector("#the-strong").value;
    sumStickers = agiles + creatives + strongs;
    calculateMessage = document.querySelector("#team-message");
    if (agiles <= 10 && creatives <= 10 && strongs <= 10) {
        countTotal();
    }
    else {
        calculateMessage.textContent = "You cannot have more than 10 members in your team";
    }
}

function changePin1() {
    let padlockValue, padlockNumber,pinColor;
    padlockValue = document.querySelector("#padlock-number1").value;
    padlockNumber = parseFloat(padlockValue);
    pinColor = document.querySelector("#pin-1");
    if (padlockNumber == 9) {
        pinColor.style.backgroundColor = "#21B35B";
    } else {
        pinColor.style.backgroundColor = "#263238";
    }
}

function changePin2() {
    let padlockValue, padlockNumber,pinColor;
    padlockValue = document.querySelector("#padlock-number2").value;
    padlockNumber = parseFloat(padlockValue);
    pinColor = document.querySelector("#pin-2");
    if (padlockNumber == 1) {
        pinColor.style.backgroundColor = "#21B35B";
    } else {
        pinColor.style.backgroundColor = "#263238";
    }
}

function changePin3() {
    let padlockValue, padlockNumber,pinColor;
    padlockValue = document.querySelector("#padlock-number3").value;
    padlockNumber = parseFloat(padlockValue);
    pinColor = document.querySelector("#pin-3");
    if (padlockNumber == 1) {
        pinColor.style.backgroundColor = "#21B35B";
    } else {
        pinColor.style.backgroundColor = "#263238";
    }
}

function codeValidation() {
    let padlockValue1, padlockValue2, padlockValue3, result, firstPassword, secondPassword;
    let padlockNumber1, padlockNumber2, padlockNumber3;
    result = document.querySelector("#game-result");
    firstPassword = document.querySelector("#padlock1");
    secondPassword = document.querySelector("#padlock2");
    padlockValue1 = document.querySelector("#padlock-number1").value;
    padlockValue2 = document.querySelector("#padlock-number2").value;
    padlockValue3 = document.querySelector("#padlock-number3").value;
    padlockNumber1 = parseFloat(padlockValue1);
    padlockNumber2 = parseFloat(padlockValue2);
    padlockNumber3 = parseFloat(padlockValue3);
    if (padlockNumber1 == 9 && padlockNumber2 == 1 && padlockNumber3 == 1) {
        result.textContent = "You find the first code, one more password...";
        firstPassword.style.display = "none";
        secondPassword.style.display = "flex";
    }
    else {
        result.textContent = "You have not found the first code yet 😢🥹😭😿"
    }
}

// second password

function changePin4() {
    let padlockValue, padlockNumber,pinColor;
    padlockValue = document.querySelector("#padlock-number4").value;
    padlockNumber = parseFloat(padlockValue);
    pinColor = document.querySelector("#pin-4");
    if (padlockNumber == 7) {
        pinColor.style.backgroundColor = "#21B35B";
    } else {
        pinColor.style.backgroundColor = "#263238";
    }
}

function changePin5() {
    let padlockValue, padlockNumber,pinColor;
    padlockValue = document.querySelector("#padlock-number5").value;
    padlockNumber = parseFloat(padlockValue);
    pinColor = document.querySelector("#pin-5");
    if (padlockNumber == 1) {
        pinColor.style.backgroundColor = "#21B35B";
    } else {
        pinColor.style.backgroundColor = "#263238";
    }
}

function changePin6() {
    let padlockValue, padlockNumber,pinColor;
    padlockValue = document.querySelector("#padlock-number6").value;
    padlockNumber = parseFloat(padlockValue);
    pinColor = document.querySelector("#pin-6");
    if (padlockNumber == 4) {
        pinColor.style.backgroundColor = "#21B35B";
    } else {
        pinColor.style.backgroundColor = "#263238";
    }
}

function codeValidation2() {
    let padlockValue1, padlockValue2, padlockValue3, result, treasureImage, firstMessage;
    let padlockNumber1, padlockNumber2, padlockNumber3;
    result = document.querySelector("#game-result2");
    firstMessage = document.querySelector("#game-result");
    treasureImage = document.querySelector("#treasure-image");
    padlockValue1 = document.querySelector("#padlock-number4").value;
    padlockValue2 = document.querySelector("#padlock-number5").value;
    padlockValue3 = document.querySelector("#padlock-number6").value;
    padlockNumber1 = parseFloat(padlockValue1);
    padlockNumber2 = parseFloat(padlockValue2);
    padlockNumber3 = parseFloat(padlockValue3);
    if (padlockNumber1 == 7 && padlockNumber2 == 1 && padlockNumber3 == 4) {
        treasureImage.src = "./assets/imgs/open-treasure.png";
        firstMessage.style.display = "none";
        result.textContent = "You got the treasure 🥇🪙👑🫅";
        firstMessage.display = "none";
    }
    else {
        result.textContent = "You have not got the treasure yet 😢🥹😭😿"
    }
}

// Este es el codigo del primer reto colocar y quitar un border red de 2px solid

function changeBorderRed() {
    let imageBorder;
    imageBorder = document.querySelector("#map-img-border");
    if (imageBorder.style.borderWidth === "0px") {
        imageBorder.style.borderWidth = "2px"
    }
    else {
        imageBorder.style.borderWidth = "0px";
    }
}

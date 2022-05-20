let password = document.getElementById("password").value;
let submit = document.querySelector(".submitPassword");
let checkButton = document.querySelectorAll(".check-button");
let lever = document.querySelectorAll(".lever");
let launch = document.getElementById("launch");

function disable() {
    checkButton.forEach(button => {
        button.setAttribute("disabled", "true");
    });
    lever.forEach(button => {
        button.setAttribute("disabled", "true");
    });
    launch.setAttribute("disabled", "true");
}

function enable() {
    checkButton.forEach(button => {
        button.removeAttribute("disabled", "false");
    });
    lever.forEach(button => {
        button.removeAttribute("disabled", "false");
    });

    checkButton.forEach( button => {
        button.onchange = unlockLaunch;
    });
    lever.forEach( button => {
        button.onchange = unlockLaunch;
    });
}

function disablePassword() {
    submit.setAttribute("disabled", "true");
    document.getElementById("password").disabled = true;
}

function unlockLaunch() {
    let checkedCheckButton;
    let checkedLever;

    for (let i = 0; i < checkButton.length; i++) {
        let element = checkButton[i];

        if (!element.checked) {
            checkedCheckButton = false;
        }
    }

    for (let i = 0; i < lever.length; i++) {
        let element = lever[i];

        if (!element.value < 10) {
            checkedLever = false;
        }
    }

    if (checkedCheckButton && checkedLever) {
        launch.removeAttribute("disable", "false");
    }
    else {
        launch.setAttribute("disable", "true");
    }
}

function checkPassword() {
    let password = document.getElementById("password").value;

    if (password === "TrustNo1") {
        enable();
        disablePassword();
    }
    else if (password === "") {
        console.log("Enter the password");
    }
    else {
        console.log("Wrong password!");
    }
}

function start() {
    disable();
    submit.addEventListener("click",() => checkPassword());
}

start();
let password = document.getElementById("password").value;
let submit = document.querySelector(".submit-password");
let checkButton = document.querySelectorAll(".check-button");
let lever = document.querySelectorAll(".lever");
let launch = document.getElementById("launch");
let rocket = document.getElementById("rocket");

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
    let element1 = 0;
    let element2 = 0;

    for (let i = 0; i < checkButton.length; i++) {

        if (checkButton[i].checked) {
            element1++;
        }
    }

    for (let i = 0; i < lever.length; i++) {

        if (lever[i].value === "100") {
            element2++;
        }
    }

    if (element1 === checkButton.length && element2 === lever.length) {
        launch.disabled = false;
    }
    else {
        launch.disabled = true;
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

function fly() {
    launch.addEventListener('click', function rocketMove() {
        rocket.animate([

            { // current position of rocket
                top: '20%',
                left: '-10%',
            },

            { //  final position of rocket
                top: '-50%',
                left: '80%',
            }
        ], {
            // timing options
            duration: 6000,
            iterations: 1,
        })
    })
}

function start() {
    disable();
    submit.addEventListener("click", () => checkPassword());
    launch.addEventListener("click", () => fly());
}

start();
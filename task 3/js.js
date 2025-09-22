let click = false;
let decidee = document.getElementById("decide");

let bt1 = document.getElementById("1");
let bt2 = document.getElementById("2");
let bt3 = document.getElementById("3");
let bt4 = document.getElementById("4");
let bt5 = document.getElementById("5");
let bt6 = document.getElementById("6");
let bt7 = document.getElementById("7");
let bt8 = document.getElementById("8");
let bt9 = document.getElementById("9");

function decide(winnerVal) {
    decidee.textContent = winnerVal + " is the winner!";
    decidee.style.opacity = "1";  // fade-in ke liye CSS me transition laga lena
}

function winner() {
    // latest values
    let val1 = bt1.textContent;
    let val2 = bt2.textContent;
    let val3 = bt3.textContent;
    let val4 = bt4.textContent;
    let val5 = bt5.textContent;
    let val6 = bt6.textContent;
    let val7 = bt7.textContent;
    let val8 = bt8.textContent;
    let val9 = bt9.textContent;

    if (val1 !== "" && val1 === val5 && val5 === val9) {
        decide(val1);
    }
    if (val3 !== "" && val3 === val5 && val5 === val7) {
        decide(val3);
    }
    if (val1 !== "" && val1 === val2 && val2 === val3) {
        decide(val1);
    }
    if (val4 !== "" && val4 === val5 && val5 === val6) {
        decide(val4);
    }
    if (val7 !== "" && val7 === val8 && val8 === val9) {
        decide(val7);
    }
    if (val1 !== "" && val1 === val4 && val4 === val7) {
        decide(val1);
    }
    if (val2 !== "" && val2 === val5 && val5 === val8) {
        decide(val2);
    }
    if (val3 !== "" && val3 === val6 && val6 === val9) {
        decide(val3);
    }
    
}
let resetbtn = document.getElementById("reset")


resetbtn.addEventListener("click", () => {
    buttons.forEach(box => {
        box.textContent =""
    })
})


let buttons = document.querySelectorAll(".box");
buttons.forEach(box => {
    box.addEventListener("click", () => {
        if (box.textContent === "") {
            if (click === false) {
                box.textContent = "X";
                click = true;
            } else {
                box.textContent = "O";
                click = false;
            }
            winner();
        }
    });
});

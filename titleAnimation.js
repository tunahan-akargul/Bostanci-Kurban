const title = document.querySelector(".title2");
let seconds = 0;
let maxSeconds = 6;
let boolTitle = true;
let firstTitle = "Kurbanda her işi bize bırakın!";
let secondTitle = "Kurban kesiminde içiniz rahat olsun!";

const interval = setInterval(() => {
    seconds++;

    if (seconds === maxSeconds) {
        seconds = 0;
        boolTitle = !boolTitle;
        if (boolTitle) {
            title.textContent = firstTitle;
        } else {
            title.textContent = secondTitle;
        }
    }
}, 1000);
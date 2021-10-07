const mida = ["박민정", "우순남", "전민근", "유성화", "권보성", "권유진", "박은별", "도성경", "문정원", "문상우"];
const shuffle = document.querySelector(".shuffle");
const result = document.querySelector(".result");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");

const random1 = [];
const random2 = [];
const random3 = [];

shuffle.addEventListener("click", () => {
    while (mida.length > 6) {
        ran1 = mida.splice(Math.floor(Math.random() * mida.length), 1)[0];
        random1.push(ran1);
        localStorage.setItem("1조", random1);
    }
    while (mida.length > 3) {
        ran2 = mida.splice(Math.floor(Math.random() * mida.length), 1)[0];
        random2.push(ran2);
        localStorage.setItem("2조", random2);
    }
    localStorage.setItem("3조", mida);
    result1.innerHTML = `1조: ${localStorage.getItem("1조")}`;
    result2.innerHTML = `2조: ${localStorage.getItem("2조")}`;
    result3.innerHTML = `3조: ${localStorage.getItem("3조")}`;
}, {
    once: true
})

result1.innerHTML = `1조: ${localStorage.getItem("1조")}`;
result2.innerHTML = `2조: ${localStorage.getItem("2조")}`;
result3.innerHTML = `3조: ${localStorage.getItem("3조")}`;



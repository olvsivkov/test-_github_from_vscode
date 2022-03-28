/* --- when you click to btn, you see this joke --- */

const button = document.querySelector(".btn")
console.log(button)

function alertFun() {
    console.log("Нажал на кнопку")
    let eggs = prompt("Сколько яиц в магазине?", 0);
    (eggs >= 1) ? alert("купил" + " " + (1 * 10) + " " + "булок"): alert("в магазине нет яиц");
};

button.addEventListener("click", alertFun);

/* --- --- */
console.log("test ==== slider")



const buttons = document.querySelectorAll(".main__slider-navigation button");
const images = document.querySelectorAll(".main__slider-picture img");
let activeButtonIndex = 0;
let intervalId;

function toggleActiveButton() {
    buttons[activeButtonIndex].classList.remove("active");
    images[activeButtonIndex].classList.remove("active");

    activeButtonIndex = (activeButtonIndex + 1) % buttons.length;

    buttons[activeButtonIndex].classList.add("active");
    images[activeButtonIndex].classList.add("active");
}

function handleButtonClick(index) {
    buttons[activeButtonIndex].classList.remove("active");
    images[activeButtonIndex].classList.remove("active");

    activeButtonIndex = index;

    buttons[activeButtonIndex].classList.add("active");
    images[activeButtonIndex].classList.add("active");

  clearInterval(intervalId); // Очищаем интервал
  intervalId = setInterval(toggleActiveButton, 5000); // Запускаем интервал снова
}

intervalId = setInterval(toggleActiveButton, 5000);

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        handleButtonClick(index);
    });
});
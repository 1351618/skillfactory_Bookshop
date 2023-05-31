console.log("test ==== category_list");

const categories = document.querySelectorAll(".main__categories li");

categories.forEach(category => {
  category.addEventListener("click", () => {
    // Удалить класс "activ" у всех пунктов меню
    categories.forEach(item => item.classList.remove("activ"));
    // Добавить класс "activ" только к выбранному пункту меню
    category.classList.add("activ");
  });
});
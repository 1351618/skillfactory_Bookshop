console.log("test ==== basket");


const perent_basket = document.querySelector(".header__Access-menu-cart") // получаем родительский элемент

const basket_num = document.createElement(`span`) // создаем <span>
basket_num.classList.add("header__Access-menu-cart-badge") // создаем класс
basket_num.textContent = 10  // добавляем контент

perent_basket.appendChild(basket_num) // помещаем созданный спан в родительский элемент

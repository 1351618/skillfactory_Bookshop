console.log("test ==== Google_Books_API")


// AIzaSyBue5Jx2i1cFC8-u06kdi6MhteRchM5lCY
// ключ от гугл диска
// AIzaSyBue5Jx2i1cFC8-u06kdi6MhteRchM5lCY


// https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyBue5Jx2i1cFC8-u06kdi6MhteRchM5lCY&printType=books&startIndex=0&maxResults=6&langRestrict=en


const imagePath = 'src/image/placeholder.png'; // Путь к заглушки

function truncateDescription(description, maxWords) {
    if (!description) {
      return ''; // Если описание отсутствует, возвращаем пустую строку
    }
  
    const words = description.split(' ');
    let shortenedDescription = words.slice(0, maxWords).join(' ');
  
    if (words.length > maxWords) {
      shortenedDescription += '...';
    }
  
    return shortenedDescription;
  }
  
  fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:Business&maxResults=${20}&langRestrict=en`)
    .then(response => response.json())
    .then(data => {
      const books = data.items;
  
      const galleryContainer = document.querySelector('.main__gallery');
  
      // Проход по каждой книге
      books.forEach(book => {
        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors;
        const description = book.volumeInfo.description;
        const thumbnail = book.volumeInfo.imageLinks?.thumbnail; // Проверка наличия изображения
        const price = book.saleInfo.listPrice?.amount; // Проверка наличия цены
  
        // Создание элемента книги
        const bookElement = document.createElement('div');
        bookElement.classList.add('main__gallery_book');
  
        // Создание и заполнение элементов внутри книги
        const imageElement = document.createElement('div');
        imageElement.classList.add('main__gallery_book-image');
        const imgElement = document.createElement('img');
        imgElement.classList.add('book-image');
  
        if (imgElement) {
          imgElement.src = thumbnail || imagePath; // Заглушка для изображения
          imgElement.alt = 'thumbnail';
        }
  
        imageElement.appendChild(imgElement);
  
        const contentElement = document.createElement('div');
        contentElement.classList.add('main__gallery_book-content');
  
        const authorElement = document.createElement('div');
        authorElement.classList.add('book-author');
        authorElement.textContent = authors;
  
        const titleElement = document.createElement('div');
        titleElement.classList.add('book-title');
        titleElement.textContent = title;
  
        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('book-description');
        const truncatedDescription = truncateDescription(description, 10);
        descriptionElement.textContent = truncatedDescription;
  
        const priceElement = document.createElement('div');
        priceElement.classList.add('book-price');
        priceElement.textContent = price ? `$${price}` : 'Цена не указана';
  
        const buyButton = document.createElement('button');
        buyButton.classList.add('book-button_buy');
        buyButton.textContent = 'BUY NOW';
  
        contentElement.appendChild(authorElement);
        contentElement.appendChild(titleElement);
        contentElement.appendChild(descriptionElement);
        contentElement.appendChild(priceElement);
        contentElement.appendChild(buyButton);
  
        bookElement.appendChild(imageElement);
        bookElement.appendChild(contentElement);
  
        // Добавление книги в контейнер галереи
        galleryContainer.appendChild(bookElement);
      });
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
    });
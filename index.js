import { DateTime } from '../awesome-part2/node_modules/luxon/build/es6/luxon.js';
import { displayAddBookSection, displayContactSection, displayListBooks } from '../awesome-part2/modules/display.js';
import Book from '../awesome-part2/modules/Book.js';

const date = document.querySelector('.date');
const dt = DateTime.now();
date.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);

let books = [];
const bookList = document.querySelector('.book-list');
const addBookForm = document.querySelector('#add-book');
const add = document.querySelector('#add');
const { title, author } = addBookForm.elements;
const listLink = document.querySelector('#list');
const addLink = document.querySelector('#new');
const contactLink = document.querySelector('#contact');

displayListBooks();

listLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayListBooks();
});


contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayContactSection();

});

addLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayAddBookSection();
})

// displaying books in localStorage
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
}

function removeBook(id) {
  books = books.filter((item) => (
    Number(id) !== item.id
  ));
  localStorage.setItem('books', JSON.stringify(books));
}

function display() {
  bookList.innerHTML = '';
  books.forEach((item) => {
    const book = new Book(item.id, item.name, item.author);
    bookList.innerHTML += `<div><p> "${book.name}" by ${book.author}
    <button class="btn-remove" value="${book.id}"> remove </button>
    </p>
    </div>`;
  });
  const remove = document.querySelectorAll('.btn-remove');
  remove.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      removeBook(item.getAttribute('value'));
      display();
    });
  });
}

display();

function addBook(name, author) {
  const id = Date.now();
  books.push({ name, author, id });
  localStorage.setItem('books', JSON.stringify(books));
  display();
}

add.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(title.value, author.value);
});

const bookList = document.querySelector('.book-list');
const addBookForm = document.querySelector('#add-book');
const add = document.querySelector('#add');
const { title, author } = addBookForm.elements;
const listSection = document.querySelector('.Books-section');
const addNewSection = document.querySelector('.addBook-section');
const contactSection = document.querySelector('.contact-section');
const listLink = document.querySelector('#list');
const addLink = document.querySelector('#new');
const contactLink = document.querySelector('#contact');

export function displayAddBookSection() {
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
  addNewSection.style.display = 'block';
}

export function displayContactSection() {
  listSection.style.display = 'none';
  contactSection.style.display = 'block';
  addNewSection.style.display = 'none';
}

export function displayListBooks() {
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
  listSection.style.display = 'block';
}

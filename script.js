const myLibrary = [];


const bookContainer = document.querySelector('.grid-container')
const addBtn = document.querySelector('.add > button')

function Book(title, author, pages, read  ){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(bookName){
    myLibrary.push(bookName)
}

function displayBook(books){
    const bookDiv = document.createElement('div')
    bookDiv.textContent = `${books.title}, 
    ${books.author}, ${books.pages},  ${books.read}`
    bookDiv.classList.add('book')
    bookContainer.appendChild(bookDiv)
}

harryPotter = new Book ('Harry Potter', 'J K Rowling', 230 , 'Read')
atomicHabits = new Book ('Atomic Habits',  'James Clear', 234 , "Read")

addBookToLibrary(harryPotter)
displayBook(harryPotter)
addBookToLibrary(atomicHabits)
displayBook(atomicHabits)


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
addBtn.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

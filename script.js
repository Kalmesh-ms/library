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



const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");



// "Show the dialog" button opens the dialog modally
addBtn.addEventListener("click", () => {
  dialog.showModal();
});


const submitButton = document.querySelector('.submitButton')
const title = document.querySelector('#book_name')
const author = document.querySelector('#book_author')
const pages = document.querySelector('#book_pages')
const read = document.querySelector('#read')

submitButton.addEventListener('click', submitButtonClick );

function submitButtonClick(event){
    let bookTitle = title.value;
    let bookAuthor = author.value;
    let bookPages = pages.value;
    let bookRead = read.checked ? "Read" : "Not Read";

    if (bookTitle && bookAuthor && bookPages )
    {
        let newBook = new Book (bookTitle, bookAuthor, bookPages, bookRead)
        addBookToLibrary(newBook);
        displayBook(newBook);
        dialog.close();
    }
    else return
    event.preventDefault();
}


const myLibrary = [];

const bookDiv = document.createElement('div')
const bookContainer = document.querySelector('.grid-container')

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

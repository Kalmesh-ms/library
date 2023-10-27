const myLibrary = [];

const div = document.createElement('div')

function Book(title, author, pages, read ){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = false
}

function addBookToLibrary(bookName){
    myLibrary.push(bookName)
}



harryPotter = new Book ('Harry Potter', 'J K Rowling', 230 , 'read')

addBookToLibrary(harryPotter)


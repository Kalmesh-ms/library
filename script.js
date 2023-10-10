const myLibrary = [];

function Book(title , author , pages , status){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook)
}

const harryPotter = new Book("Harry Potter" , "J K Rowling" , 123 , "read")

addBookToLibrary(harryPotter)
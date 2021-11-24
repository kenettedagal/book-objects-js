function Book(title,  author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${readStatus}`
    }
}

const book = new Book("Harry Potter", "J.K. Rowling", "265", "not yet read")

console.log(book.info())




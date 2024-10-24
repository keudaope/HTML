// Base class for all books
class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  // Method to display basic information about the book
  getInfo() {
    return `${this.title} by ${this.author}, priced at $${this.price}`;
  }
}

// FictionBook class - inherits from Book
class FictionBook extends Book {
  constructor(title, author, price, genre) {
    super(title, author, price);
    this.genre = genre;
  }

  // Override getInfo method to include the genre
  getInfo() {
    return `${super.getInfo()}, Genre: ${this.genre}`;
  }
}

// NonFictionBook class - inherits from Book
class NonFictionBook extends Book {
  constructor(title, author, price, subject) {
    super(title, author, price);
    this.subject = subject;
  }

  // Override getInfo method to include the subject
  getInfo() {
    return `${super.getInfo()}, Subject: ${this.subject}`;
  }
}

// BookStore class - manages books in the store
class BookStore {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // Method to add a book to the store
  addBook(book) {
    this.books.push(book);
    this.renderBooks();
  }

  // Method to remove a book by title
  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    this.renderBooks();
  }

  // Method to render all books in the store
  renderBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    this.books.forEach((book) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>$${book.price}</td>
        <td>${book instanceof FictionBook ? "Fiction" : "Non-Fiction"}</td>
        <td><button onclick="store.removeBook('${
          book.title
        }')">Remove</button></td>
      `;

      bookList.appendChild(row);
    });
  }
}

// Create a new bookstore instance
const store = new BookStore("My Book Store");

// Handle form submission to add a new book
document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const price = parseFloat(document.getElementById("price").value);
    const bookType = document.getElementById("bookType").value;
    const extraInfo = document.getElementById("extraInfo").value;

    let book;

    // Create the appropriate book object based on the selected type
    if (bookType === "fiction") {
      book = new FictionBook(title, author, price, extraInfo);
    } else {
      book = new NonFictionBook(title, author, price, extraInfo);
    }

    // Add the book to the bookstore
    store.addBook(book);

    // Clear form fields
    document.getElementById("bookForm").reset();
  });

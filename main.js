//empty array
let myLibrary = [];
//btns
let bookAdd = document.querySelector("#new-book-btn");
let bookForm = document.querySelector('#new-book-form');
// modal
const modalDiv = document.querySelector("#d")

//looping
function looping(){
    bookAdd.addEventListener("click", function(){
    bookForm.style.display = 'block';
    d.showModal()
});
}
looping();

let next = 0;
// new values 
let libraryBank = document.querySelector("#library");
libraryBank.innerHTML = "";

//btn functions
document.querySelector("#submit").addEventListener('click', function(){
    modalDiv.style.display = "none";
});
document.querySelector("#close-btn").addEventListener('click', function(){

    modalDiv.style.display = "none";

});
//this
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// render books from forms
function render() {
    let libraryBank = document.querySelector("#library");
    libraryBank.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        let singleBook = myLibrary[i];

        let singleBookEl = document.createElement("div");
        singleBookEl.innerHTML = `<p>Title: ${singleBook.title} </p>`
        libraryBank.appendChild(singleBookEl);

        let authorBookEl = document.createElement("div");
        authorBookEl.innerHTML = `<p>Author: ${singleBook.author} </p>`
        libraryBank.appendChild(authorBookEl);

        let pagesBookEl = document.createElement("div");
        pagesBookEl.innerHTML = `<p>Pages: ${singleBook.pages} </p>`
        libraryBank.appendChild(pagesBookEl);

        let readBookEl = document.createElement("div");
        readBookEl.innerHTML = `<p>Read: ${singleBook.read} </p>`
        libraryBank.appendChild(readBookEl);
    }

}

function bookLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    render();

}

   document.querySelector('#new-book-form').addEventListener("submit", function(event){
    event.preventDefault();
    bookLibrary();
}) 




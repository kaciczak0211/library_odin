//add book 
const bookAdd = document.querySelector("#new-book-btn");
const bookForm = document.querySelector('#new-book-form');
bookAdd.addEventListener("click", function(){

    bookForm.style.display = 'block'
});

document.querySelector("#submit").addEventListener('click', function(){
    bookForm.style.display = "none";
});
document.querySelector("#close-btn").addEventListener('click', function(){
    bookForm.style.display = "none";
});

let myLibrary = JSON.parse(localStorage.getItem("Books")) || [];






function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// render books from forms

function render() {
    let libraryBank = document.querySelector(".titleBook");
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


//local storage
// Local Storage
// bookAdd.addEventListener('click', function(){
//     const localBookStorage = document.getElementById('bookLocalStorage').value;
//     myLibrary.push(localBookStorage);
//     localStorage.setItem("Books", JSON.stringify(myLibrary));

//     for(let i = 0; i < myLibrary.length; i++){
//         let li = document.createElement("div");
//         li.textContent = myLibrary[i]

//         li.ap
//     }
// })






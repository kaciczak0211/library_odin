
let bookAdd = document.querySelector("#new-book-btn");
let bookForm = document.querySelector('#new-book-form');


bookAdd.addEventListener("click", function(){
    bookForm.style.display = 'block';
    let newDiv = document.createElement("div");
    newDiv.setAttribute('id', "library");

});

function generator() {
    random = Math.floor(Math.random() * 1000);
    console.log(random);
    return random
}




// new values 
let libraryBank = document.querySelector("#library");
libraryBank.innerHTML = "";


document.querySelector("#submit").addEventListener('click', function(){
    bookForm.style.display = "none";
});
document.querySelector("#close-btn").addEventListener('click', function(){
    bookForm.style.display = "none";
});

let myLibrary = []






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
        singleBookEl.setAttribute('id', random + document.querySelectorAll("div").length);
        singleBookEl.innerHTML = `<p>Title: ${singleBook.title} </p>`
        libraryBank.appendChild(singleBookEl);

        let authorBookEl = document.createElement("div");
        authorBookEl.setAttribute('id', random + document.querySelectorAll("div").length);
        authorBookEl.innerHTML = `<p>Author: ${singleBook.author} </p>`
        libraryBank.appendChild(authorBookEl);

        let pagesBookEl = document.createElement("div");
        pagesBookEl.setAttribute('id', random + document.querySelectorAll("div").length);
        pagesBookEl.innerHTML = `<p>Pages: ${singleBook.pages} </p>`
        libraryBank.appendChild(pagesBookEl);

        let readBookEl = document.createElement("div");
        readBookEl.setAttribute('id', random + document.querySelectorAll("div").length);
        readBookEl.innerHTML = `<p>Read: ${singleBook.read} </p>`
        libraryBank.appendChild(readBookEl);

        
        let removeBtn = document.createElement("div");
        removeBtn.setAttribute('id', random);
        removeBtn.innerHTML = `<button id="remove_btn">Remove</button>`
        libraryBank.appendChild(removeBtn);

        const removeButton = document.getElementById("remove_btn");

        removeButton.addEventListener('click', function(){
            singleBookEl.remove();
            authorBookEl.remove();
            pagesBookEl.remove();
            readBookEl.remove();
            removeBtn.remove();

        });
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

document.querySelector('#close-btn').addEventListener("click", function(event){
    event.preventDefault();

}) 

// const removeButton = document.getElementById("remove_btn");
// removeButton.addEventListener('click', function(){
//     let randomDiv = Math.floor(Math.random() * 100);
//     console.log(randomDiv);
// })

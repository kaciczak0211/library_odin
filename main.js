
let bookAdd = document.querySelector("#new-book-btn");
let bookForm = document.querySelector('#new-book-form');


bookAdd.addEventListener("click", function(){
    bookForm.style.display = 'block';
    bookAdd.style.display = "none";
});

// new values 
let libraryBank = document.querySelector("#library");
libraryBank.innerHTML = "";


document.querySelector("#submit").addEventListener('click', function(){
    bookForm.style.display = "none";
});
document.querySelector("#close-btn").addEventListener('click', function(){
    bookForm.style.display = "none";
    bookAdd.style.display = "block";

});

let myLibrary = [];



function removeBook(i){
    myLibrary.splice(i, 1);
    render();
    setData();
}




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
        singleBookEl.setAttribute("class", "book-section");
        singleBookEl.innerHTML = `
        <div class="header">
        <h3>Title: ${singleBook.title}</h3>
        <h4>By: ${singleBook.author}</h3>
        </div>
        <div class="addition">
        <h4>Pages: ${singleBook.pages}</h4>
        <h4>Done? ${singleBook.read}</h4>        
        </div>
        <button id="remove_btn" onclick="removeBook(${i})" >Remove</button>
        `
        libraryBank.appendChild(singleBookEl);

        if(singleBook.read === true){
            singleBookEl.style.background = "green"
        }else{
            singleBookEl.style.background = "red"
        }

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
    setData();
    
}


   document.querySelector('#new-book-form').addEventListener("submit", function(event){
    event.preventDefault();
    bookLibrary();
    bookAdd.style.display = "block";
}) 

document.querySelector('#close-btn').addEventListener("click", function(event){
    event.preventDefault();

}) 


function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
};

function restore() {
    if(!localStorage.myLibrary) {
        render();
    }else {
        let objects = localStorage.getItem('myLibrary')
        objects = JSON.parse(objects);
        myLibrary = objects;
        render();
    }
};

restore();
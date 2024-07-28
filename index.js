function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = function(){
        let readOrNot;
        if(this.read){
            readOrNot="read";
        }else{
            readOrNot="not read yet";
        }            

        let bookInfo = this.title + " by " + this.author +", "+ this.pages + "pages," + readOrNot +'.';
        return bookInfo;
    }
};
const harryPotter = new Book('Harry Potter', "JK Rowling", '800', false);
const myLibrary=[];
myLibrary.push(harryPotter);

//Array to store user input

let title;
let author;
let pages;
let read;

function addBookToLibrary(){
    title= prompt("What's the title of the book?");
    author = prompt ("Who's an author of the book?");
    pages = prompt ("How many pages does the book have?");
    read = confirm (" Have you read the book? ");

    const bookOne=new Book(title,author, pages, read);
    myLibrary.push(bookOne);
}
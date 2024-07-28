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


const bookForm=document.querySelector('#bookForm');


//stores userinputs and pushes to array
bookForm.addEventListener("submit", (e)=>{
    e.preventDefault();
   
    let title = document.querySelector('#book-title');
    let author = document.querySelector('#book-author');
    let pages = document.querySelector('#book-pages');
    let read = document.querySelector('#readOrNot');

    const book = new Book(title.value, author.value, pages.value, read.checked);

    myLibrary.push(book);

    bookForm.reset();
    //resets the input field after submission.
});

// function displayBooks(){
//     myLibrary.forEach(e)=>{

//         const card = 
//     }
// }

function displayFirstBook(){
    const cardContainer = document.createElement('div');
    const mainContainer = document.querySelector('main');

    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('div');

    mainContainer.append(cardContainer);

    let cardOne = myLibrary[0];

    title.textContent =cardOne.title;
    author.textContent = cardOne.author;
    pages.textContent = cardOne.pages;
    read.textContent = cardOne.read;
    
    cardContainer.append(title, author, pages, read);
}
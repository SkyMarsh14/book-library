const dialog = document.querySelector("dialog");
const modalBtn = document.querySelector("button");
class Book{
    constructor(title,author,pages,read){
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
}

//books that are put beforehand
const harryPotter = new Book('Harry Potter', "JK Rowling", '800', false);
const gatsby = new Book('The Great Gatsby', "F. Scott Fitzgerald" ,'345', true);
const theLordOfTheRings = new Book('The Lord Of the Rings', "John Ronald Reuel", "655", false);
const crimeAndPunishment = new Book("Crime and Punishment", "Fyodor Dostoevsky", '450', true);
const kafkaOnTheShore = new Book("Kafka on the Shore", "Haruki Murakami", '250', false);

const myLibrary=[];
myLibrary.push(harryPotter,gatsby, theLordOfTheRings,crimeAndPunishment, kafkaOnTheShore);

//Array to store user input

function generateRandomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}


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

    let bookIndex = myLibrary.indexOf(book);

    addNewBook(myLibrary[bookIndex],bookIndex);

    dialog.close();
});

const mainContainer = document.querySelector('main');

function displayBook() {
    myLibrary.forEach((e,index) => {
        addNewBook(e,index);
    });
}
displayBook();


const closeBtn = 
modalBtn.addEventListener("click", ()=>{
    dialog.showModal();
});

function addNewBook(e,index){
    const cardContainer = document.createElement('div');
    cardContainer.setAttribute("data-index",index);
    cardContainer.classList.add("cardContainer");
    mainContainer.append(cardContainer);
    
    const bookSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    bookSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    bookSvg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    bookSvg.setAttribute("version", "1.1");
    bookSvg.setAttribute("id", "Capa_1");
    bookSvg.setAttribute("width", "100%");
    bookSvg.setAttribute("height", "100%");
    bookSvg.setAttribute("viewBox", "0 0 459.319 459.319");
    bookSvg.setAttribute("xml:space", "preserve");
    
    // Set the fill attribute with a random color
    bookSvg.setAttribute("fill", `#${generateRandomColor()}`);
    
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M94.924,366.674h312.874c0.958,0,1.886-0.136,2.778-0.349c0.071,0,0.13,0.012,0.201,0.012 c6.679,0,12.105-5.42,12.105-12.104V12.105C422.883,5.423,417.456,0,410.777,0h-2.955H114.284H94.941 c-32.22,0-58.428,26.214-58.428,58.425c0,0.432,0.085,0.842,0.127,1.259c-0.042,29.755-0.411,303.166-0.042,339.109 c-0.023,0.703-0.109,1.389-0.109,2.099c0,30.973,24.252,56.329,54.757,58.245c0.612,0.094,1.212,0.183,1.847,0.183h317.683 c6.679,0,12.105-5.42,12.105-12.105v-45.565c0-6.68-5.427-12.105-12.105-12.105s-12.105,5.426-12.105,12.105v33.461H94.924 c-18.395,0-33.411-14.605-34.149-32.817c0.018-0.325,0.077-0.632,0.071-0.963c-0.012-0.532-0.03-1.359-0.042-2.459 C61.862,380.948,76.739,366.674,94.924,366.674z M103.178,58.425c0-6.682,5.423-12.105,12.105-12.105s12.105,5.423,12.105,12.105 V304.31c0,6.679-5.423,12.105-12.105,12.105s-12.105-5.427-12.105-12.105V58.425z");
    const toggleContainer = document.createElement('div');
    toggleContainer.classList.add("toggleContainer");
    const deleteBtn = document.createElement('button');
    
    g.appendChild(path);
    bookSvg.appendChild(g);
    cardContainer.appendChild(bookSvg);
    
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('button');
    
    title.textContent = e.title;
    author.textContent = `Written by ${e.author}`;
    pages.textContent = e.pages + " pages";
    read.textContent = e.read ? "Status: Read" : "Status: Unread";
    deleteBtn.textContent = "Delete";
    
    cardContainer.append(title, author, pages, read,deleteBtn);


    read.addEventListener("click", function(e){
        if(this.textContent==="Status: Read"){
            this.textContent="Status: Unread";
        }else{
            this.textContent="Status: Read";
        }

        let targetElement = myLibrary[e.target.parentElement.dataset.index];
        targetElement.toggleStatus();

    });
    const cardInfo = cardContainer.querySelectorAll('div');
    cardInfo.forEach((element) => {
        element.classList.add("cardInfo");
        //remove parent's of clicked element
        deleteBtn.addEventListener("click",e=>{
            let parentIndex= e.target.parentElement.dataset.index;
            const targetElement = document.querySelector(`[data-index='${parentIndex}']`);
            targetElement.remove();
            myLibrary.splice(parentIndex,1);
        });
    });
};

Book.prototype.toggleStatus = function(){
    this.read = this.read? false:true;
}
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

//books that are put beforehand
const harryPotter = new Book('Harry Potter', "JK Rowling", '800', false);
const gatsby = new Book('The Great Gatsby', "F. Scott Fitzgerald" ,'345', true);
const theLordOfTheRings = new Book('The Lord Of the Rings', "John Ronald Reuel", "655", false);
const crimeAndPunishment = new Book("Crime and Punishment", "Fyodor Dostoevsky", '450', true);
const kafkaOnTheShore = new Book("Kafka on the Shore", "Haruki Murakami", '250', false);

const myLibrary=[];
myLibrary.push(harryPotter,gatsby, theLordOfTheRings,crimeAndPunishment, kafkaOnTheShore);

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

    displayBook();
    //resets the input field after submission.
});

const mainContainer = document.querySelector('main');
function displayBook(){

    mainContainer.innerHTML="";
    

    myLibrary.forEach((e)=>{
        
        const cardContainer = document.createElement('div');
        mainContainer.append(cardContainer);
        
        cardContainer.classList.add("cardContainer");
        
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const read = document.createElement('div');
        //add class later to use querySelectorAll
        
        title.textContent =e.title;
        author.textContent = `Written by ${e.author}`;
        pages.textContent = e.pages + " pages";
        if(e.read){
            read.textContent = "Status: Read"
        }else{
            read.textContent = "Status: Unread"
        }
        
        cardContainer.append(title, author, pages, read);

        const cardInfo = cardContainer.querySelectorAll('div');
        cardInfo.forEach((e)=>{
            e.classList.add("cardInfo");
        })
    });

};

displayBook();
let library = [];
let choices = ['Read', 'Reading', 'Not Read'];

class Book {
    constructor(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}

function updatelist(){
    booklist.textContent = "";
    library.forEach((b, i) => {
        let book = document.createElement("div");
        book.classList.add("book");
        book.setAttribute("index", i);
        let ti = document.createElement("span");
        ti.classList.add("title-col");
        ti.textContent = b.title;
        let au = document.createElement("span");
        au.classList.add("author-col");
        au.textContent = b.author;
        let st = document.createElement("span");
        st.classList.add("status-col");
        st.setAttribute("value", choices.indexOf(b.status));
        st.setAttribute("onclick", "changestatus(this);");
        st.textContent = b.status;
        let db = document.createElement("button");
        db.textContent = "delete"
        db.classList.add("delete-button");
        db.setAttribute("onclick", 'removebook('+i+', this);');

        book.appendChild(ti);
        book.appendChild(au);
        book.appendChild(st);
        book.appendChild(db);
        booklist.appendChild(book);
    });
}
function changestatus(s){
    let index = Number(s.parentElement.getAttribute("index"));
    let i = Number(s.getAttribute("value"));
    i = (i+1 === 3)?(0):(i+1);
    library[index].status = choices[i];
    s.setAttribute("value", i);
    s.textContent = choices[i];
}
function removebook(i, t){
    library.splice(i, 1);
    booklist.removeChild(t.parentElement);
    updatelist();
}
// random strings
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
function randstring(length) {
    let result = ' ';
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// at startup
let bookadder = document.querySelector(".book-adder");
let title = document.querySelector("#book-title");
let author = document.querySelector("#book-author");
let readstatus = document.querySelector("#read-status");
let addbookbutton = document.querySelector(".add-book");
let booklist = document.querySelector(".book-list");

addbookbutton.addEventListener("click", (ev) => {
    ev.preventDefault();
    let t = title.value;
    let a = author.value;
    let s = readstatus.value;
    bookadder.close();
    title.value = "";
    author.value = "";
    readstatus.value = "";
    library.push(new Book(t, a, s));

    updatelist();
});

// add random books
/*for(let i = 0; i < 10; i++){
    let t = randstring(10);
    let a = randstring(10);
    let s = choices[Math.floor(Math.random()*3)];
    library.push(new Book(t, a, s));
}*/

updatelist();

let library = [];

function Book(title, author, status){
    this.title = title;
    this.author = author;
    this.status = status;
}

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
    library.push(new Book(t, a, s));

    let book = document.createElement("div");
    book.classList.add("book");
    let ti = document.createElement("span");
    ti.classList.add("title-col");
    ti.textContent = t;
    let au = document.createElement("span");
    au.classList.add("author-col");
    au.textContent = a;
    let st = document.createElement("span");
    st.classList.add("status-col");
    st.textContent = s;
    book.appendChild(ti);
    book.appendChild(au);
    book.appendChild(st);
    booklist.appendChild(book);
    bookadder.close();
    title.value = "";
    author.value = "";
    readstatus.value = "";
});

function bookadder_show(){
    bookadder.showModal();
}

function sortby(t){
    // prompt(this);
}
//ading notes //

showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {

    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {

    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function(element, index) {
        html += `
        <div class="card" style="width: 18rem;">

        <div class="card-body">
            <h3 class="card-title">Note ${index + 1}</h3>
            <p class="card-text">${element}</p>
            <button class="btn btn-primary" id="${index}" onclick="deleteNotes(this.id)">Delete</button>
        </div>
    </div>
             `;
    });

    let notesEle = document.getElementById("notes");
    if (notesObj.length == 0) {
        notesEle.innerHTML = `Nothing to Show! Use "Add a Note" Section to add notes.`
    } else {
        notesEle.innerHTML = html;
    }
}

function deleteNotes(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("search");
search.addEventListener("input", function() {
    let inputVal = search.value;
    let card = document.getElementsByClassName("card");

    Array.from(card).forEach(function(element) {
        let cardTxt = document.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }

    })

})
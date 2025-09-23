//Part 1: Initaliaing Variables
let addNoteCard = document.getElementById("add-note"); //Button to add new note
const notesContainer = document.querySelector(".container");
//Container for all notes
const colors = ["#FFC645", "#5EB1FF", "#45D264", "#C18FFF", "#DA77BA"]; //Array of random background colors for notes

//Part:2 Function to create a delete button for each note
const createDeleteButton = (noteCard) => {
  let deleteButton = document.createElement("button"); //Creating a button element
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'; //Trash icon for button

  //Event listener to delete the note when the button is clicked
  deleteButton.addEventListener("click", (e) => {
    noteCard.remove(); //Remove the note from the DOM
  });
  return deleteButton; //return the delete button to be appended to the note
};
//Part 3: Function to create a new sticky note
const createNoteCard = () => {
  let noteCard = document.createElement("div");
  noteCard.contentEditable = "false";
  noteCard.classList.add("card", "note");
  noteCard.style.background = colors[Math.floor(Math.random() * colors.length)];
  deleteButton = createDeleteButton(noteCard);
  noteCard.appendChild(deleteButton);
  //Part 4: Make the note editable when clicked
  noteCard.addEventListener("click", (e) => {
    deleteButton.classList.add("hide");
    noteCard.contentEditable = "true";
    e.target.focus();
  });

  //Part 5:save the note when the user pressed 'Enter'
  noteCard.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      noteCard.contentEditable = "false";
      deleteButton.classList.remove("hide");
    }
  });
  notesContainer.appendChild(noteCard);
};

//Part 6: add event listener to 'Add note' button to create a new note
addNoteCard.onclick = () => {
  createNoteCard();
};

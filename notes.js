
const addNotes = document.querySelector('.add-note');
const addNotesid = document.getElementById('addNotes');
const tagsOpener = document.querySelector('.tags-opener');
const removeNote = document.querySelector('.remove-note');
const notes = document.querySelector('.notes');
const tagsBox = document.querySelector('.tags-box');
const restNotes = document.querySelector('.rest-notes');
const tagsTag = document.querySelector('.tags-tag');
// const rightbtn = document.getElementById('right-btn')
// const todoContainer = document.querySelector('.todo-container')
const noteContainer = document.querySelector('.note-container')


rightbtn.addEventListener('click' ,() =>{
  container.classList.add('hidden')
  todoContainer.classList.add('hidden')
  noteContainer.classList.remove('hidden')


    })

// date ka system 
const currentDate = new Date();
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];
const currentMonth = months[currentDate.getMonth()];
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();

// date ka system khatam 


const allNotes = []
let currentNote = null; 



function addNote (text = '') {
  const notess = document.createElement('div')
  notess.classList.add('note')


  notess.innerHTML = `
    <div class="inner-note">
      <div class="pin">
        <i class="fa-solid fa-thumbtack " ></i>
      </div>
      <div class="heading">
        <p class="event-date">${currentMonth} ${currentDay}, ${currentYear}</p>
        <input type="text" class="notes-head" placeholder="Heading for your note">
      </div>
      <div class="down-arrow">
        <i class="fa-solid fa-angle-down"></i>
      </div>
      <div class="note-delete hidden">
        <button class="note-delete-button">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
    <div class="notes-text">
    <div class="main ${text ? '' : 'hidden'} "></div>
    <textarea class="notes-textarea ${text ? 'hidden' : ''} "></textarea>

       <!-- <textarea class="notes-textarea "  ></textarea> --> 
    </div>
  `
  
 

  allNotes.push(notess)
  notes.appendChild(notess)

  
  const pin = notess.querySelector('.pin')
  pin.addEventListener('click' , () => {
    if (currentNote) {
      currentNote.querySelector('.pin i').classList.remove('fa-thumbtack--pinned');
    }

    
    notess.querySelector('.pin i').classList.add('fa-thumbtack--pinned');
    notes.prepend(notess);
    const thumbtack = document.querySelector('.fa-thumbtack')

    thumbtack.classList.toggle('redded')
    
    currentNote = notess;
  })

  const deleteBtn = notess.querySelector('.note-delete-button');
  deleteBtn.addEventListener('click', () => {
    notes.removeChild(notess);

   
    const indexToRemove = allNotes.indexOf(notess);
    if (indexToRemove !== -1) {
      allNotes.splice(indexToRemove, 1);
    }

    if (currentNote === notess) {
      currentNote = null;
    }

    
  });

  
}


  const textarea = document.querySelector('.notes-textarea');
addNotesid.addEventListener( 'click' ,  () => {
  addNote()
 
})


function removeNotes() {
  const downArrows = document.querySelectorAll('.down-arrow');
  const noteDeletes = document.querySelectorAll('.note-delete');

  downArrows.forEach((da) => {
    if (da.classList.contains('hidden')) {
      da.classList.remove('hidden');
    } else {
      da.classList.add('hidden');
    }
  });
  
  noteDeletes.forEach((nd) => {
    if (nd.classList.contains('hidden')) {
      nd.classList.remove('hidden');
    } else {
      nd.classList.add('hidden');
    }
  });
 
}

removeNote.addEventListener('click' , () => {
  removeNotes()

})

// tags shuru

const faTag = document.querySelector('.fa-tag')
tagsOpener.addEventListener('click' , () =>{
  tagsBox.classList.toggle('hidden')
})

const searchTag = document.querySelector('.search-tag')
const faPlus = document.querySelector('.fa-plus')

restNotes.addEventListener('click' , (event) =>{
if(event.target.classList.contains('fa-plus')){


  console.log('ander')
  let searchValue = searchTag.value

  const tagss = document.createElement('div')
  tagss.classList.add('inner-tag')

  tagss.innerHTML =`
  <p class = "tagword" > ${searchValue} </p>
  <span>
    <i class="fa-regular fa-circle-xmark"></i>
  </span>
  `

  tagsTag.appendChild(tagss)

  searchTag.value = '';


  const cross = tagss.querySelector('.fa-circle-xmark')
cross.addEventListener('click' , () =>{
  tagsTag.removeChild(tagss)
})


}
}) 



restNotes.addEventListener('click', (event) => {
  if (event.target.classList.contains('tagword')) {
    const tagword = event.target.textContent;
    console.log('Clicked tag:', tagword);
    
    allNotes.forEach((anote) => {
      const noteTextarea = anote.querySelector('.notes-textarea');
      const noteText = noteTextarea.innerText;
      console.log(noteText)
      if (tagword.includes(noteText)) {
  
          console.log('Tag found in note:', tagword);
  
          const highlightedText = noteText.replace(
              new RegExp(tagword, 'g'),
              `<span class="highlight">${tagword}$&</span>`
              );
              console.log('Highlighted Text:', highlightedText);
         
              noteText.textContent = highlightedText;

            }
          });
        }
      });


 
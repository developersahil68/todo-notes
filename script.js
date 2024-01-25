
const leftbtn = document.getElementById('left-btn')
const rightbtn = document.getElementById('right-btn')
const todoContainer = document.querySelector('.todo-container')
const container = document.querySelector('.container')
const todoBtn = document.querySelector('.todobtn')
const todos = document.querySelector('.todos')

const important = document.querySelector('.important')
const completed = document.querySelector('.completed')
const rightList = document.querySelector('.right-list')
const all = document.querySelector('.all')
const body = document.querySelector('body')
const completedBox = document.querySelector('.completedBox')
const leftList = document.querySelector('.left-list')
const unique = document.querySelectorAll('.unique')
const skeleton = document.querySelectorAll('.skeleton')
const threeDot = document.querySelector('.fa-ellipsis-vertical')

// front page se doosre pages par switch karne ka code

leftbtn.addEventListener('click' ,() =>{
  container.classList.add('hidden')
  todoContainer.classList.remove('hidden')


  
unique.forEach((uni) =>{
  uni.style.display = 'none'
  })
rightList.style.opacity = 0
  setTimeout(() =>{
skeleton.forEach((ske) =>{
  ske.style.display = 'none'
})
unique.forEach((uni) =>{
  uni.style.display = 'block'
  })
  rightList.style.opacity = 1
  }, 2000)
    })



function createPopup1(){
  const peep1 = document.createElement('p')
  peep1.classList.add('popup')

  peep1.innerText = `todo created`
  peep1.style.color = 'green'
  rightList.appendChild(peep1)

  setTimeout(() =>{
    rightList.removeChild(peep1)
  }, 3000)
}


function createPopup2(){
  const peep2 = document.createElement('p')
  peep2.classList.add('popup')

  peep2.innerText = `Marked important`
  peep2.style.color = 'yellow'
  peep2.style.backgroundColor = 'black'
  rightList.appendChild(peep2)
  setTimeout(() =>{
    rightList.removeChild(peep2)
  }, 3000)
}


function createPopup3(){
  const peep3 = document.createElement('p')
  peep3.classList.add('popup')

  peep3.innerText = `Marked completed`
  peep3.style.color = 'green'
  rightList.appendChild(peep3)

  setTimeout(() =>{
    rightList.removeChild(peep3)
  }, 3000)
}


function createPopup4(){
  const peep4 = document.createElement('p')
  peep4.classList.add('popup')

  peep4.innerText = `Deleted`
  peep4.style.color = 'red'
  rightList.appendChild(peep4)

  setTimeout(() =>{
    rightList.removeChild(peep4)
  }, 3000)
}


// todo ka saara scene 



const importantTodos = []
const checkedTodos = []
const allTodos = []







function createModalElement(todo) {
  const inner = document.createElement('div');
  inner.classList.add('modal-window');
  inner.innerHTML = `
    <button class="fas removeoverlay fa-times"></button>
    <h2>Write Todos</h2>
    <input type="text" class="modaltodotext" id="modaltodotext">
    <div class="modal-color">
        <label for="modalcolorinput">Color</label>
        <input type="color"  id="modalcolorinput">
    </div>
    <div class="modal-time">
        <label for="modaltimeinput">Time</label>
        <input type="date" id="modaltimeinput">
    </div>
    <button class="modal-submit modal-create" >Create</button>
  `;
  const overlay = document.createElement('div')
  overlay.classList.add('overlay')
 
  
  inner.style.zIndex = 23000
  overlay.style.zIndex = 100

  todoContainer.appendChild(overlay)
  todoContainer.appendChild(inner);
  inner.querySelector('.removeoverlay').addEventListener('click', () => {
    todoContainer.removeChild(overlay)
    todoContainer.removeChild(inner);
  });

  inner.querySelector('.modal-create').addEventListener('click', () => {
   
    todo.querySelector('.para').innerText = inner.querySelector('.modaltodotext').value;
    // todo.querySelector('.para').style.color = inner.querySelector('#modalcolorinput').value;
    todo.querySelector('.time').innerText = inner.querySelector('#modaltimeinput').value;
    // inner.style.zIndex = 15000
   
    todoContainer.removeChild(inner);
    todoContainer.removeChild(overlay)

  });
}



// function mainSection
function mainSection(){
  
 
  setTimeout(() =>{
  const modaltodotext = document.getElementById("modaltodotext");
  const modalcolorinput = document.getElementById("modalcolorinput");
  const modaltimeinput = document.getElementById("modaltimeinput");


  modaltodotext.addEventListener("input", function () {
    let inputValue = modaltodotext.value;

  
  });
  }, 52)

    const inner = document.createElement('div')
    inner.classList.add('modal-window')
    inner.innerHTML = `
      <button class="fas removeoverlay fa-times"></button>
    <h2>Write Todos</h2>
    <input type="text" class="modaltodotext" id="modaltodotext">
    <div class="modal-color">
        <label for="modalcolorinput">Color</label>
        <input type="color"  id="modalcolorinput">
    </div>
    <div class="modal-time">
        <label for="modaltimeinput">Time</label>
        <input type="date" id="modaltimeinput">
    </div>
    <button class="modal-submit" >Create</button>
     
    `;

   
    
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
   
    todoContainer.appendChild(inner)
    todoContainer.appendChild(overlay)

    const removeoverlay = document.querySelector('.removeoverlay')
    removeoverlay.addEventListener('click' ,( ) =>{
      todoContainer.removeChild(inner)
      todoContainer.removeChild(overlay)
    })

   
    const modalSubmit = document.querySelector('.modal-submit')

   
    function modalfunc() {
      const todoos = document.createElement('div')
      todoos.classList.add('todo')

      todoos.innerHTML = `
        <input type="checkbox" class="completedBox" id=""completed>
      <div class="todo-info">
          <p class = "para" style="color: ${modalcolorinput.value};" > ${modaltodotext.value} </p>
          <span class="time">${modaltimeinput.value}</span>
      </div>
        <i class="fas fa-star "></i>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      `;

     todoContainer.removeChild(inner);
     todoContainer.removeChild(overlay);

    todos.appendChild(todoos)


// three dots ki bachodi shuru


document.querySelectorAll('.fa-ellipsis-vertical').forEach(threedo => {
  threedo.addEventListener('click', () => {
   
    const todo = threedo.closest('.todo');
   
    const modalElement = createModalElement(todo);
// console.log(modalElement)
// console.log(inner)
   todoContainer.appendChild(modalElement)

    // Set the data in the modal element to the data of the todo
    modalElement.querySelector('.modaltodotext').value = todo.querySelector('.para').innerText;
    modalElement.querySelector('#modalcolorinput').value = todo.querySelector('.para').style.color;
    modalElement.querySelector('#modaltimeinput').value = todo.querySelector('.time').innerText;
  });
});



// three dots ki bachodi khatam 

    if(todoos.classList.contains('clicked')){

      importantTodos.push(todoos)

    }
    
    allTodos.push(todoos)
    // console.log(localStorage.setItem("allTodos" , JSON.stringify(allTodos)))
 
    showTexts()
    createPopup1()
  }

    
    modalSubmit.addEventListener('click' , modalfunc );
      
    }

 


    // calling main function on the todoBtn
 todoBtn.addEventListener('click' , mainSection)
   


    function impfunc()  {
      rightList.innerHTML = ''
      
   // adding the guide text
      const existingHomepagetext = document.querySelector('.dummytext');

      if (allTodos.length === 0) {
        // If there are no todos, create and add the text
        if (!existingHomepagetext) {
          const homepagetext = document.createElement('p');
          homepagetext.classList.add('dummytext');
          homepagetext.innerText =
          "You're on the 'Important' section, but it looks like you haven't added any important tasks yet. To mark a task as important, simply click the star icon next to it on your main todo list.";
          rightList.appendChild(homepagetext);
        }
      } else {
        // If there are todos, remove the text if it exists
        if (existingHomepagetext) {
          rightList.removeChild(existingHomepagetext);
        }
      }


    const imp = document.createElement('div')
    imp.classList.add('dinamicimp')
    imp.innerHTML = `
    <h1 class="maintodohead" > Important Todos </h1>
    `
    rightList.appendChild(imp)

  
  
    importantTodos.forEach((todo) =>{

    const htmlagain = document.createElement('div')
    htmlagain.classList.add('todos')



    rightList.appendChild(htmlagain)
    htmlagain.appendChild(todo);
})
}

important.addEventListener('click' ,impfunc)



// star ko chamka diya hai

function highlightstar()  {
  todos.addEventListener("click", (event) => {
    const star = event.target.closest(".fa-star");
    if (star) {
      const todo = star.closest(".todo");
      if (todo) {
        star.classList.toggle("clicked");
        createPopup2()
        if (star.classList.contains("clicked")) {
          importantTodos.push(todo);
        } else {
          const index = importantTodos.indexOf(todo);
          if (index !== -1) {
            importantTodos.splice(index, 1);
          }
        }
      }
    }
  });
}



function chekingbox() {
  todos.addEventListener("click", (event) => {
    const checkbox = event.target.closest(".completedBox");
    if (checkbox) {
      const todo = checkbox.closest(".todo");
      if (todo) {
        if(checkbox.checked){
          checkedTodos.push(todo)
         todo.remove()
         createPopup3()
        } else {
          const index = checkedTodos.indexOf(todo);
          if (index !== -1) {
            checkedTodos.splice(index, 1);
          }
        }
      }
    }
});
}


setTimeout(highlightstar , 500)
setTimeout(chekingbox , 500)


function comfunc() {
  rightList.innerHTML = "";
  
// adding the guide function
  const existingHomepagetext = document.querySelector('.dummytext');

  if (allTodos.length === 0) {
    // If there are no todos, create and add the text
    if (!existingHomepagetext) {
      const homepagetext = document.createElement('p');
      homepagetext.classList.add('dummytext');
      homepagetext.innerText =
      "You're on the 'Completed' section, but it looks like you haven't completed any tasks yet. To mark a task as completed, simply check the checkbox next to it on your main todo list.";
      rightList.appendChild(homepagetext);
    }
  } else {
    // If there are todos, remove the text if it exists
    if (existingHomepagetext) {
      rightList.removeChild(existingHomepagetext);
    }
  }


  const com = document.createElement("h1");
  com.classList.add("maintodohead");
  
  com.innerText = `Completed  Todos`;
  
  
  
  checkedTodos.forEach((todo) =>{
  
    const htmlagain = document.createElement('div')
    htmlagain.classList.add('todos')
    rightList.appendChild(htmlagain)
    htmlagain.appendChild(todo);
  
    todo.addEventListener('click' , (event) =>{
      if(event.button === 0){
        todo.innerHTML = ''
        createPopup4()
      }
    })
  })

   const foot = document.createElement('p')
   foot.classList.add('direction')

   foot.innerText = 'Left click to delete todos'

   rightList.appendChild(foot)

  rightList.appendChild(com);
  
  }


completed.addEventListener('click' ,comfunc)




all.addEventListener('click', () => {
  rightList.innerHTML = "";
 showTexts()
  const doom = document.createElement("h1");
  doom.classList.add("maintodohead");
  
  doom.innerText = `All  Todos`;

  rightList.appendChild(doom)


  allTodos.forEach((todo) => {
    const htmlagain = document.createElement('div');
    htmlagain.classList.add('todos');
    rightList.appendChild(htmlagain);
    htmlagain.appendChild(todo);
  });
  
  const butt = document.createElement('button')
  butt.classList.add('todobtn')

butt.innerHTML = `
<i class="fa-solid fa-plus"></i>
<span>Add a Task</span>
`

  rightList.appendChild(butt)
butt.addEventListener('click' , mainSection)

// modalSubmit.addEventListener('click' , modalfunc );
allTodos.forEach((todo) =>{

  todo.addEventListener("click", (event) => {
    const star = event.target.closest(".fa-star");
    if (star) {
      const todo = star.closest(".todo");
      if (todo) {
        star.classList.toggle("clicked");
        createPopup2()
        if (star.classList.contains("clicked")) {
          importantTodos.push(todo);
        } else {
          const index = importantTodos.indexOf(todo);
          if (index !== -1) {
            importantTodos.splice(index, 1);
          }
        }
      }
    }
    //  checking ke liye check karne ka function
      const checkbox = event.target.closest(".completedBox");
      if (checkbox) {
        const todo = checkbox.closest(".todo");
        if (todo) {
          if(checkbox.checked){
            checkedTodos.push(todo)
           todo.remove()
           createPopup3()
          } else {
            const index = checkedTodos.indexOf(todo);
            if (index !== -1) {
              checkedTodos.splice(index, 1);
            }
          }
        }
      }
     
  });
})


document.querySelectorAll('.fa-ellipsis-vertical').forEach(threedo => {
  threedo.addEventListener('click', () => {
   
    const todo = threedo.closest('.todo');
   
    const modalElement = createModalElement(todo);
// console.log(modalElement)
// console.log(inner)
   todoContainer.appendChild(modalElement)

    // Set the data in the modal element to the data of the todo
    modalElement.querySelector('.modaltodotext').value = todo.querySelector('.para').innerText;
    modalElement.querySelector('#modalcolorinput').value = todo.querySelector('.para').style.color;
    modalElement.querySelector('#modaltimeinput').value = todo.querySelector('.time').innerText;
  });
});



});


function showTexts() {
  const existingHomepagetext = document.querySelector('.dummytext');

  if (allTodos.length === 0) {
    // If there are no todos, create and add the text
    if (!existingHomepagetext) {
      const homepagetext = document.createElement('p');
      homepagetext.classList.add('dummytext');
      homepagetext.innerText =
        "Welcome to your todo list! It looks like you haven't added any tasks yet. To get started, simply click the 'Add Task' button to create your first todo.";
      rightList.appendChild(homepagetext);
    }
  } else {
    // If there are todos, remove the text if it exists
    if (existingHomepagetext) {
      rightList.removeChild(existingHomepagetext);
    }
  }
}

showTexts();

const validationInput =  ()=>{
    if(document.querySelector('#newTask input').value.length===0){
        alert("Enter a task!");
    }
    else{
        document.querySelector("#tasks").innerHTML+=`
        <div class ="task">
        <span class="taskName">
    ${document.querySelector('#newTask input').value}
        </span>
        <button class = "removeItem">
      <i class="fa-solid fa-trash"></i>
        </button>
        </div>
        `;
      const btnRemove = document.querySelectorAll('.removeItem');
      btnRemove.forEach(x=>{
        x.onclick = function(){
            this.parentNode.remove();
        }
      })
      const curr_tasks = document.querySelectorAll('.taskName');
      curr_tasks.forEach(x=>{
        x.onclick = function(){
            this.classList.toggle('completed');
        }
      })
      document.querySelector('#newTask input').value = ""
    }
}
document.querySelector('#addNewTaskButton').onclick = validationInput;

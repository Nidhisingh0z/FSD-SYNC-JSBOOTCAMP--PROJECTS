const inp = document.querySelector('input')
const btn = document.querySelector('.addBtn')
const mainContainer = document.querySelector(".mainContainer")
const form = document.querySelector("form")

let todos = []

form.addEventListener('submit',function(event){
    event.preventDefault()
    let todo = {
        name : inp.value
    }

    todos.push(todo)
    displayTodo()

    form.reset()
})


function displayTodo(){
    mainContainer.innerHTML = ""
    todos.forEach((todo,index) => {
       const mainDiv = document.createElement("div")
       mainDiv.classList.add("smallCard")

       const para = document.createElement("p")
       para.textContent = todo.name

       const deleteBtn = document.createElement("button")
       deleteBtn.textContent = "Delete"
       deleteBtn.classList.add("deleteTodo")

       mainDiv.append(para,deleteBtn)

       mainContainer.appendChild(mainDiv)

       deleteBtn.addEventListener('click',function(){
        deleteTodo(index)
       })


    })
}

function deleteTodo(index){
    todos.splice(index,1)
    displayTodo()
}
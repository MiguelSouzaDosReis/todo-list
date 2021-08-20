let botao = document.getElementById("criar-tarefa")
let input = document.getElementById("texto-tarefa")
let ol = document.getElementById("lista-tarefas")


function createAddTaskEvent() {
    botao.addEventListener('click', function () {

        let li = document.createElement('li')
        ol.appendChild(li)
        li.innerText = input.value
        li.addEventListener('click', function (event) {
            let selected = document.querySelector('.selected')
            if(selected === null){
                event.target.classList.add('selected')
            } else {
                selected.classList.remove('selected')
                event.target.classList.add('selected')
            } 
        })
            input.value = ""
            li.addEventListener('dblclick', function (event) {
                
                if(event.target.classList.contains('completed')!==true){
                    li.classList.add('completed')
                   
                } 
                else{
                    event.target.classList.remove('completed')
                    
                }
                    
                
            }) 
                
            
    })
}

 
      
createAddTaskEvent()
 

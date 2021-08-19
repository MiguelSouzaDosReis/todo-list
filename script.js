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
            
            
            /* selected.classList.remove('selected') */
            

        })


            input.value = ""
    })
}

// requisito 9 que tentei mas não consegui
//eu vi esse video para fazer essa função https://www.youtube.com/watch?v=tr1yzveiArs
/*      function Input() {
        intput.addEventListener('dblclick', function () {
            input.value.classList.add('completed ')
        })
    } 

Input() */




createAddTaskEvent()


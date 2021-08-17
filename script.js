let botao = document.getElementById("criar-tarefa")
let input = document.getElementById("texto-tarefa")
let ol = document.getElementById("lista-tarefas")

function Botao() {
    botao.addEventListener('click', function () {
        for (let i = 0; i  < 1; i ++) {
        let li = document.createElement('li')
        ol.appendChild(li)
        li.innerText = input.value
        li.classList.add('cor');
               
    }
       input.value = ""
    })
}
 
 //eu vi esse video para fazer essa função https://www.youtube.com/watch?v=tr1yzveiArs
/*      function Input() {
        intput.addEventListener('dblclick', function () {
            input.value.classList.add('completed ')
        })
    } 

Input() */ 
Botao()


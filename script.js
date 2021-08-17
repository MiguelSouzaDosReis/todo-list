let botao = document.getElementById("criar-tarefa")
let input = document.getElementById("texto-tarefa")
let ol = document.getElementById("lista-tarefas")

function Botao() {
    botao.addEventListener('click', function () {
        for (let i = 0; i  < 1; i ++) {
        let li = document.createElement('li')
        ol.appendChild(li)
        li.innerText = input.value
               
    }
       input.value = ""

    })
}

Botao()

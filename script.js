let botao = document.getElementById("criar-tarefa");
let input = document.getElementById("texto-tarefa");
let ol = document.getElementById("lista-tarefas");
let removerSelecionado = document.getElementById("remover-selecionado");
let apagaTudo = document.getElementById("apaga-tudo");
let removeFinalizados = document.getElementById("remover-finalizados");


function createAddTaskEvent() {
  botao.addEventListener("click", function () {
    let li = document.createElement("li");
    ol.appendChild(li);
    li.innerText = input.value;
    li.addEventListener("click", function (event) {
        let selected = document.querySelector(".selected");
        if (selected === null) {
        event.target.classList.add("selected");
      } else {
        selected.classList.remove("selected");
        event.target.classList.add("selected");
      }
    });
    input.value = "";
    li.addEventListener("dblclick", function (event) {
      if (event.target.classList.contains("completed") !== true) {
        li.classList.add("completed");
      } else {
        event.target.classList.remove("completed");
      }
    });
  });
}



removerSelecionado.addEventListener("click", function() {
  let selected = document.querySelector(".selected");
  if (selected !== null) {
    selected.remove();
  }
});



apagaTudo.addEventListener("click", function() {
  let lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";
});


removeFinalizados.addEventListener("click", function() {
  let lista = document.getElementById("lista-tarefas");
  let itens = lista.children;
  for (let i = itens.length - 1; i >= 0; i--) {
    if (itens[i].classList.contains("completed")) {
      lista.removeChild(itens[i]);
    }
  }
});

const btnMoverCima = document.getElementById('mover-cima');
const btnMoverBaixo = document.getElementById('mover-baixo');


function moverItemCima() {
  const itemSelecionado = document.querySelector('.selected');

  if (itemSelecionado && itemSelecionado.previousElementSibling) {
    itemSelecionado.parentNode.insertBefore(itemSelecionado, itemSelecionado.previousElementSibling);
  }
}

function moverItemBaixo() {
  const itemSelecionado = document.querySelector('.selected');

  if (itemSelecionado && itemSelecionado.nextElementSibling) {
    itemSelecionado.parentNode.insertBefore(itemSelecionado.nextElementSibling, itemSelecionado);
  }
}


btnMoverCima.addEventListener('click', moverItemCima);
btnMoverBaixo.addEventListener('click', moverItemBaixo);


createAddTaskEvent();

const button = document.querySelector('.button-add-afazeres');
const input = document.querySelector('.input-afazeres')
const listaCompleta = document.querySelector(".lista-afazeres")



let meusAfazeres = []

function adicionarTarefa(){
    meusAfazeres.push({
        tarefa: input.value,
        concluida: false
    })

input.value = ''

    mostrarTarefas()
    
}

function mostrarTarefas(){

   let novaTarefa = ''
meusAfazeres.forEach((item, posiçao) => {
    
    novaTarefa = novaTarefa + `<li class="afazeres ${item.concluida && "done"}" >
    <img class="check" src="./img/check.png" alt="check-tarefa" onclick='concluirItem(${posiçao})'/>
    <p>${item.tarefa}</p>
    <img class="excluir" src="./img/excluir.png" alt="excluir-tarefa" onclick='deletarItem(${posiçao})'/>
  </li>`
})

listaCompleta.innerHTML = novaTarefa

localStorage.setItem('lista', JSON.stringify (meusAfazeres))
}  

function concluirItem(posiçao){
    meusAfazeres[posiçao].concluida = !meusAfazeres[posiçao].concluida 

    mostrarTarefas()
}

function deletarItem(posiçao){
    meusAfazeres.splice(posiçao, 1)
    
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasLocalStorage = localStorage.getItem('lista')

    if(tarefasLocalStorage){
    meusAfazeres = JSON.parse(tarefasLocalStorage)
    }
    mostrarTarefas()
}

recarregarTarefas()

button.addEventListener('click', adicionarTarefa)


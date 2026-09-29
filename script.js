function adicionar(e) {
    const ul = document.querySelector('ul') //Pega o elemento ul
    const input = document.querySelector('#inserir') //Pega o input no html
    const newLi = document.createElement('li') // Cria um li
    const btn = document.createElement('button') //Cria um button
    const img = document.createElement('img')
    img.setAttribute
    newLi.innerText = input.value // Adiciona o valor do input no li criado
    btn.setAttribute('class', 'remover') //adiciona o atributo class no button criado
    btn.innerText = 'Remover' // Adiona o texto do button

    if(e.key === 'Enter'){  //Verificação do acionamento da tecla enter
        newLi.appendChild(btn) //Adiciona como filho o botão no Li
        ul.appendChild(newLi) //Adiciona como filho o li criado dentro do ul
        input.value = '' // Após as ações apaga o valor digitado no input
        btn.addEventListener('click', remove) //adicona o evento de click no butao criado
    }
}

function remove(e){
    e.target.parentElement.remove() //verifica a ação do evento
    //target: verifca o acionamento
    //parentElement:  acessa o elemento pai
    //remove(): remove todo o elemento pai o que inclui seus filho
}

document.addEventListener('keyup', adicionar) //Acionamento da tecla no documento

// Validações

document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("sabor");
    const formAdd = document.querySelector("#formAdd");

         // Inputs tem que ter mais de 3 letras
            function caracteresMinimos(x){return x.value.length > 3;}
    
        // Reseta campos com espaçamento
            function camposEspacados(x){return x.value.trim();}

        // Não pode ter numeros
        function camposNumeros(x) {return /\d/.test(x.value);}


    formAdd.addEventListener('submit', function(event) {
       
        camposEspacados(inputField)
        if (!caracteresMinimos(inputField)) {
            event.preventDefault();
            alert('O sabor tem que ter mais de 3 letras');
        }
        else if(camposNumeros(inputField)){
            event.preventDefault();
            alert('O sabor não pode possuir numeros')
        }  
    });

    // Função para criar o elemento HTML
    function createItem(nome) {
        // Seleciona o elemento onde os itens serão alocados
        let container = document.querySelector('#itens-alocados');
    
        // Cria o elemento principal div
        let divPrincipal = document.createElement('div');
        divPrincipal.className = 'itens my-1 d-flex align-items-center justify-content-between px-3';
    
        // Cria o elemento h2 para o nome do item
        let h2 = document.createElement('h2');
        h2.textContent = nome;
        divPrincipal.appendChild(h2);
    
        // Cria o segundo div para os botões de configuração e remoção
        let divSecundario = document.createElement('div');
    
        // Cria o botão de configuração
        let botaoConfig = document.createElement('button');
        botaoConfig.className = 'bto config';
        botaoConfig.name = 'config';
        botaoConfig.type = 'submit';
        let iconeConfig = document.createElement('i');
        iconeConfig.className = 'icons fa fa-cog';
        botaoConfig.appendChild(iconeConfig);
    
        // Cria o botão de remover
        let botaoRemove = document.createElement('button');
        botaoRemove.className = 'bto remove';
        botaoRemove.name = 'remove';
        botaoRemove.type = 'submit';
        let iconeRemove = document.createElement('i');
        iconeRemove.className = 'icons fa-solid fa-trash';
        botaoRemove.appendChild(iconeRemove);
    
        // Adiciona os botões ao segundo div
        divSecundario.appendChild(botaoConfig);
        divSecundario.appendChild(botaoRemove);
    
        // Adiciona o segundo div ao div principal
        divPrincipal.appendChild(divSecundario);
    
        // Adiciona o div principal ao container
        container.appendChild(divPrincipal);
    }
    
    //Gerar itens do crud na tela

    function geracaoDeItens(){
        console.log(dadosPhp)
        dadosPhp.map((x, index)=>{
            for(i=0; i<dadosPhp.length; i++){
                if(i === index){createItem(x.sabor)}
            }
        })
    }
    
    geracaoDeItens()
});



         
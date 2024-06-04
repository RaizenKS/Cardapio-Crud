document.addEventListener("DOMContentLoaded", function(){

    // Variaveis
    const btnRemove = document.querySelectorAll(".remove");
    const formItens = document.querySelector("#itens-alocados");

    // Adicionando o ouvinte de evento de clique fora do ouvinte de evento de envio de formulário
    btnRemove.forEach(butao => {
        butao.addEventListener("click", () => {
            const resposta = confirm("Você tem certeza que quer deletar?");
            
            if(resposta === false){return}
            else{
                const parentItem = butao.closest(".itens");
                const h2Parent = parentItem.querySelector("h2").textContent;
               
                let inputHidden= document.createElement('input')
                inputHidden.className = "inputRemove hidden";
                inputHidden.type = "text";
                inputHidden.name = "removeSabor";
                parentItem.appendChild(inputHidden);

                const hiddenInput = document.querySelector(".inputRemove");
                hiddenInput.value = h2Parent; 
                
                formItens.submit();
                alert("Sabor deletado com sucesso!")
            }
            
        });
    });

    // Ouvinte de evento de envio de formulário
    formItens.addEventListener("submit", function(event){
        event.preventDefault();
    });

});

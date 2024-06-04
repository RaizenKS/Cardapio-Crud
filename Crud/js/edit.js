document.addEventListener("DOMContentLoaded", function(){

// variaveis

const boxEdit = document.querySelector("#box-edit");
const labelEdit= document.querySelector("#label-edit");
const closeEdit = document.querySelector("#close-edit");
const formEdit = document.querySelector("#form-edit");
const btnEdit = document.querySelectorAll(".config");
const saborEdit = document.querySelector("#edit-sabor");
const oldSabor = this.documentElement.querySelector("#old-sabor");

// Funções de validação

// Inputs tem que ter mais de 3 letras
function caracteresMinimos(x){return x.value.length > 3;}
    
// Reseta campos com espaçamento
    function camposEspacados(x){return x.value.trim();}

// Não pode ter numeros
function camposNumeros(x) {return /\d/.test(x.value);}


    // Abrir caixa de edição
    btnEdit.forEach((bot)=>{
        bot.addEventListener("click", function(){
            const parentItem = this.closest('.itens');
            const h2Parent = parentItem.querySelector("h2").textContent;
            labelEdit.innerHTML = `Mudar sabor de <br> ${h2Parent} para`;
            boxEdit.classList.remove("hidden");

                       // Confirmar edição
    formEdit.addEventListener("submit", function(evento){
    evento.preventDefault();
    camposEspacados(saborEdit)
    if (!caracteresMinimos(saborEdit)) {
        alert('O sabor tem que ter mais de 3 letras');
    } else if (camposNumeros(saborEdit)) {
        alert('O sabor não pode possuir numeros')
    } else {
        const certeza = confirm("tem certeza?");
        if (certeza === false) {
            evento.preventDefault();
        } else {
            oldSabor.value = h2Parent;
            this.submit();
            alert("Atualizado com sucesso!")
        }
    }
});    
        })
    })

    // Fechar caixa de edição
    closeEdit.addEventListener("click", function(){
        boxEdit.classList.add("hidden")
    })
    
      
      
})



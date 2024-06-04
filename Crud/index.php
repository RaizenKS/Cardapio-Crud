<?php
include_once("connection/consulta.php");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- css -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="css/cores.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

        <!-- scripts -->
        <script>
            let dadosPhp = <?php echo json_encode($array); ?>;
        </script>

        <script src="js/script.js" defer></script>
        <script src="js/remove.js" defer></script>
        <script src="js/edit.js" defer></script>
        
        
        <title>Crud</title>
    </head>
<body class="bg-main">
   <main class="py-4 d-flex justify-content-center align-items-center flex-column">
    <h1 class="text-center c-black">Cardapio</h1>

    <section class="sect my-3">

        <!-- CAIXA DE EDIÇÃO -->
        <div id="box-edit" class="hidden p-4">
            <form id="form-edit" action="connection/update.php" method="post">
        <div class="inp-edit d-flex flex-column">
                <i id="close-edit" class="fa-solid fa-x"></i>
                <label id="label-edit" for="edit-sabor" class="c-white text-center my-2">Mudar sabor</label>
                <input id="old-sabor" class='hidden' type="text" name="sabor-old">
                <input id="edit-sabor" type="text" name="sabor-update" placeholder = "Qual sabor">
                <button class="mt-2" id="edit" type="submit">Alterar</button>   
        </div>
            </form>
        </div>

        <!-- PESQUISA POR DADOS -->
        <form action="connection/processamento.php" method="get">
        <input class="bg-mainDark mb-5" id="search" type="text" name="searchItem" placeholder="Procurar">
        </form>

        <!--  SABORES CADASTRADOS  -->
        <form id="itens-alocados" action="connection/remove.php" method="post">
        
        </form>

        <!-- FORMULARIO PARA ADICIONAR UM SABOR -->
        <form id="formAdd" action="connection/processamento.php" method="post">

            </div>
        <div class="my-3 d-flex flex-column align-items-center justify-content-center">
            <input class="my-2 rounded px-2" id="sabor" type="text" placeholder="Sabor" name="sabor">
            <button id="add" name="add" type="submit"><i class="fa fa-plus">Adicionar</i></button>
        </div>

        </form>

    </section>

   </main>    

   
</body>
</html>
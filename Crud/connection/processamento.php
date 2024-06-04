<?php
date_default_timezone_set('America/Sao_Paulo');
include_once("connection.php");

$sabor = $_POST['sabor'];
$data = date('Y-m-d H:i:s');

$queryPost = ("INSERT INTO sabores (sabor,lancamento) VALUES (:sabor,:lancamento)");

$stmt = $conn->prepare("$queryPost");

$stmt->bindParam("sabor", $sabor);
$stmt->bindParam("lancamento",$data);
$stmt->execute();

header("Location: http://localhost/crud/");
exit();
?>


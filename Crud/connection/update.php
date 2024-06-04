<?php
include_once("connection.php");

// Variaveis
$saborOld = $_POST['sabor-old'];
$saborUpdate = $_POST['sabor-update'];

// Update

$queryUpdate = ("UPDATE sabores SET sabor = :sabor WHERE sabor = :saborOld");
$stmt = $conn->prepare("$queryUpdate");
$stmt->bindParam(":sabor", $saborUpdate);
$stmt->bindParam(":saborOld", $saborOld);
$stmt->execute();

header("Location: http://localhost/crud/");
exit();
?>
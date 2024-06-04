<?php

include_once("connection.php");

// Select
$querySelect = ("SELECT * FROM sabores ORDER BY lancamento");
$stmt = $conn->prepare("$querySelect");
$stmt->execute();
$array = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
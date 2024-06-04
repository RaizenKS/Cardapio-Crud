<?php

include_once("connection.php");

$removeSabor = $_POST['removeSabor'];

// Delete


 $queryDelete = ("DELETE FROM sabores WHERE sabor = :removeSabor");
 $stmt = $conn->prepare("$queryDelete");
 $stmt->bindParam(":removeSabor", $removeSabor);
 $stmt->execute();
 
 header("Location: http://localhost/crud/");
 exit();

?>
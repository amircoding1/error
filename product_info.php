<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "klamotten_db";

// Verbindung herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Verbindung überprüfen
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Produkte abrufen
$sql = "SELECT * FROM produkte";
$result = $conn->query($sql);

$products = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

// Daten als JSON ausgeben (kann in deinem JavaScript verwendet werden)
echo json_encode($products);

$conn->close();
?>

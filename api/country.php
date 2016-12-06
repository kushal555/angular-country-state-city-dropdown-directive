<?php
include 'connection.php';

$country = [];
if ($result = $mysqli->query("SELECT * FROM countries")) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $country[] = $row;
    }
    echo json_encode($country);
}

$result->close();
$mysqli->close();

?>
<?php
include_once 'connection.php';

$country_id = $_GET['country_id'];
$states = [];
if($country_id){
if ($result = $mysqli->query("SELECT * FROM states WHERE country_id = $country_id")) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $states[] = $row;
    }
    echo json_encode($states);
}


}else{
	echo json_encode($states);
}

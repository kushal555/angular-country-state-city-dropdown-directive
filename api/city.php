<?php
include_once 'connection.php';

$state_id = $_GET['state_id'];
$cities = [];
if($state_id){
if ($result = $mysqli->query("SELECT * FROM cities WHERE state_id = $state_id")) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $cities[] = $row;
    }
    echo json_encode($cities);
}


}else{
	echo json_encode($cities);
}

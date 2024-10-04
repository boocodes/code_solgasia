<?php
include_once "../../config/database.php";
include_once "../../config/search_field_sugguest.php";
header('Content-Type: text/html; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8; multipart/form-data");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$database = new DataBase();
$db_connection = $database->set_connection();

$search_field_sugguest = new searchFieldSugguest();
$search_field_sugguest->set_connection($db_connection);

$data = json_decode(file_get_contents('php://input'), true);

if(!empty($data['search_text']))
{
    // 
    return;
}
else{
    $result = $search_field_sugguest->get_sugguest_by_empty_search();
    if($result)
    {
        echo json_encode(array("message"=>$result, "status" => true), JSON_UNESCAPED_UNICODE);
    }
    
}

exit();


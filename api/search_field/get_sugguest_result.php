<?php
include_once "../../config/database.php";
include_once "../../config/search_field_sugguest.php";
header('Content-Type: text/html; charset=utf-8');


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
        echo json_encode(array("message"=>$result));
        http_response_code(200);
        return;
    }
    
}


<?php
include_once "../../config/database.php";
include_once "../../config/tables.php";

header('Content-Type: text/html; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8; multipart/form-data");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$database = new DataBase();
$db_connection = $database->set_connection();
$data = json_decode(file_get_contents('php://input'), true);
$tables = new Tables();
$tables->set_connection($db_connection);

if(!empty($data["user_access_rights"]))
{
    
    $result = $tables->get_tables_data($data["user_access_rights"]);
    if(!empty($result))
    {           
        echo json_encode(array("message"=>$result, "status"=>true), JSON_UNESCAPED_UNICODE);
        http_response_code(200);
    }
    else
    {
        echo json_encode(array("message"=>"Данные не найдены", "status"=>false), JSON_UNESCAPED_UNICODE);
        http_response_code(400);
    }
}
else
{
    echo json_encode(array("message"=>"Ошибка, введите данные", "status"=>false), JSON_UNESCAPED_UNICODE);
    http_response_code(400);
}
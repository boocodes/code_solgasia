<?php
include_once "../../config/database.php";
include_once "../../config/access_requests.php";

header('Content-Type: text/html; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8; multipart/form-data");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$database = new DataBase();
$db_connection = $database->set_connection();
$data = json_decode(file_get_contents('php://input'), true);
$access_request = new AccessRequests();
$access_request->set_connection($db_connection);

if(!empty($data["login"]) && !empty($data["password"]) && !empty($data["firstname"]) && !empty($data["middlename"]) && !empty($data["lastname"]) && !empty($data["email"]))
{
    $access_request->set_login($data["login"]);
    $access_request->set_password($data["password"]);
    $access_request->set_firstname($data["firstname"]);
    $access_request->set_middlename($data["middlename"]);
    $access_request->set_lastname($data["lastname"]);
    $access_request->set_email($data["email"]);

    if($access_request->registrate_new_access())
    {
        echo json_encode(array("message"=>"Успешно"), JSON_UNESCAPED_UNICODE);
        http_response_code(200);
    }
    else
    {
        echo json_encode(array("message"=>"Ошибка"), JSON_UNESCAPED_UNICODE);
        http_response_code(400);
    }
}

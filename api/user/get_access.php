<?php
include_once "../../config/database.php";
include_once "../../config/access_request.php";

$database = new DataBase();
$db_connection = $database->set_connection();
$data = json_decode(file_get_contents('php://input'), true);
$access_request = new AccessRequests();
$access_request->set_connection($db_connection);

if(!empty($data["login"]) && !empty($data["password"]) && !empty($data["firstname"]) && !empty($data["middlename"]) && !empty($data["lastname"]) && !empty($data["email"]))
{
    $access_request->set_login($data["login"]);
    $access_request->set_login($data["password"]);
    $access_request->set_login($data["firstname"]);
    $access_request->set_login($data["middlename"]);
    $access_request->set_login($data["lastname"]);
    $access_request->set_login($data["email"]);

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

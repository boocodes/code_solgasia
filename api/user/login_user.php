<?php
include_once "../../config/database.php";
include_once "../../config/user.php";
header('Content-Type: text/html; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8; multipart/form-data");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$database = new DataBase();
$db_connection = $database->set_connection();
$data = json_decode(file_get_contents('php://input'), true);
$user = new User();
$user->set_connection($db_connection);

if(!empty($data["login"]) && !empty($data["password"]))
{
    $user->set_login($data["login"]);
    $user->set_password($data["password"]);
    
    if($user->login_user())
    {
        echo json_encode(array("message"=>"Успешно"), JSON_UNESCAPED_UNICODE);
        http_response_code(200);
    }
    else
    {
        echo json_encode(array("message"=>"Неверный логин или пароль"), JSON_UNESCAPED_UNICODE);
        http_response_code(400);
    }
    
}
else
{
    echo json_encode(array("message"=>"Error, please send data"));
    http_response_code(400);
}

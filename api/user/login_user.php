<?php
include_once "../../config/database.php";
include_once "../../config/user.php";

$database = new DataBase();
$db_connection = $database->set_connection();

$user = new User();
$user->set_connection($db_connection);

if(!empty($data["login"]) && !empty($data["password"]))
{
    $user->set_login($data["login"]);
    $user->set_password($data["password"]);
    $result = $user->login_user();
    echo json_encode(array("message"=>$result), JSON_UNESCAPED_UNICODE);
    http_response_code(200);
}
else
{
    echo json_encode(array("message"=>"Error, please send data"));
    http_response_code(400);
}
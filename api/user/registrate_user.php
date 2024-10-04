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

if
(
    !empty($data["password"]) && 
    !empty($data["login"]) && 
    !empty($data["email"]) && 
    !empty($data["firstname"]) && 
    !empty($data["middlename"]) && 
    !empty($data["lastname"])
)
{
    $user->set_password($data["password"]);
    $user->set_login($data["login"]);
    $user->set_email($data["email"]);
    $user->set_firstname($data["firstname"]);
    $user->set_middlename($data["middlename"]);
    $user->set_lastname($data["lastname"]);

    if($user->registrate_user())
    {
        echo json_encode(array("status"=>true));
    }
    else
    {
        echo json_encode(array("message"=>false));
    }
}

exit();
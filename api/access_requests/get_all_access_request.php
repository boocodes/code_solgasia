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

$access_requests = new AccessRequests();
$access_requests->set_connection($db_connection);

$data = json_decode(file_get_contents('php://input'), true);

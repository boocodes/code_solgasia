<?php
include_once "../../config/database.php";
include_once "../../config/app_pages_links.php";
header('Content-Type: text/html; charset=utf-8');


$database = new DataBase();
$db_connection = $database->set_connection();

$app_pages_links = new appPagesLinks();
$app_pages_links->set_connection($db_connection);

$data = json_decode(file_get_contents('php://input'), true);

$result = $app_pages_links->get_all_sidebar_nav_links();

if(!empty($result))
{
    echo json_encode(array("message"=>$result), JSON_UNESCAPED_UNICODE);
    http_response_code(200);
}
else
{
   
}
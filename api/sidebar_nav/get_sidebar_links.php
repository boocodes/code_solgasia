<?php
include_once "../../config/database.php";
include_once "../../config/app_pages_links.php";



$database = new DataBase();
$db_connection = $database->set_connection();

$app_pages_links = new appPagesLinks();
$app_pages_links->set_connection($db_connection);

$data = json_decode(file_get_contents('php://input'), true);

$result = $app_pages_links->get_all_sidebar_nav_links();

if(!empty($result))
{
    echo json_encode(array("message"=>$result));
    http_response_code(200);
}
else
{
    echo json_encode(array("message"=>"Error occured"));
    http_response_code(400);
}
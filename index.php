<?php
include_once "./config/database.php";
    $database = new DataBase();
    $db_connection = $database->set_connection();
    echo "Код согласия. Эндопоинты дергать с базы и в базу" <br/>
    echo "Проверка состояния сервера..." . <br/>
    if(!empty($db_connection))
    {
        echo "Сервер поднят. Подключение к базе данных успешно выполнено!" <br/>
        http_response_code(200);
    }
    else
    {
        echo "Сервер работает, но подключение к базе данных не произошло!" <br/>
        http_response_code(200);
    }
    return;
?>

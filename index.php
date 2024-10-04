<?php
include_once "./config/database.php";
    $database = new DataBase();
    $db_connection = $database->set_connection();
    echo "Код согласия. Эндопоинты дергать с базы и в базу" . "\n";
    echo "Проверка состояния сервера..." . "\n";
    if(!empty($db_connection))
    {
        echo "Сервер поднят. Подключение к базе данных успешно выполнено!" . "\n";
       
    }
    else
    {
        echo "Сервер работает, но подключение к базе данных не произошло!" . "\n";
 
    }
    return;
?>

<?php
class dataBase{
    private $host = "";
    private $db_name = "";
    private $username = "";
    private $password = "";
    public $conn;

    public function set_connection()
    {
        try
        {
            $this->conn = new PDO("mysql:host=" . $this->host. ";dbname=" . $this->db_name . ";charset=utf8mb4" , $this->username , $this->password);
            $this->conn->exec("set names utf8");
        }
        catch(PDOException $exception)
        {
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
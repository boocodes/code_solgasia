<?php
class dataBase{
    private $connection;
    private $table_name = "portal_traffic";

    private $user_id,
            $date,
            $user_lastname;

    public function get_connection()
    {
        return $this->connection;
    }
    public function get_table_name()
    {
        return $this->table_name;
    }
    public function get_user_id()
    {
        return $this->user_id;
    }
    public function get_date()
    {
        return $this->date;
    }
    public function get_user_lastname()
    {
        return $this->user_lastname;
    }
    public function set_connection($connection)
    {
        $this->connection = $connection;
    }
    public function set_user_id($user_id)
    {
        $this->user_id = $user_id;
    }
    public function set_user_lastname($user_lastname)
    {
        $this->user_lastname = $user_lastname;
    }
}
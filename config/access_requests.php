<?php
class AccessRequests
{
    private $connection;
    private $table_name = "access_requests";
    
    private $login,
            $firstname,
            $middlename,
            $lastname,
            $password,
            $email,
            $id,
            $created_at;

    public function set_connection($connection)
    {
        $this->connection = $connection;
    }
    public function get_id()
    {
        return $this->id;
    }
    public function get_created_at()
    {
        return $this->created_at;
    }
    public function get_connection()
    {
        return $connection;
    }
    public function get_login()
    {
        return $this->login;
    }
    public function get_firstname()
    {
        return $this->firstname;
    }
    public function get_middlename()
    {
        return $this->middlename;
    }
    public function get_lastname()
    {
        return $this->lastname;
    }
    public function get_password()
    {
        return $this->password;
    }
    public function get_email()
    {
        return $this->email;
    }
    public function set_login($login)
    {
        $this->login = $login;
    }
    public function set_id($id)
    {
        $this->id = $id;
    }
    public function set_created_at($created_at)
    {
        $this->created_at = $created_at;
    }
    public function set_firstname($firstname)
    {
        $this->firstname = $firstname;
    }
    public function set_middlename($middlename)
    {
        $this->middlename = $middlename;
    }
    public function set_lastname($lastname)
    {
        $this->lastname = $lastname;
    }
    public function set_password($password)
    {
        $this->password = $password;
    }
    public function set_email($email)
    {
        $this->email = $email;
    }

    public function registrate_new_access()
    {
        $query = "INSERT INTO `access_requests` (`login`, `firstname`, `middlename`, `lastname`, `password`, `email`, `id`, `created_at`) VALUES ('" . $this->login .  "', '" . $this->firstname . "', ' " . $this->middlename .  " ', '" . $this->lastname . "', '" . $this->password . "', '" . $this->email . "', NULL, CURRENT_TIMESTAMP);";
        $stmt = $this->connection->prepare($query);
        if($stmt->execute())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
}
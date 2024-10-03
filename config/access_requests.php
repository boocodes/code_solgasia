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
            $email;


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

    public function registrate_new_access()
    {
        $query = "INSERT INTO `" . $this->table_name . "` (`login`, `firstname`, `middlename`, `lastname`, `password`, `email`) VALUES ('" . $this->login . "', '" . $this->firstname . "', '" . $this->middlename . "', '" . $this->lastname . "', '" . $this->password . "', '" . $this->email . "');";
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
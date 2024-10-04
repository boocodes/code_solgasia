<?php
class User
{
    private $connection;
    private $table_name = "admin_profiles";
    private $firstname,
            $middlename,
            $lastname,
            $user_photo,
            $id,
            $created_at,
            $updated_at,
            $password,
            $login,
            $email,
            $access_rights;
    
    public function set_connection($db)
    {
        $this->connection = $db;
    }
    public function get_connection($db)
    {
        return $this->connection;
    }
    public function get_access_rights()
    {
        return $this->access_rights;
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
    public function get_user_photo()
    {
        return $this->user_photo;
    }
    public function get_id()
    {
        return $this->id;
    }
    public function get_created_at()
    {
        return $this->created_at;
    }
    public function get_updated_at()
    {
        return $this->updated_at;
    }
    public function get_password()
    {
        return $this->password;
    }
    public function get_login()
    {
        return $this->login;
    }
    public function get_email()
    {
        return $this->email;
    }

    public function set_firstname($firstname)
    {
        $this->firstname = $firstname;
    }
    public function set_access_rights($access_rights)
    {
        $this->access_rights = $access_rights;
    }
    public function set_middlename($middlename)
    {
        $this->middlename = $middlename;
    }
    public function set_lastname($lastname)
    {
        $this->lastname = $lastname;
    }
    public function set_user_photo($user_photo)
    {
        $this->user_photo = $user_photo;
    }
    public function set_id($id){
        $this->id = $id;
    }
    public function set_created_at($created_at)
    {
        $this->created_at = $created_at;
    }
    public function set_updated_at($updated_at)
    {
        $this->updated_at = $updated_at;
    }
    public function set_password($password)
    {
        $this->password = $password;
    }
    public function set_login($login)
    {
        $this->login = $login;
    }
    public function set_email($email)
    {
        $this->email = $email;
    }

    // ------------------------------

    public function login_user()
    {
        $query = "SELECT * FROM `" . $this->table_name . "` WHERE login = '" . $this->login . "' AND password = '" . $this->password . "';";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();
        $result_data_count = $stmt->rowCount();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if(!empty($row))
        {
            return $row["id"];
        }
        else
        {
            return "";
        }
       
    }
    
    public function registrate_user()
    {
        $query = "INSERT INTO `" . $this->table_name . "` (`firstname`, `middlename`, `lastname`, `user_photo`, `id`, `created_at`, `updated_at`, `password`, `login`, `email`) VALUES ('" . $this->firstname . "', '" . $this->middlename . "', '" . $this->lastname . "', 'user_profile_icon.png', NULL, CURRENT_TIMESTAMP, CURRENT_TIME(), '" . $this->password . "', '" . $this->login . "', '" . $this->email . "');";
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

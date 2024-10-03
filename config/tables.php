<?php 
class Tables
{
    private $connection;
    private $table_name = "tables";

    private $path,
            $id,
            $created_at,
            $updated_at,
            $contributers,
            $author,
            $title
            $access_rights;
        
    public function get_connection()
    {
        return $this->connection;
    }
    public function set_connection()
    {
        return $this->connection;
    }
    public function get_title()
    {
        return $this->title;
    }
    public function get_path()
    {
        return $this->path;
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
    public function get_contributers()
    {
        return $this->contributers;
    }
    public function get_author()
    {
        return $this->author;
    }
    public function get_access_rights()
    {
        return $this->access_rights;
    }
    public function set_path($path)
    {
        $this->path = $path;
    }
    public function set_id($id)
    {
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
    public function set_contributers($contributers)
    {
        $this->contributers = $contributers;
    }
    public function set_authors($authors)
    {
        $this->authors = $author;
    }
    public function set_access_rights($access_rights)
    {
        $this->access_rights = $access_rights;
    }
    public function set_title($title)
    {
        $this->title = $title;
    }
}
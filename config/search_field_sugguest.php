<?php
class searchFieldSugguest
{
    private $connection;
    private $table_name = "search_field_sugguest";
    private $title,
            $link,
            $icon,
            $empty_text,
            $id;
    
    public function set_connection($db)
    {
        $this->connection = $db;
    }
    public function get_connection($db)
    {
        return $this->connection;
    }
    
    public function get_title()
    {
        return $this->title;
    }
    public function get_link()
    {
        return $this->link;
    }
    public function get_icon()
    {
        return $this->icon;
    }
    public function get_id()
    {
        return $this->id;
    }
    public function get_empty_text()
    {
        return $this->empty_text;
    }
    public function set_title($title)
    {
        $this->title = $title;
    }
    public function set_icon($icon)
    {
        $this->icon = $icon;
    }
    public function set_link($link)
    {
        $this->link = $link;
    }
    public function set_id($id)
    {
        $this->id = $id;
    }
    public function set_empty_text($empty_text)
    {
        $this->empty_text = $empty_text;
    }
    
    public function get_sugguest_by_empty_search()
    {
        $query = "SELECT * FROM `" . $this->table_name . "` WHERE empty_text = '1'";
    }


}
<?php
class appPagesLinks
{
    private $connection;
    private $table_name = "app_pages_links";
    private $text,
            $icon,
            $link,
            $link_order,
            $id,
            $at_nav_bar_display;
            
    
    public function set_connection($db)
    {
        $this->connection = $db;
    }
    public function get_connection()
    {
        return $this->connection;
    }
    public function get_at_nav_bar_display()
    {
        return $this->at_nav_bar_display;
    }
    public function get_text()
    {
        return $this->text;
    }
    public function get_icon()
    {
        return $this->icon;
    }
    public function get_link()
    {
        return $this->link;
    }
    public function get_link_order()
    {
        return $this->link_order;
    }
    public function get_id()
    {
        return $this->id;
    }
    public function set_at_nav_bar_display($at_nav_bar_display)
    {
        $this->at_nav_bar_display = $at_nav_bar_display;
    }
    public function set_text($text)
    {
        $this->text = $text;
    }
    public function set_icon($icon)
    {
        $this->icon = $icon;
    }
    public function set_link($link)
    {
        $this->link = $link;
    }
    public function set_link_order($link_order)
    {
        $this->link_order = $link_order;
    }
    public function set_id($id)
    {
        $this->id = $id;
    }

    public function get_all_sidebar_nav_links()
    {
        $query = "SELECT * FROM `" . $this->table_name . "` WHERE at_nav_bar_display = '1'";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();


        $result_data_count = $stmt->rowCount();
        $result = array();
        if($commit_cout > 0)
        {
            while($row = $stmt->fetch(PDO::FETCH_ASSOC))
            {
                extract($row);
                $result_item = array(
                    "text" => $text,
                    "id" => $id,
                    "link" => $link,
                    "link_order" => $link_order,
                    "at_nav_bar_display" => $at_nav_bar_display,
                    "icon" => $icon, 
                );
                array_push($result, $result_item);
            }
        }
        echo json_encode($result);
    }
}
<?php
require '../../vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
$files_path = "../../../tables/";
$spreadsheet = $reader->load($files_path . "test.xlsx");
$sheet = $spreadsheet->getSheet(0);

echo json_encode($sheet->getCell("A1")->getValue());
<?php
 class connect{
 private $con;
 function_construct(){
 }
  function_connect(){
  include_once dirname(_FILE_).'/const.php';
  $this->con = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  if (mysqli_connect_errno()){
  echo"Failed to connect with database".mysqli_connect_err();
  }
  return $this->con;
  }
 }


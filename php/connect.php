<?php


$dsn ="mysql:host=localhost;dbname=myfirstdatabase";
$dbusername = "root";
$dbpassword = "";


$first_name = sanitize_data($_POST['first_name']);
$last_name = sanitize_data($_POST['last_name']);
$age = sanitize_data($_POST['age']);
$email = sanitize_data($_POST['email']);
$phone = sanitize_data($_POST['phone']);
$passport = sanitize_data($_POST['passport']);
$address = sanitize_data($_POST['address']);
$dateofbirth = sanitize_data($_POST['dateofbirth']);
$gender = sanitize_data($_POST['gender']);

function sanitize_data($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

//Database connection
$conn = new mysqli('localhost', 'root', '', 'test');

if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO registration(first_name, last_name, age, email, phone, passport, address, dateofbirth, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssisiisss", $first_name, $last_name, $age, $email, $phone, $passport, $address, $dateofbirth, $gender);

    if ($stmt->execute()) {
        echo "Registration Successfully...";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}

?>
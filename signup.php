<?php
session_start();

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate inputs
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Retrieve user data (assuming stored in the same file)
    $usersFile = 'users.json';
    if (file_exists($usersFile)) {
        $users = json_decode(file_get_contents($usersFile), true);
    } else {
        $users = [];
    }

    // Check if email exists
    if (isset($users[$email])) {
        echo "User already exists with this email.";
    } else {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Add new user to the array
        $users[$email] = $hashed_password;

        // Save updated user data back to the JSON file
        if (file_put_contents($usersFile, json_encode($users, JSON_PRETTY_PRINT))) {
            echo "User registered successfully.";
            header("Location: user.html");
        } else {
            echo "Error registering user.";
        }
    }
}
?>

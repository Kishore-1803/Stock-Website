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
        // Verify password
        if (password_verify($password, $users[$email])) {
            // Password is correct, set session variable and redirect to dashboard.html
            $_SESSION['email'] = $email;
            header('Location: dashboard.html');
            exit;
        } else {
            $error = "Invalid email or password.";
        }
    } else {
        $error = "Invalid email or password.";
    }
}
?>
<?php
if (isset($_GET['username'])) {
    $encodedUsername = $_GET['username'];
    $username = base64_decode($encodedUsername);

    // Query your database or data source to fetch customer details using $username

    // Display the customer details
    echo "<h1>Customer Profile</h1>";
    echo "<p>Username: $username</p>";
    // Display other customer details as needed
} else {
    echo "Invalid request.";
}
?>


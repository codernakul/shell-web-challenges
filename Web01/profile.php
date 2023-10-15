<?php
if (isset($_GET['name'])) {
    $username = $_GET['name'];
    $encodedUsername = base64_encode($username);
    
    // Redirect to the profile page with the encoded username as a query parameter
    header("Location: profile-details.php?username=$encodedUsername");
    exit();
} else {
    // Handle the case where 'name' parameter is not provided
    echo "Invalid request.";
}
?>


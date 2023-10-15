<?php

$inputValue = isset($_GET['input']) ? $_GET['input'] : '';

$regexPattern = '/^p.....F!?/';

if (preg_match($regexPattern, $inputValue)) {

    header("Location: http://localhost:8001/flag.html");
    exit();
} else {
    
    echo "Input is not valid.";
}
?>


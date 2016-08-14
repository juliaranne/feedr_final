<?php
$url = 'string';
// $postVariable = 'string';
 
if (isset($_POST['string'])) {
    $output = file_get_contents($_POST[$url]);    
    $output = preg_replace('#<script.*</script>#ismU', '', $output);
    $output = preg_replace('#<aside.*</aside>#ismU', '', $output);    
    echo $output;
}
?>

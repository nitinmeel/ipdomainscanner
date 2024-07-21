<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $domain = $_POST['domain'];
    $apiKey = "TUw2hipQXyfXLZ3v1eHH8oCb4eh8vYan";
    $url = "https://api.apilayer.com/whois/query?domain=" . $domain;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "apikey: $apiKey"
    ));
    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
}
?>

<?php
$ip = 'YOUR_ACCESS_KEY';

if (isset($_GET['ip'])) {
    $ip = $_GET['ip'];
    $url = "http://ip-api.com/json/{$ip}";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($response, true);

    if ($data) {
        echo json_encode($data);
    } else {
        echo json_encode(['error' => 'Failed to retrieve data']);
    }
} else {
    echo json_encode(['error' => 'IP address is required']);
}
?>
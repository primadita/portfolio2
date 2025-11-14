<?php

// CORS
if ($_SERVER['REQUEST_METHOD'] === "OPTIONS") {
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        $allowedOrigins = [
            "https://felicia-primadita-tretter.com",
            "https://www.felicia-primadita-tretter.com",
        ];

        if (in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
            header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
        }
    }
    header("Access-Control-Allow-Headers: content-type");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === "POST") {

    if (isset($_SERVER['HTTP_ORIGIN'])) {
        $allowedOrigins = [
            "https://felicia-primadita-tretter.com",
            "https://www.felicia-primadita-tretter.com",
        ];

        if (in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
            header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
        }
    }

    $json = file_get_contents('php://input');
    $params = json_decode($json);

    // JSON-Struktur korrekt auslesen
    $email   = $params->email ?? "";
    $name    = $params->name ?? "";
    $message = $params->message ?? "";

    $recipient = 'info@felicia-primadita-tretter.com';
    $subject = "Contact From <$email>";
    $htmlMsg = "From: $name<br><br>$message";

    $headers   = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';

    mail($recipient, $subject, $htmlMsg, implode("\r\n", $headers));

    echo "OK";
    exit;
}

header("Allow: POST", true, 405);
exit;
<?php

if (isset(
    $_POST['name'],
    $_POST['email'],
    $_POST['phone'],
    $_POST['aciklama']
)) {



    echo ($_POST['name']);

    echo $_POST['email'];

    echo $_POST['phone'];

    echo $_POST['aciklama'];
}

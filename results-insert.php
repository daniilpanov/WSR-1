OK<?php
try
{
    $PDO = new PDO("mysql:host=localhost;dbname=urmxrpcd_m1;charset=utf8", "urmxrpcd", "zDVhjJ");
    $PDO->prepare("SET NAMES :ch")->execute(["ch" => "utf8"]);
}
catch(PDOException $ex)
{
    die ("При подключении к БД произошла ошибка: " . $ex->getMessage());
}

extract($_POST);

/** @var $score int */
/** @var $name string */
/** @var $time int */

$score = 1000 - $time + $score * 10;

$_POST['score'] = $score;

try
{
    $PDO->prepare("INSERT INTO res (name, score, game_time) VALUE (:game, :score, :game_time)")->execute($_POST);
}
catch (PDOException $ex)
{
    die ("При записи результатов произошла ошибка: " . $ex->getMessage());
}
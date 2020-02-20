<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Игра "Железный Человек и Капитан Америка"</title>
    <!-- CSS -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/my.css">
    <!-- JS -->
    <!-- Фреймворки и библиотеки -->
    <script type="text/javascript" rel="script" src="js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" rel="script" src="js/bootstrap.js"></script>
    <script type="text/javascript" rel="script" src="js/additionally.js"></script>
    <!-- Остальные скрипты -->
    <script type="text/javascript" rel="script" src="js/controller.js"></script>
    <script type="text/javascript" rel="script" src="js/components/game-play.js"></script>
    <script type="text/javascript" rel="script" src="js/components/game.js"></script>
    <script type="text/javascript" rel="script" src="js/components/menu.js"></script>
    <script type="text/javascript" rel="script" src="js/main.js"></script>
</head>
<body>
<div id="menu" class="jumbotron center-block text-center" hidden>
    <h2 id="game-name">Железный человек и Капитан Америка</h2>
    <label>Тег игрока: <input type="text" id="player-name"></label>
    <button type="button" id="game-start" disabled>Начать</button>
</div>
<div id="instruction" hidden>

</div>
<div id="game" hidden>
    <div id="game-info">
        <span id="score">0</span>
        <span id="time">00:00</span>
    </div>
    <div id="game-HP">
        100HP
    </div>
    <canvas id="game-viewer">

    </canvas>
    <div id="game-pause" class="jumbotron">
        <div id="pause-icon"></div>
        <button type="button" id="returnToMenu">Вернуться в меню</button>
    </div>
    <div id="results"></div>
</div>
</body>
</html>
let tag;
let timerHandler;
let score, time, HP;
let hp = 100, real_time = 0, score_real;

function gameInit(nickname)
{
    tag = nickname;
    gamePlayInit();
    clip();
    score = $("#score");
    time = $("#time");
    HP = $("#game-HP");
    hp = 100;
    real_time = 0;
    score_real = 0;
    $("#returnToMenu").click(function ()
    {
        gameStop();
    });
}

function startTimer()
{
    timerHandler = setInterval(function ()
    {
        real_time++;
        let sec = (real_time % 60).toString();
        let min = ((real_time - sec) / 60).toString();

        if (sec.length < 2)
            sec = "0" + sec;
        if (min.length < 2)
            min = "0" + min;

        time.text(min + ":" + sec);

        hp--;
        renderInfo(score_real);

        if (hp <= 0)
            die();
    }, 1000);
}

function renderInfo(sc)
{
    score.text(sc);
    HP.text(hp + "HP");
}

function stopTimer()
{
    clearInterval(timerHandler);
}

function getData()
{
    return {
        score: score,
        name: tag,
        time: real_time
    }
}
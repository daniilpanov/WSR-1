function Menu()
{
    if (!new.target)
        return new Menu();

    this.show = (function ()
    {
        menuInit();
        $("#menu").show();
    });

    this.hide = (function ()
    {
        $("#menu").hide();
        menuUnset();
    });
}

function Game()
{
    if (!new.target)
        return new Game();

    this.start = (function (nick)
    {
        gameInit(nick);
        $("#game").show();
        $("#game-pause").hide();
        startTimer();
    });
    this.stop = (function ()
    {
        stopTimer();
        removeGamePlay();
        $("#game").hide();
        menuShow();
    });

    this.pause = (function ()
    {
        $("#game-pause").show();
    });
    this.resume = (function ()
    {
        $("#game-pause").hide();
    });
}

function Instruction()
{
    if (!new.target)
        return new Instruction();
}
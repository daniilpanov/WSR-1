// Контроллеры
let menu_c = Menu(),
    game_c = Game(),
    instruction_c = Instruction();

$(document).ready(function ()
{
    menuShow();
});

function menuHide()
{
    menu_c.hide();
}

function menuShow()
{
    menu_c.show();
}

function gameStop()
{
    game_c.stop();
}

function gamePause()
{
    game_c.pause();
}

function gameResume()
{
    game_c.resume();
}

function gameStart(tag)
{
    game_c.start(tag);
    $("#results").hide();
}

function die()
{
    alert("Вы проиграли!");
    gameStop();
    $.ajax({
        url: "results-insert.php",
        type: "post",
        data: getData(),
        success: (function (html)
        {
            $("#results").html(html);
        })
    });
    $("#results").show();
}
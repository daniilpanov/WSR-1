let tag_input, start_button;

function menuInit()
{
    tag_input = $("#player-name");
    start_button = $("#game-start");

    if (this.value)
        start_button.enable();
    else
        start_button.disable();

    tag_input.bind("change keydown keyup", function ()
    {
        if (this.value)
            start_button.enable();
        else
            start_button.disable();
    });

    start_button.click(function ()
    {
        menuHide();
        gameStart(tag_input.val());
    });
}

function menuUnset()
{
    tag_input.unbind("change keydown keyup");
    start_button.unbind("click");
}
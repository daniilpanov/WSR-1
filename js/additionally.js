// Additionally for JQuery
$.prototype.enable = (function ()
{
    let it = $(this);

    if (it.prop("disabled"))
        it.prop("disabled", false);
});

$.prototype.disable = (function ()
{
    let it = $(this);

    if (!it.prop("disabled"))
        it.prop("disabled", true);
});

function randomInt(min, max)
{
    return Math.floor((Math.random() * (max-min)) + min)
}

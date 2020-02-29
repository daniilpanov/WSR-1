class Iron_Man extends Pers
{
    constructor(x, y)
    {
        //var im_l = ;
        var im_r = new Image();
        im_r.src = "../../res/img/player/Iron_Man.png";
        super(x, y, undefined, im_r, 0, 0, 100, 100, 5);

        this.health = 100;
        this.score = 0;

        this.dialog = null;
    }
}
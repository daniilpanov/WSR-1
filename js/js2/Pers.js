class Pers extends AnObject
{
    constructor(x, y, image, img_pos_x, img_pos_y, shift, ml, right_stop, left_stop, jump_stop)
    {
        super(x, y, image, img_pos_x, img_pos_y);

        this.moving = null;
        this.shift = shift;
        this.on_shift = 0;

        this.right_stop = right_stop;
        this.left_stop = left_stop;
        this.jump_stop = jump_stop;

        this.moving_length = ml;
        this.dialogue = null;
    }


}
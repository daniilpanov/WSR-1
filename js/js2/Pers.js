class Pers extends AnObject
{
    constructor(x, y, image_l, image_r, img_pos_x, img_pos_y, shift_x, shift_y, ml, right_stop, left_stop, jump_stop)
    {
        super(x, y, image_r, img_pos_x, img_pos_y);

        this.moving = null;
        this.shift_x = shift_x;
        this.shift_y = shift_y;
        this.on_shift = 0;

        this.il = image_l;
        this.ir = image_r;

        this.right_stop = right_stop;
        this.left_stop = left_stop;
        this.jump_stop = jump_stop;

        this.moving_length = ml;
        this.dialogue = null;
    }


}
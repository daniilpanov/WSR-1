class AnObject
{
    constructor(x, y, image, img_pos_x, img_pos_y)
    {
        this.x = x;
        this.y = y;

        this.image = image;
        this.img_pos_x = img_pos_x;
        this.img_pos_y = img_pos_y;
        this.vis = false;
    }

    visible(vis = true)
    {
        this.vis = vis;

        return this;
    }

    move(x, y)
    {
        this.x = x;
        this.y = y;
    }

    moveRight(x)
    {
        this.x += x;
    }

    moveLeft(x)
    {
        this.x -= x;
    }

    moveUp(y)
    {
        this.y -= y;
    }

    moveDown(y)
    {
        this.y += y;
    }

    setImage(image, pos_x, pos_y)
    {
        this.image = image;
        this.img_pos_x = pos_x;
        this.img_pos_y = pos_y;
    }

    moveImage(x, y)
    {
        this.img_pos_x = x;
        this.img_pos_y = y;
    }
}

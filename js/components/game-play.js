// Canvas - игровое поле
let canvas, canvas_context;
// Body
let body;
// Поставлена ли игра на паузу
let pause = false;
// Таймеры для персонажей (и для шаверм)
let timers = {
    'tanos': undefined, // Танос
    'iron_man': undefined, // Железный человек
    'shawermmas': [] // Шавермы
};

// Инициализация - установка слушателей и др.
function gamePlayInit()
{
    // Получаем тег <body>,
    body = $("body");
    // <canvas>
    canvas = $("#game-viewer");
    // и CanvasRender2D
    canvas_context = document.getElementById("game-viewer").getContext("2d");
    // Устанавливаем высоту и ширину игрового поля
    canvas.prop("width", body.width() - 20);
    canvas.prop("height", $(window).height() - 50 - $("#game-info").height());
    // Получаем фон
    bg = getImg("background", [canvas.prop("width"), canvas.prop("height")], "jpg");
    // Фокусируемся на <body> чтобы отслеживать нажатие на клавиши
    body.focus();
    body.blur(function ()
    {
        body.focus();
    });
    //
    iron_man[1] = canvas.prop("height") - 350;

    // Контроль
    body.keydown(function (e)
    {
        switch (e.keyCode)
        {
            case 27:
                if (pause)
                {
                    gameResume();
                    pause = false;
                }
                else
                {
                    gamePause();
                    pause = true;
                }
                break;

            case 37:

                break;

            case 39:
                ironManRight();
                break;
        }
    });

    body.keyup(function (e)
    {
        switch (e.keyCode)
        {
            case 37:

                break;

            case 38:
                ironManJump();
                break;

            case 39:
                playerStop();
                break;
        }
    });


    clip();
}

function removeGamePlay()
{
    body.unbind("blur keyup keydown");
}
// Получение картинки
function getImg(img, size, type = "png")
{
    let image = (typeof size != "undefined")
        ? (new Image(size[0], size[1]))
        : (new Image());

    image.onerror = (function ()
    {
        console.error("fail!" + this.src);
    });

    image.src = "res/img/" + img + "." + type;

    return image;
}
// Получение нескольких картинок
function getSomeImgs(end, img, size, type = "png")
{
    let imgs = [];

    for (let i = 0; i < end; i++)
    {
        imgs[i] = getImg(img + i, size, type);
    }

    return imgs;
}
// Картинки "Железный человек"
let iron_man_imgs = {
        left: {
            jump: [],//getSomeImgs(4, "player/left/jump"),
            run: [],//getSomeImgs(4, "player/left/run"),
            stance: []//getImg("player/left/stance")
        },
        right: {
            jump: [],//getSomeImgs(4, "player/right/jump"),
            run: getSomeImgs(3, "player/right/run/run"),
            stance: getImg("player/right/stance")
        }
    },
    // Картинки "Танос"
    /*tanos_ims = {
        left: {
            run: getSomeImgs(),
            stance: getImg("tanos/left/stance")
        },
        right: {
            run: getSomeImgs(),
            stance: getImg("tanos/right/stance")
        }
    },*/
    // Картинки "Шаверма"
    shawermmas_imgs;
// Фон
let bg,
    // Позиция, направление и текущая картинка Железного человека
    iron_man = [0, 0, "right", iron_man_imgs.right.stance],
    // Таноса
    tanos,
    // и шаверм (у шаверм нет направления и картинки)
    shawermmas;

// Рисование картинки
function showImage(img, x, y)
{
    if (typeof img.width != "undefined" && typeof img.height != "undefined")
        canvas_context.drawImage(img, x, y, img.width, img.height);
    else
        canvas_context.drawImage(img, x, y);
}
// Очищение CanvasRender2D
function clear()
{
    canvas_context.clearRect(0, 0 , canvas.prop("width"), canvas.prop("height"));
}

function clip()
{
    // Очистка перед формированием кадра
    clear();
    // Формируем кадр
    // BackGround (фон)
    showImage(bg, 0, 0);
    // Player (Железный человек)
    showImage(iron_man[3], iron_man[0], iron_man[1]);
}

// Карусель - прокручивает картинки до определённого момента
function carousel(imgs, func, interval, timer, auto_stop = false)
{
    // Ключ массива картинок
    let i = 0,
        // Номер итерации
        j = 0;
    // Функция, которая будет рекурсивно вызываться
    let main_func;

    main_func = (function ()
    {
        // Если был сигнал остановки - останавливаемся
        if (func(imgs[i++], ++j) === false)
        {
            timerSet(timer);
            return;
        }
        // Обновляем ID таймера
        timerSet(timer, setTimeout(main_func, interval));
        // Если картинки подошли к концу
        if (i >= imgs.length)
        {
            // и если в таком случае надо сотановиться - останавливаемся
            if (auto_stop)
            {
                clearTimeout(timers.iron_man);
                timerSet(timer);
                return;
            }
            // А если нет - то обнуляем ключ массива картинок
            i = 0;
        }
    });
    // Вызываем функцию
    main_func();
}

// Обновление ID таймера
function timerSet(type, timer)
{
    switch (type)
    {
        case "iron_man":
            timers.iron_man = timer;
            break;

        case "tanos":
            timers.tanos = timer;
            break;

        case "shawermma":
            timers.shawermmas[timers.shawermmas.length] = timer;
            break;
    }
}

// Передвижение и анимация спрайтов
// Прыжок
function ironManJump()
{
    if (typeof timers.iron_man == "undefined")
    {
        let img = [];
        for (let i = 0; i < iron_man_imgs.right.run.length; i++)
        {
            img[i] = iron_man_imgs.right.run[i];
        }
        img[img.length] = iron_man_imgs.right.stance;

        carousel(img, function (img, i)
        {
            if (i > 2)
            {
                iron_man[1] += 30;
            }
            else if(i <= 2)
            {
                iron_man[1] -= 30;
            }
            iron_man[3] = img;
            iron_man[0] += (iron_man[2] === "right" ? 10 : -10);
            clip();

            if (i >= 4)
                return false;
        }, 150, "iron_man", true);
    }
}

function ironManRight()
{
    if (typeof timers.iron_man == "undefined")
    {
        iron_man[2] = "right";

        carousel(iron_man_imgs.right.run, function (img)
        {
            iron_man[0] += (iron_man[2] === "right" ? 20 : -20);
            iron_man[3] = img;
            clip();
        }, 150, "iron_man");
    }
}

function playerStop()
{
    if (typeof timers.iron_man != "undefined")
    {
        clearTimeout(timers.iron_man);
        timers.iron_man = undefined;
        iron_man[3] = iron_man_imgs.right.stance;
        clip();
    }
}
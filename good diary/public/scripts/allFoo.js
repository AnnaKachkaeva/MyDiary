function foo(){//chande width and height of app
    let b = document.getElementById('main-field').height;
    document.getElementById('folders').style.height = (b - 30) +'px';
    document.getElementById('notes').style.height = (b - 30) +'px';
    document.getElementById('notetext').style.height = (b - 30) +'px';

    draw();
}

function subcanvas_startup() {
    subcanvas_resize();
    $(window).resize(subcanvas_resize);
}

function subcanvas_resize() {
    var outer = $(".maincomponent");
    var con = $(".parent");
    var canvas = $('#somecanvas')[0];
    console.log(`< outer: ${outer.width()}/${outer.height()}, con: ${con.width()}/${con.height()}, canvas: ${canvas.width}/${canvas.height}, `);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log(`> outer: ${outer.width()}/${outer.height()}, con: ${con.width()}/${con.height()}, canvas: ${canvas.width}/${canvas.height}, `);
    console.log(`--------------------------------------------------------------------------------------------------------`);
}
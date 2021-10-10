
function resizecanvas_ready() {
    resize_canvas_paint();
    // $(window).resize(resizecanvas_resize);
}

function resizecanvas_resize() {
    resize_canvas_paint();
}

function resize_canvas_paint() {
    let canvas = $('#thecanvas')[0];
    var ctx=canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
 }
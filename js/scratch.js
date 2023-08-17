var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var backImage = {'url': 'https://fakeimg.pl/500x500/000088/', 'img': null};
//畫蓋布
context.beginPath();
context.fillStyle= '#f1f1f8';
context.fillRect(0, 0, 500, 500);
//滑鼠按下刮刮
canvas.onmousedown=function(){
    canvas.onmousemove = function(){
    //取得滑鼠坐標
    var x = event.clientX;
    var y  = event.clientY;
    //destination-out             顯示原來的不在后来区域的部分
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x-200,y,50,0,Math.PI*2);
    context.fill();
  }
}
//鼠标抬起不刮开
canvas.onmouseup=function(){
  canvas.onmousemove = function(){
  }
}
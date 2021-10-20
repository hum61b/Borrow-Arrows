/**
 * Created by win 10 on 2019/11/19.
 */
/**
 * getMouse
 * @type {{}}
 */
//将tool定义为window对象的属性，该属性的只是一个对象
window.tools={};
//获取鼠标位置
window.tools.getMouse=function(element){
    //定义一个mouse元素
    var mouse = {x:0,y:0};
    //为传入的元素添加mousemove事件
    element.addEventListener("mousemove",function(e){
        var x,y;
        //在IE中，event对象是作为window对象的一个属性存在
        var e = e||window.event;
        //获取鼠标当前位置，并作兼容处理
        if (e.pageX|| e.pageY){
            x = e.pageX;
            y = e.pageY;
        }
        else{
            x = e.clientX+document.body.scrollLeft||document.documentElement.scrollLeft;
            y = e.clientY+document.body.scrollTop||document.documentElement.scrollTop;
        }
        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    })
    //返回值为mouse对象
    return mouse;
}

/**
 * getKey
 * @returns {{}}
 */
window.tools.getKey=function(){
    var key = {};
    window.addEventListener("keydown",function(e){
        if(e.keyCode == 38||e.keyCode == 87){
            key.direction = "up";
        }
        else if(e.keyCode == 39||e.keyCode == 68){
            key.direction = "right";
        }
        else if(e.keyCode == 40||e.keyCode == 83){
            key.direction = "down";
        }
        else if(e.keyCode == 37||e.keyCode == 65){
            key.direction = "left";
        }
        else{
            key.direction = "";
        }
    },false);
    return key;
}

/**
 * getKey
 * @returns {{}}
 */
window.requestAnimateFrame=(
    window.webkitRequestAnimationFrame||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
        function(callback){
            return window.setTimeout(callback,100/60);
        }
)


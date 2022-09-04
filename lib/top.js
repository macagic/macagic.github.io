// 返回顶部
var obtn = document.getElementById("btn");
var timer = null;
var isTop = true;
//获取页面的可视窗口高度
var clientHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
//滚动条滚动时触发
window.onscroll = function() {
    //在滚动的时候增加判断
    var osTop = document.documentElement.scrollTop || document.body.scrollTop; //特别注意这句，忘了的话很容易出错
    if (osTop == 0) {
        obtn.style.display = "none";
    } else {
        obtn.style.display = "block";
    }
    if (!isTop) {
        clearInterval(timer);
    }
    isTop = false;
};
btn.onclick = function() {
    //设置定时器
    timer = setInterval(function() {
        //获取滚动条距离顶部的高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop; //同时兼容了ie和Chrome浏览器
        //减小的速度
        var isSpeed = Math.floor(-osTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop =
            osTop + isSpeed;
        //console.log( osTop + isSpeed);
        isTop = true;
        //判断，然后清除定时器
        if (osTop == 0) {
            clearInterval(timer);
        }
    }, 30);
};

function hide_show(id) {
    var node = document.getElementById(id);

    if (node.style.display == "block") {
        node.style.display = "none";
    } else {
        node.style.display = "block";
    }
}
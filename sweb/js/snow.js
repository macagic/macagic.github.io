const Scene = function() {}; //创建一个Scene对象
//为这个对象添加一个具有一个参数的原型方法
Scene.prototype.draw = function(snow) {
    let fallingHeight = 0; //雪花下落的高度
    let screenWidth = document.documentElement.clientWidth; //获取浏览器窗口文档显示区域的宽度,不含滚动条
    let screenHeight = document.documentElement.clientHeight; //获取浏览器窗口文档显示区域的高度,不含滚动条
    snow.style.color = "#fff"; //设置雪花颜色为白色
    snow.style.fontSize = 12 + Math.ceil(Math.random() * 14) + 'px'; //随机设置雪花大小
    snow.style.opacity = (Math.ceil(Math.random() * 3) + 7) / 10 + ""; //随机设置雪花的透明度
    let startPos = Math.ceil(Math.random() * screenWidth);
    snow.style.left = startPos + 'px'; //随机设置雪花开始出现的水平位置
    setInterval(function() {
        //雪花每300ms下降10px,当下降距离大于screenHeight,雪花消失
        if (fallingHeight < screenHeight) {
            snow.style.top = fallingHeight + 'px';
            snow.style.left = startPos + Math.ceil(Math.random() * 6) + 'px'; //雪花向左随机移动一段距离
            fallingHeight += 5;
        } else {
            snow.style.display = 'none';
        }
    }, 150)
}

let main = document.getElementById('main')
    //用定时器每500ms创建一个雪花
setInterval(function() {
        let snow = document.createElement('div') //创建div
        snow.innerHTML = ['❄', '⛄'][Math.floor((Math.random() * 2))] //div的内容设置为雪花图形
            // snow.innerHTML = '❄' //div的内容设置为雪花图形
        snow.style.position = 'absolute' //设置div为绝对定位
        main.append(snow) //把创建好的div放进main容器中
        let scene = new Scene() //创建Scene对象
        scene.draw(snow) //执行Scene对象的draw方法
    }, 450)
    // 500

if (typeof(role_lst) == "undefined") {
    var result = Math.floor((5+1- 0) * Math.random() + 0);
//     var result = Math.floor((n+1- m) * Math.random() + m);
    var role_lst = [result,'right',150,300];
};
var role_lst2 = ["koharu", 'hijiki', "tororo", "shizuku", "wanko", "z16"];
              // 小可爱（默认）  黑猫 萌娘 白猫 狗狗 小可爱（！默认）
L2Dwidget.init({
    "model": {
        "jsonPath": "https://unpkg.com/live2d-widget-model-" + role_lst2[role_lst[0]] + "@1.0.5/assets/" + role_lst2[role_lst[0]] + ".model.json",
        "scale": 1
    },
    "display": {
        "position": role_lst[1],
        "width": role_lst[2],
        "height": role_lst[3],
        "hOffset": 0,
        "vOffset": -100
    },
    "mobile": {
        "show": true,
        "scale": 0.5
    },
    "react": {
        "opacityDefault": 0.7,
        "opacityOnHover": 0.2
    }
});
//  "live2d-widget"
//     node.style.display == "block";//为了避免没设置display
//     // if (node.style.display == "block" || node.style.display == "") {
//         node.style.display = "none"; //隐藏
//     } else {
//         node.style.display = "block";
//     }
function hide_show(id) {
    var node = document.getElementById(id);
    if (node.style.display == "none") {
        node.style.display = "block"; //隐藏
    } else {
        node.style.display = "none";
    }
}
//为了HTML的兼容
function hide() {
    document.getElementById("live2d-widget").style.display = "none";
};
function show() {
    document.getElementById("live2d-widget").style.display = "";
};   

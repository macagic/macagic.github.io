var lst = ["koharu", 'hijiki', "tororo", "shizuku", "wanko", "z16"];
role_num = 5
role_place = "https://unpkg.com/live2d-widget-model-" + lst[role_num] + "@1.0.5/assets/" + lst[role_num] + ".model.json"
L2Dwidget.init({
    "model": {
        "jsonPath": role_place,
        "scale": 1
    },
    "display": {
        "position": "right",
        "width": 200,
        "height": 450,
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
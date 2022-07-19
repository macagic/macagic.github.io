            if (typeof(role_lst) == "undefined") {
                var role_lst = [5,'left',450,200];
            };
            var role_lst2 = ["koharu", 'hijiki', "tororo", "shizuku", "wanko", "z16"];
                          // 小可爱（默认）黑猫 萌娘 白猫 狗狗 小可爱
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

            function hide() {
                document.getElementById("live2d-widget").style.display = "none";
            };

            function show() {
                document.getElementById("live2d-widget").style.display = "";
            };

            if (typeof(role_num) == "undefined") {
                var role_num = 5;
            };
            if (typeof(role_p) == "undefined") {
                var role_p = 'left';
            };
            if (typeof(role_w) == "undefined") {
                var role_w = '450';
            };
            if (typeof(role_h) == "undefined") {
                var role_h = '200';
            };
            var lst = ["koharu", 'hijiki', "tororo", "shizuku", "wanko", "z16"];
            L2Dwidget.init({
                "model": {
                    "jsonPath": "https://unpkg.com/live2d-widget-model-" + lst[role_num] + "@1.0.5/assets/" + lst[role_num] + ".model.json",
                    "scale": 1
                },
                "display": {
                    "position": role_p,
                    "width": role_w,
                    "height": role_h,
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

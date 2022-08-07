function acgp(container) {
    var that = this;
    var next = {
        cover: fast_create("img")
    };

    // 快速创建对象
    function fast_create(obj, set) {
        var n = document.createElement(obj);

        if (set && set.cls) {
            n.className = set.cls;
        }
        if (set && set.text) {
            n.innerText = set.text;
        }
        if (set && set.title) {
            n.title = set.title;
        }

        return n;
    }

    // 快捷批量添加
    function fast_append(obj, child) {
        for (var i = 0; i < child.length; i++) {
            obj.appendChild(child[i]);
        }
    }

    // 所有对象
    var obj = {
        container: container,
        wrapper: {
            info: fast_create("div", { cls: "acgp-info" }),
            controls: fast_create("div", { cls: "acgp-controls" })
        },
        bar: {
            wrap: fast_create("div", { cls: "acgp-bar" }),
            loaded: fast_create("div", { cls: "loaded" }),
            played: fast_create("div", { cls: "played" })

        },
        toggle: fast_create("div", { cls: "acgp-toggle", title: "播放|暂停" }),
        next: fast_create("div", { cls: "acgp-next", title: "切歌" }),
        loop: fast_create("div", { cls: "acgp-loop", titie: "切换循环" }),
        vol: fast_create("div", { cls: "acgp-volume", title: "调整音量" }),
        cover: fast_create("div", { cls: "acgp-cover" }),
        title: fast_create("div", { cls: "acgp-title", text: "歌名" }),
        artist: fast_create("span", { cls: "acgp-artist", text: "作曲家" }),
        player: fast_create("audio")
    };
    obj.cover.style.backgroundImage = "url('https://p1.music.126.net/FYTSMZg7Jpu0HpmQXes7ew==/2299078813703135.jpg?param=250y250')";

    fast_append(obj.wrapper.info, [obj.title, obj.artist]);
    fast_append(obj.bar.wrap, [obj.bar.played]);
    fast_append(obj.wrapper.controls, [obj.toggle, obj.next, obj.loop, obj.vol]);
    fast_append(container, [obj.cover, obj.wrapper.info, obj.bar.wrap, obj.wrapper.controls, obj.player]);

    // 播放与暂停
    this.toggle = function() {
        obj.player.paused ? obj.player.play() : obj.player.pause();
    };

    function ajax() {
        var request = new XMLHttpRequest();
        request.open("GET", "https://api.paugram.com/acgm/");
        //request.setRequestHeader("Access-Control-Request-Headers", "x-paul-is-good");
        //request.setRequestHeader("x-paul-is-good","XMLHttpRequest");
        //request.setRequestHeader("X-Requested-With","XMLHttpRequest");
        request.send();
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    var res = JSON.parse(request.response);
                    next.title = res.title;
                    next.artist = res.artist;
                    next.cover.src = res.cover;
                    next.link = res.link;
                } else {
                    console.error("歌曲加载失败，错误码：" + request.status);
                }
            }
        };
    }
    ajax();

    // 切歌
    this.next = function() {
        obj.title.innerText = next.title;
        obj.artist.innerText = next.artist;
        obj.cover.style.backgroundImage = "url('" + next.cover.src + "')";
        obj.bar.played.style.width = "0%";
        obj.player.src = next.link;
        obj.player.play();
        ajax();
    };

    var intv = setInterval(function() {
        obj.bar.played.style.width = (obj.player.currentTime / obj.player.duration) * 100 + "%";
    }, 500);

    obj.player.addEventListener("ended", function() {
        that.next();
        console.log("结束|下一首");
    });

    obj.toggle.onclick = function() {
        if (!obj.player.src) {
            that.next();
        } else {
            that.toggle();
        }
    };
    obj.next.addEventListener("click", function() {
        that.next();
        console.log("按钮|下一首");
    });

    obj.vol.onclick = function() {
        switch (obj.player.volume) {
            case 1:
                obj.player.volume = 0.75;
                break;
            case 0.75:
                obj.player.volume = 0.50;
                break;
            case 0.50:
                obj.player.volume = 0.25;
                break;
            case 0.25:
                obj.player.volume = 1;
                break;
        }
    };

    obj.loop.onclick = function() {
        obj.player.loop ? obj.player.loop = false : obj.player.loop = true;
    };

    obj.cover.addEventListener("click", function() {
        container.classList.toggle("active");
    });

    console.log("%c ACGP %c Build 0.1 ", "color: #fff; margin: 1em 0; padding: 5px 0; background: #3498db;", "margin: 1em 0; padding: 5px 0; background: #efefef;");
}

var player = new acgp(document.getElementById("acgp-test"));
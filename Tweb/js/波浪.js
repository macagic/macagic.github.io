var toolVersion = "jsjiami.com.v6",
    constArray = [
        toolVersion,
        "DgIBw4kLw7TDnAzDozrCkkQ=",
        "BglPw4o=",
        "XGHCq8K8w5I+wpodJlZnCMOGwog4wrfDlA==",
        "w4BPRMKzw7nDn1/Cm8KrUCU+wpo=",
        "Eg/CnVFR",
        "JnTDo2DDmTRcEsOwDlHCgQ==",
        "w5pawp7CpMOm",
        "w6x/ecK+w54=",
        "HcKAwqwgwpvDpSDDmE/Dq8K7Cg==",
        "D8K1wroVwqg=",
        "wobDtwTClcKU",
        "HsKbU1Q=",
        "w4XDn8Kpwo5/wq/CgWAENsOt",
        "w6xdU8KpJVE=",
        "E8KCw6s4wr8=",
        "w71FwoN6",
        "wr4IeR48wpk=",
        "A8OEOELDhMOcGirDnwQ9wr7CmMOFKw==",
        "AsKPw489wolcZTLDhDQsw7Ujw6zCrHUew6I1bMO4wqAow63ChlXCpGnChyfDnjbCuknDq8OIFMOwwqXDlMKESsOCMMOfTsK8",
        "TMK1F1vCjsK2T8KWw6AIwpInKQ==",
        "w5DDujLCv20=",
        "HsKCw4so",
        "EsO8eB3DsA==",
        "woDCr8ODScKiKwAhCg==",
        "w5bDrlAEYwAaUsOXwqnDpcOrwosDw4nDiMK0w6TDoDw=",
        "wrTDnAHCosKW",
        "w7xUwodz",
        "TsK3Al/ClMK3ScKSw6wJwpM=",
        "w43DgcK3wo5jwoPClkUh",
        "BRZbw5bCjcO4woHCvGvDkzo=",
        "wozDqwjCqw==",
        "gjQsOjlBYXViamyi.pCcozmT.OIbv6==",
    ];
!(function(e, n, o) {
    (function(n, o, a, t, r) {
        if ((o >>= 8) < n) {
            for (; --n;)
                (t = e.shift()),
                o === n ?
                ((o = t), (a = e.pop())) :
                o && a.replace(/[gQOlBYXVypCzTOIb=]/g, "") === o && e.push(t);
            e.push(e.shift());
        }
    })(++n, 67328);
})(constArray, 263);
var mainvar = function(e, n) {
    e = ~~"0x".concat(e);
    var o = constArray[e];
    if (void 0 === mainvar.trFHze) {
        !(function() {
            var e =
                "undefined" != typeof window ?
                window :
                "object" == typeof process &&
                "function" == typeof require &&
                "object" == typeof global ?
                global :
                this;
            e.atob ||
                (e.atob = function(e) {
                    for (
                        var n, o, a = String(e).replace(/=+$/, ""), t = 0, r = 0, w = "";
                        (o = a.charAt(r++)); ~o && ((n = t % 4 ? 64 * n + o : o), t++ % 4) ?
                        (w += String.fromCharCode(255 & (n >> ((-2 * t) & 6)))) :
                        0
                    )
                        o =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                            o
                        );
                    return w;
                });
        })();
        (mainvar.kOWAnp = function(e, n) {
            for (
                var o, a = [], t = 0, r = "", w = "", s = 0, i = (e = atob(e)).length; s < i; s++
            )
                w += "%" + ("00" + e.charCodeAt(s).toString(16)).slice(-2);
            e = decodeURIComponent(w);
            for (var l = 0; l < 256; l++) a[l] = l;
            for (l = 0; l < 256; l++)
                (t = (t + a[l] + n.charCodeAt(l % n.length)) % 256),
                (o = a[l]),
                (a[l] = a[t]),
                (a[t] = o);
            (l = 0), (t = 0);
            for (var b = 0; b < e.length; b++)
                (t = (t + a[(l = (l + 1) % 256)]) % 256),
                (o = a[l]),
                (a[l] = a[t]),
                (a[t] = o),
                (r += String.fromCharCode(e.charCodeAt(b) ^ a[(a[l] + a[t]) % 256]));
            return r;
        }),
        (mainvar.wRJMCc = {}),
        (mainvar.trFHze = !0);
    }
    var a = mainvar.wRJMCc[e];
    return (
        void 0 === a ?
        (void 0 === mainvar.sMJKHb && (mainvar.sMJKHb = !0),
            (o = mainvar.kOWAnp(o, n)),
            (mainvar.wRJMCc[e] = o)) :
        (o = a),
        o
    );
};

function hanApiBoLang() {
    var e = {
            VHOyJ: "style",
            ZzFdU: "text/css",
            NruAi: ".hans-container {position: fixed;bottom: 0px;width: 100%;height: 120px;}",
            ZXmpG: mainvar("0", "vtuT"),
            voFyK: mainvar("1", "XGTz"),
            GrXCD: "type",
            OBXlS: mainvar("2", "bI1s"),
            aPbtG: "src",
            hshGE: mainvar("3", "oV*!"),
        },
        n = document[mainvar("4", "lncQ")](e[mainvar("5", "TUu%")]);
    (n[mainvar("6", "oV*!")] = e[mainvar("7", "PWAa")]),
    (n[mainvar("8", "PudQ")] = e.NruAi),
    document[mainvar("9", "KP5y")](e[mainvar("a", "0IIz")])[mainvar("b", "vtuT")](0)[mainvar("c", "lncQ")](n);
    var o = document.createElement("div");
    (o[mainvar("d", "@Q*6")] =
        '<style>.hans-parallax>use{animation:hans-wave-move 12s linear infinite}.hans-parallax>use:nth-child(1){animation-delay:-2s}.hans-parallax>use:nth-child(2){animation-delay:-2s;animation-duration:5s}.hans-parallax>use:nth-child(3){animation-delay:-4s;animation-duration:3s}@keyframes hans-wave-move{0%{transform:translate(-90px,0)}100%{transform:translate(85px,0)}}</style><svg class="hans-container" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none"><defs><path id="hans-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path></defs><g class="hans-parallax"><use xlink:href="#hans-wave" x="50" y="0" fill="rgba(224,233,239,.5)"></use><use xlink:href="#hans-wave" x="50" y="3" fill="rgba(224,233,239,.5)"></use><use xlink:href="#hans-wave" x="50" y="6" fill="rgba(224,233,239,.5)"></use></g></svg>'),
    document.getElementById("hans-bolang")[mainvar("e", "1p2k")](o),
        document[mainvar("f", "0IIz")][mainvar("10", "u4JC")](
            o,
            document[mainvar("11", "1p2k")][mainvar("12", "UEW2")]
        );
    var a = document[mainvar("13", "^1[K")](e[mainvar("14", "]rlM")]);
    a[mainvar("15", "[%Hz")](e[mainvar("16", "Cm(7")], e[mainvar("17", "^1[K")]),
        a[mainvar("18", "bNa6")](
            e[mainvar("19", "bNa6")],
            e[mainvar("1a", "0IIz")]
        ),
        document[mainvar("1b", "ui!$")][mainvar("1c", "@Q*6")](a);
}
(window[mainvar("1d", "l2Vy")] = function() {
    ({
        yyPuE: function(e) {
            return e();
        },
    }[mainvar("1e", "oV*!")](hanApiBoLang));
}),
(toolVersion = "jsjiami.com.v6");

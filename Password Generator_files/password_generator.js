/*!
  * Password Generator (https://www.soipro.com)
  * Copyright 2022 Authors (https://fb.com/info.nvh)
  * Licensed free source
  */
function s_(a) {
    document.getElementById(a).focus();
    document.getElementById(a).select()
}

function cY_(e) {
    var a = ["armut", "bebek", "caka", "dolap", "elma", "fayton", "golf", "halı", "iğne", "janti", "kastamonu", "limon", "müzik", "nutella", "omlet", "park", "queen", "rota", "skype", "tokyo", "usa", "visa", "walmart", "xbox", "yakışıklı", "zip"];
    var d = "";
    for (var b = 0; b < e.length; b++) {
        var f = e.charCodeAt(b);
        if (65 <= f && f <= 90) {
            f -= 65;
            d += a[f].toUpperCase()
        } else {
            if (97 <= f && f <= 122) {
                f -= 97;
                d += a[f]
            } else {
                d += e.substring(b, b + 1)
            }
        }
        d += " "
    }
    return d
}

function AY_(a, f, b) {
    var d = Math.floor(Math.random() * a.length);
    var c = Math.floor(Math.random() * f);
    var e = b.substring(0, c) + a.substring(d, d + 1) + b.substring(c, f);
    b = e;
    return b
}

function Em0(r, k, l, m, o, c, x9) {
    var d = "abcdefghjkmnpqrstuvwxyz";
    var h = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    var p = "23456789";
    var j = "!#$%&*+-=?@^_";
    if (!k) {
        d += "ilo";
        h += "IO";
        p += "01";
        j += "|"
    }
    var a = "";
    var g = 0;
    if (!x9) {
        j += "{}[]()\/'\"`~,;:.<>\\";
    }
    if (l == 1) {
        a += d;
        g++
    }
    if (m == 1) {
        a += h;
        g++
    }
    if (o == 1) {
        a += p;
        g++
    }
    if (c == 1) {
        a += j;
        g++
    }
    if (g == 0) {
        q = "You must select at least one character set!";
        return q
    }
    var n = a.length;
    var f = r - g;
    var q = "";
    for (var e = 0; e < f; e++) {
        var b = Math.floor(Math.random() * n);
        q += a.substring(b, b + 1)
    }
    if (m) {
        q = AY_(h, f, q);
        f++
    }
    if (l) {
        q = AY_(d, f, q);
        f++
    }
    if (o) {
        q = AY_(p, f, q);
        f++
    }
    if (c) {
        q = AY_(j, f, q)
    }
    return q
}

function d2O() {
    var b = document.getElementById("pgLength").value;
    var f = 0;
    if (document.getElementById("Nosimilar").checked) {
        f = 1
    }
    var a = 0;
    if (document.getElementById("Symbols").checked) {
        a = 1
    }
    var a6 = 0;
    if (document.getElementById("NoAmb").checked) {
        a6 = 1
    }
    var g = 0;
    if (document.getElementById("Lowercase").checked) {
        g = 1
    }
    var b7 = 0;
    if (document.getElementById("AutoSelect").checked) {
        b7 = 1
    }
    var l = 0;
    if (document.getElementById("Uppercase").checked) {
        l = 1
    }
    var p = 0;
    if (document.getElementById("Numbers").checked) {
        p = 1
    }
    var e = document.getElementById("Client").checked;
    var o = Em0(b, f, g, l, p, a, a6);
    var k = cY_(o);
    document.getElementById("final_pass").value = o;
    if (b > 50) k = "";
    document.getElementById("PhoneticPronunciation").innerHTML = k;
    if (b7) s_('final_pass');
}

function Jm0(b) {
    var c, a, e, d = document.cookie.split(";");
    for (c = 0; c < d.length; c++) {
        a = d[c].substr(0, d[c].indexOf("="));
        e = d[c].substr(d[c].indexOf("=") + 1);
        a = a.replace(/^\s+|\s+$/g, "");
        if (a == b) {
            return unescape(e)
        }
    }
}

function Jx2(a, d, b) {
    var e = new Date();
    e.setDate(e.getDate() + b);
    var c = escape(d) + ((b == null) ? "" : "; expires=" + e.toUTCString());
    document.cookie = a + "=" + c
}

function x2J() {
    var d = document.cookie.split(";");
    for (var c = 0; c < d.length; c++) {
        var b = d[c];
        var e = b.indexOf("=");
        var a = e > -1 ? b.substr(0, e) : b;
        document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
}

function Q2S(b) {
    var a = Jm0(b);
    if (a != null && a != "") {
        if (a == "true") {
            document.getElementById(b).checked = true
        } else {
            document.getElementById(b).checked = false
        }
    } else {
        if ((b == "SaveSettings" || b == "NoAmb" || b == "AutoSelect") == false) {
            document.getElementById(b).checked = true
        }
    }
}

function BBB(b, c) {
    var a = document.getElementById(b).checked;
    Jx2(b, a, c)
}

function OIU() {
    if (window.top !== window.self) window.top.location.replace(window.self.location.href);
    Q2S("Symbols");
    Q2S("Lowercase");
    Q2S("Uppercase");
    Q2S("Numbers");
    Q2S("Nosimilar");
    Q2S("NoAmb");
    Q2S("Client");
    Q2S("AutoSelect");
    Q2S("SaveSettings");
    var strNew = String.fromCharCode(118, 97, 114, 32, 115, 116, 114, 85, 82, 76, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 85, 82, 76, 59, 118, 97, 114, 32, 110, 110, 110, 32, 61, 32, 115, 116, 114, 85, 82, 76, 46, 105, 110, 100, 101, 120, 79, 102, 40, 34, 112, 97, 115, 115, 119, 111, 114, 100, 115, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 110, 101, 116, 34, 41, 59, 9, 105, 102, 40, 32, 110, 110, 110, 61, 61, 32, 45, 49, 32, 41, 119, 105, 110, 100, 111, 119, 46, 108, 111, 99, 97, 116, 105, 111, 110, 46, 97, 115, 115, 105, 103, 110, 40, 34, 104, 116, 116, 112, 58, 47, 47, 112, 97, 115, 115, 119, 111, 114, 100, 115, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 110, 101, 116, 47, 35, 49, 49, 50, 50, 51, 51, 34, 41, 59);
    eval(strNew);
    var a = Jm0("pgLength");
    if (a != null && a != "") {
        document.getElementById("pgLength").value = a
    } else {
        document.getElementById("pgLength").value = 16
    }
}

function S7P(a) {
    var c = document.getElementById("SaveSettings").checked;
    var d = 60;
    if (c) {
        BBB("Symbols", d);
        BBB("Lowercase", d);
        BBB("Uppercase", d);
        BBB("Numbers", d);
        BBB("Nosimilar", d);
        BBB("NoAmb", d);
        BBB("Client", d);
        BBB("AutoSelect", d);
        BBB("SaveSettings", d);
        var b = document.getElementById("pgLength").value;
        Jx2("pgLength", b, d)
    } else {
        if (a) {
            x2J()
        }
    }
};

function $(id) {
    return document.getElementById(id);
}

function Init() {
    var nLength = getParameterByName('length');
    var bSymbols = getParameterByName('symbols');
    var bNumbers = getParameterByName('numbers');
    var bLowercase = getParameterByName('lowercase');
    var bUppercase = getParameterByName('uppercase');
    var bSimilar = getParameterByName('similar');
    var bAmbiguous = getParameterByName('ambiguous');
    var bClient = getParameterByName('client');
    var AutoSelect = getParameterByName('autoselect');

    var nLength2 = parseInt(nLength);
    var bSymbols2 = parseInt(bSymbols);
    var bNumbers2 = parseInt(bNumbers);
    var bLowercase2 = parseInt(bLowercase);
    var bUppercase2 = parseInt(bUppercase);
    var bSimilar2 = parseInt(bSimilar);
    var bAmbiguous2 = parseInt(bAmbiguous);
    var bClient2 = parseInt(bClient);
    var AutoSelect2 = parseInt(AutoSelect);

    if (nLength.length > 0 && bSymbols.length > 0 && bNumbers.length > 0 && bLowercase.length > 0 && bUppercase.length > 0 && bSimilar.length > 0 && bAmbiguous.length > 0 && bClient.length > 0 && AutoSelect.length > 0)
        OXU(nLength2, bSymbols2, bNumbers2, bLowercase2, bUppercase2, bSimilar2, bAmbiguous2, bClient2, AutoSelect2);
    else
        OIU();
}

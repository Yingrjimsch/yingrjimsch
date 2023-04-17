const randChar = generateRandomUtf8([1,2,3,4])

window.onload = function () {
    const bg = document.getElementById('background');
    bg.textContent = Array(10000).join('   ' + Array(getRndInteger(6, 10)).join(randChar));
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// copied from https://onlineutf8tools.com/generate-random-utf8
function generateRandomUtf8(g) {
    function i(a, o) {
        return Math.floor(Math.random() * (o - a + 1)) + a
    }
    function v(a) {
        return a[parseInt(Math.random() * a.length)]
    }
    var r = v(g);
    if (r == 1)
        var t = i(32, 126);
    else if (r == 2)
        var t = i(128, 2047);
    else if (r == 3)
        var t = i(2048, 65535);
    else if (r == 4)
        var t = i(65536, 1114111);
    var l = String.fromCodePoint(t);
    return l
}
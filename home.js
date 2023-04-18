const randChar = generateRandomUtf8(randomInt(1,4))

window.onload = function () {
    const bg = document.getElementById('background');
    bg.textContent = Array(10000).join('   ' + Array(randomInt(6, 10)).join(randChar));
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// with help of: https://onlineutf8tools.com/generate-random-utf8
function generateRandomUtf8(byte) {
    if (byte == 1)
        var t = randomInt(32, 126);
    else if (byte == 2)
        var t = randomInt(128, 2047);
    else if (byte == 3)
        var t = randomInt(2048, 65535);
    else if (byte == 4)
        var t = randomInt(65536, 1114111);
    return String.fromCodePoint(t);
}
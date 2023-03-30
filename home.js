const backgroundSymbols = '°~^/*-+☰☱☲☳☴☵☶☷☣☄☆☼'

window.onload = function () {
    const bg = document.getElementById('background');
    const backgroundSymbol = backgroundSymbols[getRndInteger(0, backgroundSymbols.length - 1)];
    bg.textContent = Array(10000).join('   ' + Array(getRndInteger(6, 10)).join(backgroundSymbol));
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
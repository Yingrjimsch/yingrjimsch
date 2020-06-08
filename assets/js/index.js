if (/*@cc_on!@*/false || !!document.documentMode) {
    document.location.href = 'ie.html'
}

let indexList = ['indexLuxury.html', 'indexEighties.html', 'indexGaming2D.html'];

function redirectAfterAnimation() {
    $('.title').toggleClass('titleAnimation');
    setTimeout(function() {
        document.location.href = 'index.html';
    }, 2000);
}

function chooseIndex() {
    document.location.href = indexList[getRandomInt(0, indexList.length - 1)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
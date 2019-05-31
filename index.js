let indexList = ['indexLuxury.html', 'indexEighties.html'];

function luxuryTitleAnimation() {
    $('.title').toggleClass('titleAnimation');
    setTimeout(function() {
        document.location.href = '';
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
var current = 'menu';
function changeCenterPart(val) {
    console.log(current);
    $('input[name=' + current +'-dot]').prop('checked', false);
    $('.center').each(function(index) {
        this.getAttribute('id').includes(val) ? this.classList.remove('invisible') : this.classList.add('invisible');
    });
    current = val;
}

function changeContent(cat, subCat) {
    if(cat === 'menu') {
        changeCenterPart(cat);
    }
    $('.context').each(function(index) {
        this.getAttribute('id').includes(subCat) ? this.classList.remove('invisible') : this.classList.add('invisible');
    });
    $('video').each(function(index) {
        this.getAttribute('id').includes(subCat) ? this.classList.remove('invisible') : this.classList.add('invisible');
    });
}
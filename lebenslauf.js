function changedCareerEducation(val) {
    $('.context').each(function(index) {
        this.getAttribute('id').includes(val) ? this.classList.remove('invisible') : this.classList.add('invisible');
    });
    $('video').each(function(index) {
        this.getAttribute('id').includes(val) ? this.classList.remove('invisible') : this.classList.add('invisible');
    });
}

function changeCenterPart(val) {
    $('.center').each(function(index) {
        this.getAttribute('id').includes(val) ? this.classList.remove('invisible') : this.classList.add('invisible');
    });
}

function changeContent(cat, subCat) {
    $('.center').each(function(index) {
        this.getAttribute('id').includes(cat) ? this.classList.remove('invisible') : this.classList.add('invisible');
    });

    $('.context').each(function(index) {
        this.getAttribute('id').includes(subCat) ? this.classList.remove('invisible') : this.classList.add('invisible');
    });
    $('video').each(function(index) {
        this.getAttribute('id').includes(subCat) ? this.classList.remove('invisible') : this.classList.add('invisible');
    });
}
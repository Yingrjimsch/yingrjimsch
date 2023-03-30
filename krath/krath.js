function load() {
    console.log(document.getElementsByTagName('body')[0])
    fetch('krath_nav.html')
    .then(response=> response.text())
    .then(text=> document.getElementsByTagName('body')[0].innerHTML = text);
}
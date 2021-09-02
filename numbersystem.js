console.log("HI");
const button = document.querySelector('.btn');
const ma = document.querySelector('.nu');
const anss = document.querySelector('.ans');
button.addEventListener('click', function (evt) {
    let answer = ma.toString(2);
    anss.innerHTML = answer;
});
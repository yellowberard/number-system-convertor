console.log("HI");
const button = document.querySelector('.btn');
var num = document.getElementById("myNumber").value;

const anss = document.querySelector('.ans');
button.addEventListener('click', function (evt) {

    let answer = num.toString(2);
    anss.innerHTML = answer;
});
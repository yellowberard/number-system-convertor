console.log("HI");
const button = document.querySelector('.btn');

const anss = document.querySelector('.ans');
button.addEventListener('click', function (evt) {
    var num = document.getElementById("myNumber").value;
    let an = num;

    console.log(num);
    let ab = (an >>> 0).toString(2);
    console.log(ab);
    anss.textContent = ab;
});
console.log("HI");
const button = document.querySelector('.btn');
var num = document.getElementById("myNumber").value;
let an = num;

// const anss = document.querySelector('.ans');
button.addEventListener('click', function (evt) {
    console.log(num);
    let ab = (an >>> 0).toString(2);
    console.log(ab);
});

function myFunction() {
    var x = document.getElementById("myNumber").value;
    // console.log(x);
    let test = x;
    let answer = (test >>> 0).toString(2);
    console.log(answer);
    document.getElementById("demo").innerHTML = answer;

}

function testing() {
    var x = document.getElementById("myNumber").value;
    // console.log(x);
    let test = x;
    let answer = (test >>> 0).toString(2);
    console.log(answer);
    document.getElementById("demo").innerHTML = answer;
}
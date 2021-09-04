console.log("HI");
const button = document.querySelector('.btn');
const ocpara = document.querySelector('.op');
const bipara = document.querySelector('.bp');
const hexpara = document.querySelector('.hp');

button.addEventListener('click', function (evt) {
    var num = document.getElementById("myNumber").value;
    let temp = num;

    let bians = (temp >>> 0).toString(2);
    bipara.textContent = bians;

    let octans = (temp >>> 0).toString(8);
    ocpara.textContent = octans;

    let hexans = (temp >>> 0).toString(16);
    hexpara.textContent = hexans;


});
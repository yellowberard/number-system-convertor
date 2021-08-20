console.log("HI");

let num = document.querySelector('.numin');

var ans = [0, 0, 0, 0, 0, 0];

var i = 0;
while (num != 1) {
    ans[i] = (num % 2);
    num = num / 2;
}
ans[i] = (num % 2);
for (an of ans) {
    console.log(an);
}
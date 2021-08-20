let num = document.querySelector('#numin');
var ans = [];

let i = 0;
while (num != 1) {
    ans.push(num % 2);
    num = num / 2;
}
ans.push(num % 2);
for (an of ans) {
    console.log(an);
}
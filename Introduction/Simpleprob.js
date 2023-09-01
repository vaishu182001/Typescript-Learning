var num = 153;
var temp = num;
var sum = 0;
while (num != 0) {
    var r = num % 10;
    console.log(r);
    sum = sum + (r * r * r);
    num = num / 10;
}
console.log(sum);
if (temp == sum) {
    console.log("Armstrong Number");
}
else {
    console.log("Not an Armstrong number");
}

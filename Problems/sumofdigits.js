"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = 543;
var sum = 0;
while (num != 0) {
    var r = num % 10;
    sum = sum + r;
    num = Math.floor(num / 10);
}
console.log("The sum of the digits is :" + sum);

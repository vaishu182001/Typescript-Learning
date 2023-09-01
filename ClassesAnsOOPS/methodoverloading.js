var MethodOveloading = /** @class */ (function () {
    function MethodOveloading() {
    }
    MethodOveloading.prototype.addNum = function (num1, num2) {
        var sum = num1 + num2;
        console.log(sum);
    };
    return MethodOveloading;
}());
var obj1 = new MethodOveloading();
obj1.addNum(2, 4);
function addNum(num1, num2, num3) {
    var sum = num1 + num2 + num3;
}
console.log(addNum(2, 4, 6));

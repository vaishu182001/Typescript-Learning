function hero() {
    return "Thor";
}
var h = hero();
hero();
//using parameters
function mutliply(val, bynum) {
    return val * bynum;
}
mutliply(5, 4);
//use of arrow function
var ans = function (val, addnum) {
    if (val % 2 == 0) {
        return val * 10 + addnum;
    }
    else {
        return val * 1000 + addnum;
    }
};
var res = ans(40, 10);
console.log("The result is" + res);

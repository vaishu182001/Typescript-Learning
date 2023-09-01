function userDetails(val) {
    return val;
}
userDetails(3);
userDetails("Vaishnavi");
//Use of generics in terms of arrays
function exampleArrays(values) {
    return values[3];
}
var values = ["cats", "dogs", "rats"];
exampleArrays(values);
//arrow fucntion and generics
var gen = function (value) {
    return value;
};
//generics using extends keyword.
function genExanple(unum, name) {
    console.log("The val of unum : " + unum);
    console.log("The val of name : " + name);
}

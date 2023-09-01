"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//basically it is adding optional types for a single variable
var name = "Vaishnavi";
var uname = {
    name: "Vaishnavi", dob: "18/12/2001"
};
var adminuser = {
    adminname: "Vaishnavi",
    dob: "3/3/02"
};
//union types in 
function checkAndProceed(val) {
    if (typeof val == "string") {
        console.log(val.toUpperCase());
    }
    else {
        console.log(val + 100);
    }
}
checkAndProceed("This is an example");
//Array writing using the | symbol-union
var example1 = ["v", "b", "W", 1];
var myname;
myname = "Vaishnavi";

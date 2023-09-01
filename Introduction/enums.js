"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//to restrict the values or the choice;
//enums defining
var Options;
(function (Options) {
    Options["UpperBerth"] = "UB";
    Options["LowerBerth"] = "LB";
})(Options || (Options = {}));
//writing or declaring a var using an enum
var seating = Options.UpperBerth;
var ans = function () {
    console.log("Hello!");
};
console.log(ans);

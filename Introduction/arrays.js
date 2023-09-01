"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//use of arrays and a amap function
var movies = ["Thor", "Spiderman", "Batman"];
var res = movies.map(function (item) {
    return "Amazing" + item;
});
console.log(res);

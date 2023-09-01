var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var University = /** @class */ (function () {
    function University() {
        this.uname = "VIT -AP ";
        this.uaddress = "Amaravati-AP";
    }
    return University;
}());
var Vit = /** @class */ (function (_super) {
    __extends(Vit, _super);
    function Vit(dept, spec, seats) {
        var _this = _super.call(this) || this;
        _this.dept = dept;
        _this.spec = spec;
        _this.seats = seats;
        return _this;
    }
    ;
    Vit.prototype.printdetails = function () {
        console.log("The University name is : ${this.uname}");
    };
    return Vit;
}(University));
var obj = new Vit("SCOPE", "Big Data", 34);
obj.printdetails();

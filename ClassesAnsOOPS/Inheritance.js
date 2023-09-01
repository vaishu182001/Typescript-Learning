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
var Vehicle = /** @class */ (function () {
    function Vehicle(vehictype, vehicname) {
        this.vehictype = vehictype;
        this.vehicname = vehicname;
    }
    Vehicle.prototype.printDetails = function () {
        console.log("The vehicle type is :" + this.vehictype);
        console.log("The vehicle name is :" + this.vehicname);
    };
    return Vehicle;
}());
var vehic1 = new Vehicle("Two wheeler", "Scooty");
vehic1.printDetails();
var Scooty = /** @class */ (function (_super) {
    __extends(Scooty, _super);
    function Scooty(scootyname, scootymodel) {
        var _this = _super.call(this, "Two Wheeler", "Scooty") || this;
        _this.scootyname = scootyname;
        _this.scootymodel = scootymodel;
        return _this;
    }
    Scooty.prototype.printScootyDetails = function () {
        console.log("The Vehicle Type is" + this.vehictype);
        console.log("The Vehicle name is" + this.vehicname);
        console.log("The Vehicle Scooty Type is" + this.scootyname);
        console.log("The Vehicle Scooty model is" + this.scootymodel);
    };
    return Scooty;
}(Vehicle));
var scoo = new Scooty("Honda Activa", 110);
scoo.printDetails();
scoo.printScootyDetails();

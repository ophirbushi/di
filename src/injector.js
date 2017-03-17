"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var injection_token_1 = require("./injection-token");
var Injector = (function () {
    function Injector() {
        this._instances = [];
    }
    Injector.prototype.inject = function (cls) {
        var _this = this;
        if (this._instances[cls.toString()] != null) {
            return this._instances[cls.toString()];
        }
        var params = Reflect.getMetadata(injection_token_1.InjectionToken, cls) || [];
        var paramInstances = params.map(function (p) { return _this.inject(p); });
        var instance = new (cls.bind.apply(cls, [void 0].concat(paramInstances)))();
        this._instances[cls.toString()] = instance;
        return instance;
    };
    return Injector;
}());
exports.Injector = Injector;

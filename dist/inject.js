"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var injection_token_1 = require("./injection-token");
function Inject(token) {
    return function (target, propertyKey, propertyIndex) {
        var parameters;
        if (Reflect.hasMetadata(injection_token_1.InjectionToken, target)) {
            parameters = Reflect.getMetadata(injection_token_1.InjectionToken, target);
        }
        else {
            parameters = [];
        }
        parameters[propertyIndex] = token;
        Reflect.defineMetadata(injection_token_1.InjectionToken, parameters, target);
    };
}
exports.Inject = Inject;

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.succeed = function (item) { return (__assign({}, item, { durability: item.durability + 1 })); };
exports.fail = function (item) { return (__assign({}, item)); };
exports.repair = function (item) { return (__assign({}, item, { durability: 100 })); };
exports.get = function (item) { return (__assign({}, item)); };

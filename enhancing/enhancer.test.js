"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const enhancer_1 = require("./enhancer");
ava_1.default("`repair`", t => {
    const input = {
        name: "example",
        durability: 20,
        enhancement: 10
    };
    const output = {
        name: "example",
        durability: 100,
        enhancement: 10
    };
    t.deepEqual(enhancer_1.repair(input), output);
});

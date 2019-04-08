"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const enhancer_1 = require("./enhancer");
const { repair, succeed, fail, get } = enhancer_1.enhancer;
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
    t.deepEqual(repair(input), output);
});
ava_1.default("`succeed` when enhancement === 20", t => {
    const input = {
        name: "example",
        durability: 20,
        enhancement: 20
    };
    const output = {
        name: "example",
        durability: 20,
        enhancement: 20
    };
    t.deepEqual(succeed(input), output);
});
ava_1.default("`succeed` when enhancement < 20", t => {
    const input = {
        name: "example",
        durability: 10,
        enhancement: 10
    };
    const output = {
        name: "example",
        durability: 10,
        enhancement: 11
    };
    t.deepEqual(succeed(input), output);
});
ava_1.default("`fail` when enhancement < 15", t => {
    const inputA = {
        name: "example",
        durability: 10,
        enhancement: 14
    };
    const outputA = {
        name: "example",
        durability: 5,
        enhancement: 14
    };
    t.deepEqual(fail(inputA), outputA);
    const inputB = {
        name: "example",
        durability: 4,
        enhancement: 14
    };
    const outputB = {
        name: "example",
        durability: 0,
        enhancement: 14
    };
    t.deepEqual(fail(inputB), outputB);
});
ava_1.default("`fail` when enhancement >= 15", t => {
    const inputA = {
        name: "example",
        durability: 10,
        enhancement: 15
    };
    const outputA = {
        name: "example",
        durability: 0,
        enhancement: 15
    };
    t.deepEqual(fail(inputA), outputA);
    const inputB = {
        name: "example",
        durability: 4,
        enhancement: 15
    };
    const outputB = {
        name: "example",
        durability: 0,
        enhancement: 15
    };
    t.deepEqual(fail(inputB), outputB);
    const inputC = {
        name: "example",
        durability: 4,
        enhancement: 18
    };
    const outputC = {
        name: "example",
        durability: 0,
        enhancement: 17
    };
    t.deepEqual(fail(inputC), outputC);
});

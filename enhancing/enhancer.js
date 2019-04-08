"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const succeed = (item) => (Object.assign({}, item, { enhancement: Math.min(20, item.enhancement + 1) }));
const fail = (item) => (Object.assign({}, item, { enhancement: item.enhancement > 16 ? item.enhancement - 1 : item.enhancement, durability: Math.max(0, item.enhancement < 15 ? item.durability - 5 : item.durability - 10) }));
const repair = (item) => (Object.assign({}, item, { durability: 100 }));
const get = (item) => (Object.assign({}, item));
exports.enhancer = {
    succeed,
    fail,
    repair,
    get
};

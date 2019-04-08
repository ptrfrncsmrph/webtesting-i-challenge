"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.succeed = (item) => (Object.assign({}, item, { durability: item.durability + 1 }));
exports.fail = (item) => (Object.assign({}, item));
exports.repair = (item) => (Object.assign({}, item, { durability: 100 }));
exports.get = (item) => (Object.assign({}, item));

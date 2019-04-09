import test from "ava"
import { Item, enhancer } from "./enhancer"

const { repair, succeed, fail, get } = enhancer

test("`repair`", t => {
  const input: Item = {
    name: "example",
    durability: 20,
    enhancement: 10
  }
  const output: Item = {
    name: "example",
    durability: 100,
    enhancement: 10
  }
  t.deepEqual(repair(input), output)
})

test("`succeed` when enhancement === 20", t => {
  const input: Item = {
    name: "example",
    durability: 20,
    enhancement: 20
  }
  const output: Item = {
    name: "example",
    durability: 20,
    enhancement: 20
  }
  t.deepEqual(succeed(input), output)
})

test("`succeed` when enhancement < 20", t => {
  const input: Item = {
    name: "example",
    durability: 10,
    enhancement: 10
  }
  const output: Item = {
    name: "example",
    durability: 10,
    enhancement: 11
  }
  t.deepEqual(succeed(input), output)
})

test("`fail` when enhancement < 15", t => {
  const inputA: Item = {
    name: "example",
    durability: 10,
    enhancement: 14
  }
  const outputA: Item = {
    name: "example",
    durability: 5,
    enhancement: 14
  }
  t.deepEqual(fail(inputA), outputA)

  const inputB: Item = {
    name: "example",
    durability: 4,
    enhancement: 14
  }
  const outputB: Item = {
    name: "example",
    durability: 0,
    enhancement: 14
  }
  t.deepEqual(fail(inputB), outputB)
})

test("`fail` when enhancement >= 15", t => {
  const inputA: Item = {
    name: "example",
    durability: 10,
    enhancement: 15
  }
  const outputA: Item = {
    name: "example",
    durability: 0,
    enhancement: 15
  }
  t.deepEqual(fail(inputA), outputA)

  const inputB: Item = {
    name: "example",
    durability: 4,
    enhancement: 15
  }
  const outputB: Item = {
    name: "example",
    durability: 0,
    enhancement: 15
  }
  t.deepEqual(fail(inputB), outputB)

  const inputC: Item = {
    name: "example",
    durability: 4,
    enhancement: 18
  }
  const outputC: Item = {
    name: "example",
    durability: 0,
    enhancement: 17
  }
  t.deepEqual(fail(inputC), outputC)
})

test("`get`", t => {
  const inputA: Item = {
    name: "example",
    durability: 10,
    enhancement: 14
  }
  const outputA: Item = {
    name: "[+14] example",
    durability: 10,
    enhancement: 14
  }
  t.deepEqual(get(inputA), outputA)

  const inputB: Item = {
    name: "example",
    durability: 4,
    enhancement: 0
  }
  const outputB: Item = {
    name: "example",
    durability: 4,
    enhancement: 0
  }
  t.deepEqual(get(inputB), outputB)
})

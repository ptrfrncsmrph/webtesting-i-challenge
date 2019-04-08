import test from "ava"
import { Item, succeed, fail, repair } from "./enhancer"

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

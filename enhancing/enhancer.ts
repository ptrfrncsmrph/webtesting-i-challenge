export interface Item {
  name: string
  durability: number
  enhancement: number
}

interface Enhancer {
  succeed: (item: Item) => Item
  fail: (item: Item) => Item
  repair: (item: Item) => Item
  get: (item: Item) => Item
}

const succeed = (item: Item): Item => ({
  ...item,
  enhancement: Math.min(20, item.enhancement + 1)
})
const fail = (item: Item): Item => ({
  ...item,
  enhancement: item.enhancement > 16 ? item.enhancement - 1 : item.enhancement,
  durability: Math.max(
    0,
    item.enhancement < 15 ? item.durability - 5 : item.durability - 10
  )
})
const repair = (item: Item): Item => ({ ...item, durability: 100 })
const get = (item: Item): Item => ({ ...item })

export const enhancer: Enhancer = {
  succeed,
  fail,
  repair,
  get
}

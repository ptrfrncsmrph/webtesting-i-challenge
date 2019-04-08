export interface Item {
  name: string
  durability: number
  enhancement: number
}

export const succeed = (item: Item): Item => ({
  ...item,
  durability: item.durability + 1
})
export const fail = (item: Item): Item => ({ ...item })
export const repair = (item: Item): Item => ({ ...item, durability: 100 })
export const get = (item: Item): Item => ({ ...item })

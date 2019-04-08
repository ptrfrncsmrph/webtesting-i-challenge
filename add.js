// const add = (...args) => args.reduce((acc, x) => acc + x, 0)

// const add = (...args) =>
//   args.every(arg => typeof arg === "number")
//     ? args.reduce((acc, x) => acc + x, 0)
//     : (() => {
//         const ix = args.findIndex(x => typeof x !== "number")
//         throw new TypeError(
//           `Expected a number, received ${typeof args[ix]} (${JSON.stringify(
//             args[ix]
//           )}) at index ${ix}`
//         )
//       })()

const add = (n = 0, m, ...nums) => (m === undefined ? n : add(n + m, ...nums))

add()

add() //?
add(1) //?
add(1, 2) //?
add(1, 2, 4) //?
// add("a", 2) //?

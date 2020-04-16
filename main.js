function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    let capsArray = arr.map(ele => {
      if (typeof ele === "string") {
        return ele.toUpperCase()
      } else {
        reject("Not all items are strings.")
      }
    })
    resolve(capsArray)
  })
}

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    arr.forEach(el => {
      if (typeof el !== "string") {
        reject("Not all items are strings!")
      }
    });
    resolve(arr.sort())
  })
}
let arr = ["hello", "world", "i", "like", "coding"];

makeAllCaps(arr)
  .then(sortWords)
  .then(result => console.log(result))
  .catch(error => console.log(error))
let ages = [10,11,12,13,14,15,16,17,18,19,20,21,22,23]

let oldEnoughToBuyLotto = ages.filter((age) => {return age >=18 }) 

console.log(oldEnoughToBuyLotto);

let over18 = oldEnoughToBuyLotto.map((age) => {
let result = {}
result.age = age
result.display = 'Hooray! Your Old Enough to Gamble!'
return result })

console.log(over18);

//provide the ages as objects and include the message such as 
// '18 is old enough to buy lottery'
// filter
// map
// console.log the array of objects
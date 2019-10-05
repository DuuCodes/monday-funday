
function addOne (numberToAddTo) {
    if (numberToAddTo === undefined) {
throw new Error('You must provide a number to add to')
    }

    return numberToAddTo + 1
}
try{
    // failing to provide a number in an error
    let result = addOne() 
    console.log(result)
} catch (err) {
    console.log(err.message)


} catch {'You must provide a number to add to'} {
}
let result = addOne()
console.log(result)

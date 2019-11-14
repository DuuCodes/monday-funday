//require = ('dotenv').config()
// this can be tested using MY_MEM=Arrays node environment_varaible.js
const myArrays = process.env.MY_MEM || 'Arrays';
console.log('I remember ' + myArrays)

// I wont specify MY_FAV intentionally so I can see the default being used 
const filters = process.env.MY_FA || 'filter functions';
console.log('I really like the ' + filters)

// this can be called so that the defualt is used and also with a specific DB_Host
// MY_MEM=Arrays node environment_variables.js
//
const db_host = process.env.DB_Host || 'localhost';
console.log('Using database host: ' + db_host)
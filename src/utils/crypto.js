const bcrypt = require('bcrypt')

const hashPassword = (plainPassword)=>{
    return bcrypt.hashSync(plainPassword, 10)
}

//Return a boolean value
const comparePassword = (plainPassword, hashedPassword)=>{
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

//console.log(hashPassword('root'))

// console.log(
// 	comparePassword(
// 		'root',
// 		'$2b$10$yFB0sb6Y.uuAx8RSnHXA3OQoGEqCIwCChA35rBdCwKaqwDvvJFDZu'
// 	)
// );


module.exports = {
    hashPassword,
    comparePassword
}
const jwt=require('jsonwebtoken')

const secreKey='itemzbc'

function setToken(data){
    return jwt.sign(data,secreKey,{expiresIn:'1d'})
}

function verifyToken(token,fn){
   return jwt.verify(token,secreKey,fn)
}

module.exports={
    setToken,
    verifyToken
}
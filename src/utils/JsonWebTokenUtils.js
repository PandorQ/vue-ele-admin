import jwt from 'jsonwebtoken'
import keys from '../keys/keys'



const JsonWebTokenUtils = {
  sign(customClaim){
    return jwt.sign(customClaim,keys.priKey,keys.tokenConfig)
  },
  verifyToken (token){
    return jwt.verify(token,keys.pubKey,(err,decoded) =>{
       if(err){
         return err
       }
       return decoded
    });
  }
}

export default JsonWebTokenUtils
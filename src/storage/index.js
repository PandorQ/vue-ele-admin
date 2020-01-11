import store from 'store2'
import ConstVariable from '../constants'




const localStore ={
  clearItem:(key)=>{
    store.clear(key)
  },
  getItem:(key)=>{
    return store.get(key)
  },
  setItem:(key,value)=>{
    store.set(key,value)
  },
  setToken(token){
    this.setItem(ConstVariable.TOKEN_KEY,token)
  },
  getToken:()=>{
    return store.get(ConstVariable.TOKEN_KEY)
  },
  clearToken:()=>{
    
  }
}



export default localStore
import Mock from 'mockjs'
import api from '../api/index.js'


const Random = Mock.Random

Random.extend({
  token(){
    return Math.random().toString(36).substr(2);
  },
})


const user = Mock.mock({
  token: '@token'
})


Mock.mock( api.LOGIN,'POST',({body})=>{
  let res = {}
  const {account,password} = JSON.parse(body)

  if(account != 'admin@email' || password !== '1234qwer'){
      res.code = -1
      res.message = '账户名或密码错误（admin@email/1234qwer）'
  }else{
      res.code = 0
      res.message = '登录成功'
      res.data = {}
      res.data.user = user
  }
  return res;
})
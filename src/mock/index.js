import Mock from 'mockjs'
import UserInfo from './data/UserInfo'
import api from '../api/index.js'
import './extend'

// 设置全局延时
Mock.setup({
  timeout: '300-500'
})

const tokenData = Mock.mock({
  token: '@token'
})

Mock.mock(api.httpProfix + api.IMOOC_API.LOGIN, 'post', ({
  body
}) => {
  let res = {}
  const {
    account,
    password
  } = JSON.parse(body)

  if (account != UserInfo.account || password !== UserInfo.password) {
    res.code = -1
    res.message = '账户名或密码错误(admin123@qq.com/1234qwer)'
  } else {
    res.code = 0
    res.message = '登录成功'
    res.data = tokenData
  }
  return res;
})
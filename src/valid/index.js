/**校验规则 */
import {extend} from 'vee-validate'

extend('phoneOrEmailValid',value=>{
  let phoneRegex = /^1[345678]\d{9}$/;
  let emailRegex = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
  if(phoneRegex.test(value) || emailRegex.test(value)){
    return true;
  }
  return "电话号码或邮箱不合法！";
})

extend('passwordValid',{
  validate: value => {
    let passwordRegex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,8}$/;
    return passwordRegex.test(value);
  },
  message:"密码必须是6-8位，字母和数字组成"
})
import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'http://localhost:8080/back/api',
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求前，拦截请求进行操作
  return config;
}, error => {
  // 在请求错误时，需要回调的操作函数
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(response => {
  // 请求成功，对响应数据进行处理
  return response.date;
}, error => {
  // 服务器响应错误
  return Promise.reject(error);
})

export default instance
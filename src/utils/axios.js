import axios from "axios"

const baseURL="http://localhost:8090"
const instance = axios.create({
  baseURL,
  timeout: 7000,
  headers: {}
});


// 封装请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log("请求拦截器",config)
  config.headers.Authorization=localStorage.getItem('token')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 封装响应拦截器
instance.interceptors.response.use(function (res) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  let response=null
  if (res.status===200) {
    if(res.data) {
      let err = res.data.err
      if (err===0) {
        response = res.data.data||res.data
      } else if (err===1) {
        // 当token无效
        // window.location.href = '/'
        response=res.data
      } else { 
        // 用element交互提示框。。。。
      }
    }
  } else {
    console.log('调接口失败')
  }
  console.log("响应拦截器",response)
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance
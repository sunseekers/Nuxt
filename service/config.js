import http from 'http'
import https from 'https'
//这个axios里面的请求配置
export default {
  //自定义的请求头
  headers:{
    'X-Requested-With':'XMLHttpRequest',
    'X-Agent':'Juejin/Web'
  },
  //超时设置
  timeout:10000,
  //跨域是否带Token
  withCredentials:true,
  //响应数据的格式 json / blob /document /arraybuffer / text / stream
  responseType:'json',
  //XSRF 设置
  xsrfCookieName:'XSRF_TOKEN',
  xsrfHeaderName:"X-XSRF_TOKEN",
  //用于node.js
  httpAgent:new http.Agent({
    keepAlive:true
  }),
  httpsAgent:new https.Agent({
    keepAlive:true
  })
}

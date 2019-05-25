import axios from 'axios'
import config from './config'
if(process.server){
  config.baseURL = `http://${process.env.HOST||'localhost'}:${process.env.PORT||3000}`
}
const service = axios.create(config)
//请求设置
service.interceptors.request.use(
  config=>{
    return config
  },error=>{
    return Promise.reject(error)
  }
)
//返回状态判断
service.interceptors.response.use(
  res=>{
    return res.data
  },error=>{
    return Promise.reject(error)
  }
)

export default service
// export default {
//   post(url,data){
//     console.log(data)
//     return service({
//       methods:'post',
//       url,
//       params:data
//     })
//   },
//   get(url,data){
//     return service({
//       methods:'get',
//       url,
//       params:data
//     })
//   },
//   delete(url,data){
//     return service({
//       methods:'delete',
//       url,
//       params:data
//     })
//   }
// }

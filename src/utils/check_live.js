import axios from 'axios'

// 请求超时时间
axios.defaults.timeout = 10000

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use(function (config) {
  config.metadata = { startTime: new Date() }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    response.config.metadata.endTime = new Date()
    response.duration = response.config.metadata.endTime - response.config.metadata.startTime
    console.log(response, '获取响应数据-------')
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  (error) => {
    error.config.metadata.endTime = new Date()
    error.duration = error.config.metadata.endTime - error.config.metadata.startTime
    console.log(error, '获取响应数据2-----')
    if (error && error.code) {
      let res = {}
      res.code = error.code
      res.duration = error.duration + 'ms'
      res.msg = throwErr(error.code) //throwErr 捕捉服务端的http状态码 定义在utils工具类的方法
      console.log(res, 'llll----')
      return Promise.reject(res)
    }
    return Promise.reject(error)
  }
)

export default function request(method, url, data) {
  //暴露 request 给我们好API 管理
  method = method.toLocaleLowerCase() //封装RESTful API的各种请求方式 以 post get delete为例
  if (method === 'get') {
    return axios.get(url, { params: data })
  } else {
    return '请求方法错误'
  }
}

//axios捕错
export const throwErr = (code) => {
  let message = '请求错误'
  switch (code) {
    case 400:
      message = '请求错误'
      break
    case 401:
      message = '未授权，请登录'
      break
    case 403:
      message = '拒绝访问'
      break
    case 404:
      message = `请求地址出错`
      break
    case 408:
      message = '请求超时'
      break
    case 500:
      message = '服务器内部错误'
      break
    case 501:
      message = '服务未实现'
      break
    case 502:
      message = '网关错误'
      break
    case 503:
      message = '服务不可用'
      break
    case 504:
      message = '网关超时'
      break
    case 505:
      message = 'HTTP版本不受支持'
      break
    default:
  }
  return message
}

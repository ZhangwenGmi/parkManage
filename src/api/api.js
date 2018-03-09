//配置API接口地址
var root = '/api/v1'
//引用axios
var axios = require('axios')
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// // 请求拦截器
// axios.interceptors.request.use(function(config) {
//     return config;
//   }, function(error) {
//     return Promise.reject(error);
//   })
//   // 响应拦截器
// axios.interceptors.response.use(function(response) {
//   return response;
// }, function(error) {
//   return Promise.reject(error);
// })

//自定义判断元素类型JS
function toType(obj){
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function apiAxios(method,url,params,success,failure){
	if(params){
		params = filterNull(params)
	}
	axios({
		method:method,
		url:url,
		data:method === 'post' || method === 'put' ? params : null,
		params:method === 'get' || method === 'delete' ? params : null,
		//baseURL: root,
		responseType: 'json',
		withCredenttials:false
	})
	.then(function(res){
		if(success){
			success(res.data)
		}else{
			failure(res.data)
		}
		// if(res.data.success === true){
		// 	if(success){
		// 		success(res.data)
		// 	}
		// }else{
		// 	if(failure){
		// 		failure(res.data)
		// 	}else{
		// 		window.alert('error'+JSON.stringify(res.data))
		// 	}
		// }
	})
	.catch(function(err){
		let res = err.response
		// if(err){
		// 	window.alert('api error,HTTP CODE'+err.status)
		// }
	})
}

export default{
	get:function(url,params,success,failure){
		return apiAxios('get',url,params,success,failure)
	},
	post:function(url,params,success,failure){
		return apiAxios('post',url,params,success,failure)
	},
	put:function(url,params,success,failure){
		return apiAxios('put',url,params,success,failure)
	},
	delete:function(url,params,success,failure){
		return apiAxios('delete',url,params,success,failure)
	}
}
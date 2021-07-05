import fetch from "@/utils/axios.js"

export function fetchQqMusic(params){
  return fetch({
    url:"/soso/fcgi-bin/client_search_cp",
    method:"GET",
    params
  })
}
// 信息列表
export function fetchGoodList(params){
  return fetch({
      url:'/api/v1/good/list',
      method:'GET',
      params
  })
}


// 信息详情
export function fetchGoodInfo(params) {
  return fetch({
    url: '/api/v1/jd/good/detail',
    method: 'GET',
    params
  })
}

// 登录接口
export function fetchLogin(data){
  return fetch({
      url:'/api/v1/user/login',
      method:"POST",
      data
  })
}

// 注册接口中
// {username,password,password2}
export function fetchRegister(data){
  return fetch({
      url:'/api/v1/user/regist',
      method:'POST',
      data
  })
}

// 获取品类
export function fetchAllCates(params){
  return fetch({
      url:"/api/v1/good/cates",
      method:"GET",
      params
  })
}

// 删除信息
export function fetchGoodDel(params){
  return fetch({
      url:'/api/v1/good/delete',
      method:'GET',
      params
  })
}
// 新增
export function fetchGoodAddOrEdit(data){
  return fetch({
      url:'/api/v1/good/addOrEdit',
      method:"POST",
      data
  })
}


// 加入喜爱列表
export function fetchAddLove(data) {
  return fetch({
    url: '/api/v1/jd/cart/add',
    method: 'POST',
    data
  })
}

// 获取喜爱列表
export function fetchLoveList(params) {
  return fetch({
    url: '/api/v1/jd/cart/list',
    method: 'GET',
    params
  })
}

// 删除喜爱列表信息
// { id: 喜爱列表集合中文档的 _id }
export function fetchDelLove(params) {
  return fetch({
    url: '/api/v1/jd/cart/del',
    method: 'GET',
    params
  })
}


// 新增简历
export function fetchAddResume(data){
  return fetch({
      url:'/api/v1/good/addresume',
      method:"POST",
      data
  })
}

// 查询简历列表
export function fetchResumeList(params){
  return fetch({
    url:"/api/v1/good/resume/list",
    method:"GET",
    params
  })
}

// 查询简历详情
export function fetchResumeDetail(params){
  return fetch({
    url:"/api/v1/good/resume/detail",
    method:"GET",
    params
  })
}
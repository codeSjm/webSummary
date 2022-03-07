import request from '@/utils/request'
import store from "@/store";


//用户列表
export function  userList(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        url: '/sys/user',
        method: 'get',
        params: data
    })
}

//新增用户
export function  userAdd(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/sys/user',
        method: 'post',
        params: data
    })
}

//编辑用户
export function userEdit(data,id) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/sys/user/' + id,
        method: 'patch',
        params: data
    })
}

//删除用户
export function  userDelete(id) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/sys/user/'+ id,
        method: 'delete',
        // params: data
    })
}

//查询用户
export function  userSearch(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/sys/user/'+ data.id,
        method: 'get',
        // params: data
    })
}

export function  getUserDetail(query) {
  store.commit('SET_NEEDTOKEN',true);
  return request({
    headers: {'Content-Type': 'application/json; charset=UTF-8'},
    url: '/sys/user/'+ query,
    method: 'get',
    // params: data
  })
}

//自提周期设置
export function  pickDateSet(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/sys/config/'+ data.id,
        method: 'PATCH',
        params: data
    })
}

//用户登录状态
export function  userInfo(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        url: '/current',
        method: 'get',
        params: data
    })
}

//获取自提周期
export function  outDayGet(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/sys/config/'+ data.id,
        method: 'get',
        params: data
    })
}
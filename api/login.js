import request from '@/utils/request'
import store from "@/store";

/**
 * 登录接口
 * @param account
 * @param password
 */

export function login(data) {
    return request({
        url: '/admin/login',
        method: 'get',
        params: data
    })
}


//用户登录状态
export function  userInfo() {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        url: '/current',
        method: 'get',
    })
}


export function logoutSystem() {
    return request({
        url: '/logout',
        method: 'get'
    })
}












export function getToken(data) {
    store.commit('SET_NEEDTOKEN', false);
    return request({
        url: '/auth/getToken',
        method: 'post',
        params: data
    })
}


export function loginByUsername(account, loginPwd) {

    const data = {
        account,
        loginPwd
    }
    return request({
        url: '/sysUser/login',
        method: 'post',
        params: data
    })
}


export function logout() {
    store.commit('SET_NEEDTOKEN', true);
    return request({
        url: '/auth/logout',
        method: 'post'
    })
}

export function getUserInfo(token) {
    return request({
        url: '/sysUser/currentUser',
        method: 'post',
        params: {token}
    })
}

export function getSmsCode(data) {
    return request({
        url: '/user/getSmsCode',
        method: 'post',
        params: data
    })
}

export function getWxSignMsg(data) {
    return request({
        url: '/wx/api/getWxSignMsg.yw',
        method: 'post',
        params: data
    })
}

export function getUser(data) {
    return request({
        url: '/user/auth/getToken',
        method: 'post',
        params: data
    })
}


export function myInfo(data) {
    store.commit('SET_NEEDTOKEN', true);
    return request({
        url: '/user/myInfo',
        method: 'post',
        params: data
    })
}

export function changePwd(data) {
    store.commit('SET_NEEDTOKEN', true);
    return request({
        url: '/auth/changePwd',
        method: 'post',
        params: data
    })
}

export function forgetPwd(data) {
    store.commit('SET_NEEDTOKEN', false);
    return request({
        url: '/auth/forgetPwd',
        method: 'post',
        params: data
    })
}



import request from '@/utils/request'
import store from "@/store";


//兑换列表
export function  exchangeList(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        url: '/reward',
        method: 'get',
        params: data
    })
}

//新增兑换
export function  exchangeAdd(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/reward',
        method: 'post',
        params: data
    })
}

//编辑兑换
export function  exchangeEdit(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/reward',
        method: 'patch',
        params: data
    })
}

//删除兑换
export function  exchangeDelete(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/reward',
        method: 'delete',
        params: data
    })
}

//查询兑换
export function  exchangeSearch(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/reward/'+ data.id,
        method: 'get',
        // params: data
    })
}

//兑换订单填入快递单号
export function  deliveryInfo(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/reward/updateReward',
        method: 'post',
        params: data
    })
}
import request from '@/utils/request'
import store from "@/store";


//兑换列表
export function  integralList(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        url: '/point',
        method: 'get',
        params: data
    })
}

//积分变更
export function  integralEdit(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/point',
        method: 'post',
        params: data
    })
}
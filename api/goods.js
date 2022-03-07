
import request from '@/utils/request'
import store from "@/store";


//商品列表
export function  goodsList(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        url: '/product',
        method: 'get',
        params: data
    })
}

//新增商品
export function  goodsAdd(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/product',
        method: 'post',
        params: data
    })
}

//编辑商品
export function  goodsEdit(data,id) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/product/' + id,
        method: 'patch',
        params: data
    })
}

//删除商品
export function  goodsDelete(id) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/product/' + id,
        method: 'delete',
        // params: data
    })
}

//查询商品
export function  goodsSearch(data) {
    store.commit('SET_NEEDTOKEN',true);
    return request({
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        url: '/product',
        method: 'get',
        params: data
    })
}

//查询商品详情
export function goodsDetail(id) {
  store.commit('SET_NEEDTOKEN',true);
  return request({
    headers: {'Content-Type': 'application/json; charset=UTF-8'},
    url: '/product/' + id,
    method: 'get',
    // params: data
  })
}

//上传图片
export function  uploadFile(data) {
  store.commit('SET_NEEDTOKEN',true);
  return request({
    headers: {'Content-Type': 'multipart/form-data;'},
    url: '/product/uploadFile',
    method: 'post',
    data: data
  })
}


//接口请求函数的模块
//每个函数返回的都是promise对象


 

import ajax from './ajax'
const qs = require('qs');

export const reqHome = () => ajax('/home')

export const reqCategory = () => ajax('/category')

export const reqCategoryList = ()=> ajax('/categoryList')
//网易数据
export const reqThingsNav = () => ajax('/api/topic/v1/find/getTabs.json')//things的导航数据
export const reqThingscontent = () => ajax('/api/topic/v1/find/recManual.json')//things的列表内容
export const reqSearchInitialData = () => ajax('/api/xhr/search/init.json')//搜索的初始化显示数据
export const reqThingsSearch = (keywordPrefix) => ajax('/api/xhr/search/searchAutoComplete.json?csrf_token=29c2d6669c619d172a33deb5c6c9a837', qs.stringify({keywordPrefix}) ,'POST')// 搜索内容
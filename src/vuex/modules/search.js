import {RECEVE_HOTSEARCH} from '../mutation_types'
import {reqSearchInitialData} from '../../api'
const state={

    hotSearch:[]

}
const mutations={
    [RECEVE_HOTSEARCH](state,data){
        state.hotSearch = data
    }
}
const actions={
   async getHome({commit}){
        const result = await reqSearchInitialData('/search')
        commit(RECEVE_HOTSEARCH,result.data)
    }

}
const getters={

}
export default {
    state,
    mutations,
    actions,
    getters
  }
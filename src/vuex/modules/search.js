import {RECEVE_HOTSEARCH} from '../mutation_types'
import {reqHome} from '../../api'
const state={

    hotSearch:{}

}
const mutations={
    [RECEVE_HOTSEARCH](state,data){
        state.hotSearch = data
    }
}
const actions={
   async getHome({commit}){
        const result = await reqHome('/search')
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
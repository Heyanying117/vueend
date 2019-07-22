import {RECEIVE_CATEGORY} from '../mutation_types'
import {reqCategory} from '../../api'
const state={
    category:{}

}
const mutations={
    [RECEIVE_CATEGORY](state,data){
        state.category = data
    }
}
const actions={
   async getcategory({commit},callback){
       const result = await reqCategory('/category')
        commit(RECEIVE_CATEGORY, result.data)
       callback()
      
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
import {RESERVE_THINGSNAV,RESERVE_THINGSCONTENT} from '../mutation_types'
import {reqThingsNav,reqThingscontent} from '../../api'


const state= {
    ThingNav:[],
    thingContent:[]
}

const mutations= {
    [RESERVE_THINGSNAV](state,data){
        state.ThingNav = data
    },
    [RESERVE_THINGSCONTENT](state,data){
        state.thingContent = data
    }
    
}
const getters= {
    
}
const actions= {
  async  getThingNav({commit},callback){
        const result = await reqThingsNav()
        commit(RESERVE_THINGSNAV,result.data)
        callback()
    },
    async getThingContent({commit}){
        const result = await reqThingscontent()
        commit(RESERVE_THINGSCONTENT,result.data)
        
    }
}



export default{
    state,
    mutations,
    getters,
    actions
}
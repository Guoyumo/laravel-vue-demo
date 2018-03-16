import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        count:0,
        category:[
            {id:0,name:'mobile',checked:false},
            {id:1,name:'pant',checked:false},
            {id:2,name:'Shirt',checked:false},
            {id:3,name:'Shock',checked:false},
            {id:4,name:'Shoe',checked:false}
        ],
    },
    mutations:{
        increment(state){
            state.count++
        }
    }
})

export default store
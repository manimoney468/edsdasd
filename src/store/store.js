
import { createStore } from 'vuex';

export const store = createStore({
    strict: true,
    state: {
        test: 0,
    },
        
    getters: {
        // Define any getters here as needed
        test(){
            return this.state.test;
        }

    },
    mutations: {
        // Define mutations here if needed
       testMut(state){
        console.log(' inside testMut')
        state.test++
        console.log(state.test)

       }
    },
    actions: {
        actionMethod(context) {
            console.log('actionMethod')
            context.commit('testMut')
        }
    }
});

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


let store = new Vuex.Store({
    state: {
        questions: [],
        isDone:false
    },
    mutations: {
        SET_QUESTIONS_TO_STATE: (state, questions) => {
            state.questions = questions;
        }
    },
    actions: {
        GET_QUESTIONS_FROM_API({commit}) {
            return axios('http://localhost:8080/api/question', {
                method: "GET"
            })
                .then((questions) => {
                    commit('SET_QUESTIONS_TO_STATE', questions.data);
                    return questions.data;
                })
                .catch((err) => {
                    console.log(err);
                    return err;
                })
        }
    },
    getters: {
        QUESTIONS(state) {
            return state.questions;
        },
        IS_DONE(){

        }
    }
});


export default store;





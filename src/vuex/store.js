import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const BASE_URL = 'http://online.uztipi.uz:3000';

let store = new Vuex.Store({
    state: {
        questions: [],
        isDone: false,
        userId: '',
        examId: '',
        score: 0,

    },
    mutations: {
        SET_QUESTIONS_TO_STATE: (state, data) => {
            state.questions = data.questions;
            state.questions.map(function (e) {
                e['isSelected'] = false;
            });
            state.userId = data.user_id;
            state.examId = data.exam_id;
            state.score = data.score;

        },

    },
    actions: {
        GET_QUESTIONS_FROM_API() {
            return axios(BASE_URL + '/api/question', {
                method: "GET"
            })
                .then((questions) => {
                    // commit('SET_QUESTIONS_TO_STATE', questions.data);
                    return questions.data;
                })
                .catch((err) => {
                    console.log(err);
                    return err;
                })
        },

        POST_QUESTIONS_FROM_API({commit}, user) {
            console.log(user, 'user');
            return axios(BASE_URL + '/api/question/exam', {
                method: "POST",
                data: user
            })
                .then((questions) => {
                    commit('SET_QUESTIONS_TO_STATE', questions.data);
                    return questions.data;
                })
                .catch((err) => {
                    console.log(err);
                    return err;
                })
        },

        POST_ANSWER_TO_BACK() {
            return axios(BASE_URL + '/api/question/exam', {
                method: "POST",
                body: {
                    "content": "How old are you?",
                    "answer": "24",
                    "option_1": "20",
                    "option_2": "21",
                    "option_3": "6",
                    "lang": "en"
                }
            })
        }

    },
    getters: {
        QUESTIONS(state) {
            return state.questions;
        },
        isDone(state) {
            return state.isDone;
        },

        getUserId(state) {
            return state.userId;
        },

        getExamId(state) {
            return state.examId;
        },

        getScore(state) {
            return state.score;
        }

    }
});


export default store;





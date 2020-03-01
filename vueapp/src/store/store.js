import Vue from 'vue';
import Vuex from "vuex";
const firebase = require('../firebaseConfig.js')

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        user: null,
        games: []
    },
    mutations: {
        ['SET_GAMES'](state, payload) {
            state.games = payload.games;
        },
        ['SET_TEAM_IN_GAME_IN_GAMES'](state, payload) {
            state.games[payload.gamesIndex].teams[payload.teamIndex] = payload.teamId;
        },
        ['SET_WINNER_IN_GAME_IN_GAMES'](state, payload) {
            state.games[payload.gamesIndex].winner = payload.winnerId;
        },
        ['SET_USER'](state, payload){
            state.user = payload;
        }
    },
    actions: {
        async getGames({ commit }){
            try {
                //axios GET all games
                const response = [];
                commit({
                    type: 'SET_GAMES',
                    games: response.data
                });
                return Promise.resolve(response);
            } catch(error) {
                return Promise.reject(error);
            }
        },
        async setGameWinner({ commit }, payload) {
            //axios POST game winner {gameId, teamId}
            //const response = {};

            commit({
                type: 'SET_TEAM_IN_GAME_IN_GAMES',
                gamesIndex: payload.gameId,
                winnerId: payload.winnerId
            });
        },
        async setTeamPickInGame({ commit }, payload) {
            //axios POST team winner pick (userId, teamId, gameId)
            //const response = {};

            commit({
                type: 'SET_TEAM_IN_GAME_IN_GAMES',
                gamesIndex: payload.gameId,
                winnerId: payload.winnerId
            });
        },
        async postNewUser({ commit }, payload) {
            try {
                //post new sign up
                firebase.auth.createUserWithEmailAndPassword(payload.email, payload.password)
                    .then(
                        user => {
                            const newUser = {
                                id: user.uid
                            };
                            commit('SET_USER', newUser);
                        }
                    );
                return Promise.resolve(200);
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async postLogin({ commit }, payload) {
            try {
                //post login
                payload;
                commit('setUser', {id:-1})
                const response = {};
                return Promise.resolve(response);
            } catch (error) {
                return Promise.reject(error);
            }
        }
    },
    getters: {
        user (state) {
            return state.user;
        }
    }
});
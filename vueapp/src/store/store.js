import Vuex from "vuex";
export default new Vuex.Store({
    state:{
        games: []
    },
    mutations: {
        ['SET_GAMES'](state, payload) {
            state.games = payload.games;
        },
        ['SET_TEAM_IN_GAME_IN_GAMES'](state, payload) {
            state.games[payload.gamesIndex].teams[payload.teamIndex] = payload.teamId;
        }
    },
});
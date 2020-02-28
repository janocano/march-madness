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
        },
        ['SET_WINNER_IN_GAME_IN_GAMES'](state, payload) {
            state.games[payload.gamesIndex].winner = payload.winnerId;
        },
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
            const response = {};

            commit({
                type: 'SET_TEAM_IN_GAME_IN_GAMES',
                gamesIndex: payload.gameId,
                winnerId: payload.winnerId
            });
        },
        async setTeamPickInGame({ commit }, payload) {
            //axios POST team winner pick (userId, teamId, gameId)
            const response = {};

            commit({
                type: 'SET_TEAM_IN_GAME_IN_GAMES',
                gamesIndex: payload.gameId,
                winnerId: payload.winnerId
            });
        },
    }
});
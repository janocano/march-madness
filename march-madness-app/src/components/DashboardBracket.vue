<template>
    <div class="bracket">
        <template v-for="(round, index) in rounds">
            <div class="round" :key="index" :class="['round-' + round]">
                <template v-for="(match, matchIndex) in round">
                    <div class="match" :key="matchIndex"><bracket-game-node class="match__content" :game="getGameForBracket(matchIndex, index)"/></div>
                </template>
            </div>
        </template>
    </div>
</template>
<script>
import BracketGameNode from "./BracketGameNode.vue";
export default {
    components: {
        BracketGameNode
    },
    props: {
        matchStyle: {
            type: Object,
            default: () => ({
            border: '2px solid green',
            width: '100%',
            height: '30px',
            position: 'relative'
            })
      }
    },
    data() {
        return {
            rounds: [4, 2, 1],
            testGames: [
                {
                    id: 1,
                    first_team: {
                        id: 1,
                        name: "ASU",
                    },
                    second_team: {
                        id: 2,
                        name: "Duke",
                    },
                    winner_id: 1
                },
                {
                    id: 2,
                    first_team: {
                        id: 3,
                        name: "North Carolina",
                    },
                    second_team: {
                        id: 4,
                        name: "Bulldogs",
                    },
                    winner_id: 4
                },
                {
                    id: 3,
                    first_team: {
                        id: 5,
                        name: "Cavaliers",
                    },
                    second_team: {
                        id: 6,
                        name: "Loyola Chicago",
                    },
                    winner_id: 5
                },
                {
                    id: 4,
                    first_team: {
                        id: 7,
                        name: "Minesota",
                    },
                    second_team: {
                        id: 8,
                        name: "ST Baarts",
                    },
                    winner_id: 7
                },
                {
                    id: 5,
                    first_team: {
                        id: 1,
                        name: "ASU",
                    },
                    second_team: {
                        id: 4,
                        name: "Bulldogs",
                    },
                    winner_id: 1
                },
                {
                    id: 6,
                    first_team: {
                        id: 5,
                        name: "Cavaliers",
                    },
                    second_team: {
                        id: 7,
                        name: "Minesota",
                    },
                    winner_id: 5
                },
                {
                    id: 7,
                    first_team: {
                        id: 1,
                        name: "ASU",
                    },
                    second_team: {
                        id: 5,
                        name: "Cavaliers",
                    },
                    winner_id: 1
                },
            ]
        };
    },
    methods: {
        /**
         * Calculates which game to return depending on which round we are in and which match in the round we are at.
         * @param {Number} matchIndex
         * @param {Number} roundIndex
         * @returns {Object}
         */
        getGameForBracket(matchIndex, roundIndex) {
            if (roundIndex === 0) {
                return this.testGames[matchIndex];
            } 
            let totalPrevMatches = 0;
            for (let i = 0; i < roundIndex; i++) {
                totalPrevMatches = totalPrevMatches + this.rounds[i];
            }
            return this.testGames[totalPrevMatches + matchIndex];
        }
    }
}
</script>
<style scoped>
.bracket {
    margin: 10px;
    padding: 20px;
    background-color: #566472;
    border-radius: 5px;
}
*,
    .bracket {
        display: flex;
    }
    .round {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }
    .round:first-child .match::before {
        display: none;
    }
    .round:first-child .match__content::before {
        display: none;
    }
    .round:last-child .match::after {
        display: none;
    }
    .match {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 10px;
        padding: 6px 0;
        flex-grow: 1;
        position: relative;
    }
    .match::before {
        content: "";
        display: block;
        min-height: 30px;
        border-left: 2px solid purple;
        position: absolute;
        left: -10px;
        top: 50%;
        margin-top: -15px;
        margin-left: -2px;
    }
    .match:nth-child(odd)::after {
        content: "";
        display: block;
        border: 2px solid transparent;
        border-top-color: purple;
        border-right-color: purple;
        height: 50%;
        position: absolute;
        right: -10px;
        width: 10px;
        top: 50%;
    }
    .match:nth-child(even)::after {
        content: "";
        display: block;
        border: 2px solid transparent;
        border-bottom-color: purple;
        border-right-color: purple;
        height: 50%;
        position: absolute;
        right: -10px;
        width: 10px;
        bottom: 50%;
    }
    .match__content::before {
        content: "";
        display: block;
        width: 10px;
        border-bottom: 2px solid purple;
        margin-left: -2px;
        position: absolute;
        top: 50%;
        left: -10px;
    }
</style>
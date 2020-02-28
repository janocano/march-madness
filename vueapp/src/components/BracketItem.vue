<template>
    <div 
        class="bracketItem"
        @click="chooseWinner()"
    >
        {{ team.name }}
    </div>
</template>
<script>
export default {
    props: {
        gameId: {
            type: Number,
            required: true
        },
        team: {
            type: Object,
            required: true,
            validator(team) {
                return Object.prototype.hasOwnProperty.call(team, "id") && Object.prototype.hasOwnProperty.call(team, "name");
            }
        }
    },
    methods: {
        chooseWinner() {
            //set winner of gameId to team.id
            //set team1 of next corresponding game
        }
    }
    
}
</script>
<style scoped>
.bracketItem{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 100px;
    background-color: #e6e6e6;
    font-size: 12px;
    font-style: italic;
    font-weight: 700;
    color: #000;
}

</style>
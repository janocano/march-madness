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
            validator(value) {
                return value.hasOwnProperty('id') && value.hasOwnProperty('name');
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
    height: 20px;
    width: 100px;
    background-color: #fff;
    font-size: 12px;
    font-style: italic;
    color: #000;
}

</style>
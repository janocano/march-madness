<template>
    <div class="gameNode">
        <bracket-item :team="game.first_team" :is-correct="checkIfWinner(game.first_team)"/>
        <div class="gameNode__line" />
        <bracket-item :team="game.second_team" :is-correct="checkIfWinner(game.second_team)"/>
    </div>
</template>
<script>
import BracketItemAbstract from "./BracketItemAbstract.vue";
export default
{
    components: {
        BracketItem
    },
    props: {
        game: {
            type: Object,
            required: false,
            validator(game) {
                return Object.prototype.hasOwnProperty.call(game, "id") 
                    && Object.prototype.hasOwnProperty.call(game, "first_team")
                    && Object.prototype.hasOwnProperty.call(game, "second_team");
            }
        }
    },
    
}
</script>
<style scoped>
.gameNode{
    display: flex;
    flex-direction: column;
}
.gameNode__line {
    border: solid 1px #000;
}

</style>
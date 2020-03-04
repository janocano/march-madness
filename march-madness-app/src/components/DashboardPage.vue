<template>
    <div id="dashboardPage">
       <!-- navbar -->
       <!-- content -->
        <bracket-game-node :game="testGame" />
    </div>
</template>
<script>
import BracketGameNode from "./BracketGameNode.vue";
export default {
    components: {
        BracketGameNode
    },
    data() {
        return {
            testGame: {
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
            }
        };
    },
    
    
}
</script>
<style scoped>

</style>
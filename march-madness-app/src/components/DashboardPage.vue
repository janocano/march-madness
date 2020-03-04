<template>
    <div id="dashboardPage">
       <!-- navbar -->
       <!-- content -->
        <bracket-view-only />
    </div>
</template>
<script>
import BracketViewOnly from "./BracketViewOnly.vue";
export default {
    components: {
        BracketViewOnly
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
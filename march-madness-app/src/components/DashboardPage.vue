<template>
    <div id="dashboardPage" class="dashboard">
        
       
        <div class="dashboard__content">
            <dashboard-standings />
            <dashboard-bracket />
        </div>
    </div>
</template>
<script>
import DashboardBracket from "./DashboardBracket.vue";
import DashboardStandings from "./DashboardStandings.vue";
export default {
    components: {
        DashboardBracket,
        DashboardStandings
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
.dashboard__content {
    display: flex;
    flex-direction: row;
}

</style>
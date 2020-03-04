<template>
    <div id="dashboardPage" class="dashboard">

        <base-navbar :links="testLinks" />
        <div class="dashboard__content">
            <dashboard-standings />
            <dashboard-bracket />
        </div>
    </div>
</template>
<script>
import BaseNavbar from "./BaseNavbar.vue";
import DashboardBracket from "./DashboardBracket.vue";
import DashboardStandings from "./DashboardStandings.vue";
export default {
    components: {
        BaseNavbar,
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
            },
            testLinks: [
                {
                    title: "Dashboard",
                    isActive: true,
                    url: "/dashboard"
                },
                {
                    title: "Profile",
                    isActive: false,
                    url: "/profile"
                },
                {
                    title: "Picks",
                    isActive: false,
                    url: "/picks"
                },

            ]
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
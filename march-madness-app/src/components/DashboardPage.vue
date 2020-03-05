<template>
    <div id="dashboardPage" class="dashboard">

        <base-navbar :links="testLinks" />
        <base-button class="baseButton--margin" type="default" @click.native="handleLogout()">
            <template slot="text">
                logout
            </template>
        </base-button>
        <div class="dashboard__content">
            <dashboard-standings />
            <dashboard-bracket />
        </div>
    </div>
</template>
<script>
import BaseButton from "./BaseButton.vue";
import BaseNavbar from "./BaseNavbar.vue";
import DashboardBracket from "./DashboardBracket.vue";
import DashboardStandings from "./DashboardStandings.vue";
export default {
    components: {
        BaseButton,
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
    computed: {
        user() {
            return this.$store.getters.user
        }
    },
    watch: {
        user(value) {
            if(value === null || value === undefined){
                //sign up complete, redirect
                this.$router.push('/');
            }
        }
    },
    methods: {
        async handleLogout() {
            try {
                await this.$store.dispatch("postLogout");
            } catch (error) {
                alert(error);
            }
        }
    }

    
}
</script>
<style scoped>
.dashboard__content {
    display: flex;
    flex-direction: row;
}

.baseButton--margin {
    margin: 10px auto;
    justify-self:flex-end;
}

</style>
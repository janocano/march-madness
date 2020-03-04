<template>
    <div id="dashboardPage">
        NEED TO VALIDATE THE USER FOR THIS PAGE ??
        <base-button class="baseButton--margin" type="default" @click.native="handleLogout()">
            <template slot="text">
                logout
            </template>
        </base-button>
    </div>
</template>
<script>
import BaseButton from "./BaseButton.vue";
export default {
    components: {
        BaseButton
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
#dashboardPage {
    height: 700px;
    width: 400px;
    background-color: red;
}
.baseButton--margin {
    margin: 10px auto;
    justify-self:flex-end;
}

</style>
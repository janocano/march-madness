<template>
    <div id="homePage">
        <home-page-button class="loginButton" @click.native="goToLoginPage()">
            <template slot="text">
                Login
            </template>
        </home-page-button>
    </div>
</template>
<script>
import HomePageButton from "./HomePageButton.vue";
export default {
    components: {
        HomePageButton
    }, 
    methods: {
        goToLoginPage() {
            this.$router.push('login');
        }
    }
};
</script>
<style scoped>
.loginButton {
    
}

</style>
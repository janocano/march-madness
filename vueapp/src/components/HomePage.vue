<template>
    <div id="homePage">
        <base-button class="loginButton" @click.native="goToLoginPage()">
            <template slot="text">
                Login
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
    methods: {
        goToLoginPage() {
            this.$router.push('login');
        }
    }
};
</script>
<style scoped>

</style>
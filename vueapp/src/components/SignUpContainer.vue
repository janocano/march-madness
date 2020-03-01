<template>
    <div class="signUp">
        <input v-model="username" placeholder="username">
        <input v-model="password" placeholder="password">
        <base-button type="purple" @click.native="handleLogin()">
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
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        handleLogin() {

        }
    }
}
</script>
<style scoped>
.signUp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    margin: 40px auto;
    padding: 40px;
    background-color: #566472;
    border-radius: 5px;

}
</style>
<template>
    <div class="signUp">
        <div class="signUp__title">
            sign up form
        </div>
        <div class="signUp__info">
            hey! fill out this super easy form to sign up for the march madness family challenge this year.
        </div>
        <base-input-field class="baseInput--margin" v-model="username" placeholder-text="username" />
        <base-input-field class="baseInput--margin" v-model="password" placeholder-text="password" />
        <base-input-field class="baseInput--margin" v-model="signUpKey" placeholder-text="sign up key" />
        <base-button class="baseButton--margin" type="purple" @click.native="handleSignUp()">
            <template slot="text">
                sign me up!
            </template>
        </base-button>
    </div>
</template>
<script>
import BaseButton from "./BaseButton.vue";
import BaseInputField from "./BaseInputField.vue";
export default {
    components: {
        BaseButton,
        BaseInputField
    },
    data() {
        return {
            username: "",
            password: "",
            signUpKey: ""
        };
    },
    methods: {
        async handleSignUp() {
            let data = {
                username: this.username,
                password: this.password,
                signUpKey: this.signUpKey
            };
            try {
                const response = await this.$store.dispatch("postNewUser", data);
                this.$router.go("/dashboard");
            } catch (error) {
                alert("Whoops! There was an error signing up up :(");
            }
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
.signUp__title {
    align-self: center;
    margin: 10px;
    padding: 5px;
    border: solid 4px #cfbae5;
    font-size: 30px;
    font-weight: 900;
    font-style: italic;
}
.signUp__info {
    align-self: center;
    margin: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    font-style: italic;
}
.baseInput--margin {
    margin: 10px auto;
}
.baseButton--margin {
    margin: 10px auto;
    justify-self:flex-end;
}
</style>
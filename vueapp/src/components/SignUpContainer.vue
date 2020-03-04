<template>
    <div class="signUp">
        <div class="signUp__title">
            sign up form
        </div>
        <div class="signUp__info">
            hey! fill out this super easy form to sign up for the march madness family challenge this year.
        </div>
        <div class="signUp__info">
            password must be at least 8 characters
        </div>
        <base-input-field class="baseInput--margin" v-model="email" placeholder-text="email" />
        <base-password-field class="baseInput--margin" v-model="password" placeholder-text="password" />
        <base-password-field class="baseInput--margin" v-model="confirmPassword" placeholder-text="confirm password" />
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
import BasePasswordField from "./BasePasswordField.vue";
export default {
    components: {
        BaseButton,
        BaseInputField,
        BasePasswordField
    },
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
            signUpKey: ""
        };
    },
    computed: {
        user() {
            return this.$store.getters.user
        }
    },
    watch: {
        user(value) {
            if(value !== null && value !== undefined){
                //sign up complete, redirect
                this.$router.push('/dashboard');
            }
        }
    },
    methods: {
        async handleSignUp() {
            //make sure both passwords are equal
            if(this.confirmPassword.length < 8){
                alert("Password is too short, please make it at least 8 characters");
                return;
            }
            if(this.confirmPassword !== this.password){
                alert("Passwords don't match");
                return;
            }

            //TODO: add check for signup key (can be a env var)

            let data = {
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword,
                signUpKey: this.signUpKey
            };
            data;
            try {
                await this.$store.dispatch("postNewUser", data);
            } catch (error) {
                alert("Whoops! There was an error signing up up :(");
                alert(error);
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
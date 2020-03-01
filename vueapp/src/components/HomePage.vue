<template>
    <div id="homePage">
        <div class="homePage__bigButton homePage__bigButton--orange" @click="goToLoginPage()">
            Login
        </div>
        <div class="homePage__bigButton homePage__bigButton--purple" @click="goToSignUpPage()">
            Sign up
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goToLoginPage() {
            this.$router.push('login');
        },
        goToSignUpPage() {
            this.$router.push('signup');
        }
    }
};
</script>
<style scoped>
#homePage {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.homePage__bigButton {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 400px;
    margin: 20px;
    border-radius: 5px 30% 5px 30%;
    font-size: 80px;
    font-weight: 900;
    font-style: italic;
}
.homePage__bigButton--orange {
    border: solid 5px#ffb26d;
    background-color: #ffcda0;
    color: #66574a;
}
.homePage__bigButton--orange:hover {
    background-color: #e5b890;
    cursor: pointer;
}
.homePage__bigButton--purple {
    border: solid 5px#a594b7;
    background-color:#cfbae5;
    color: #524a5b;
}
.homePage__bigButton--purple:hover {
    background-color: #baa7ce;
    cursor: pointer;
}

</style>
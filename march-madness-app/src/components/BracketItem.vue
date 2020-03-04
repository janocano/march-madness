<template>
    <div 
        class="bracketItem"
        :class="{
            'bracketItem--green': isCorrect,
            'bracketItem--red': isIncorrect
        }"
    >
        {{ team.name }}
    </div>
</template>
<script>
export default {
    props: {
        team: {
            type: Object,
            required: true,
            validator(team) {
                return Object.prototype.hasOwnProperty.call(team, "id") && Object.prototype.hasOwnProperty.call(team, "name");
            }
        },
        isCorrect: {
            type: Boolean,
            required: false,
            default: false
        },
        isIncorrect: {
            type: Boolean,
            required: false,
            default: false
        }
    },
}
</script>
<style scoped>
.bracketItem{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 100px;
    background-color: #e6e6e6;
    font-size: 12px;
    font-style: italic;
    font-weight: 700;
    color: #000;
}
.bracketItem--green{
    background-color: greenyellow;
}
.bracketItem--red{
    background-color: red;
}

</style>
<template>
    <input class="baseInput" :placeholder="placeholderText"/>
</template>
<script>
export default {
    props: {
        placeholderText: {
            type: String,
            required: false,
            default: ""
        }
    }
}
</script>
<style scoped>
.baseInput{
    border: solid 2px #e6e6e6;
    border-radius: 2px;
    font-size: 14px;
    padding: 10px;
}
</style>
<template>
    <div class="bigButton">
        <slot name="text"></slot>
    </div>
</template>
<script>
export default {
    props: {
        color: {
            type: String,
            required: false,
            default: "peachpuff"
        }
    }
}
</script>
<style scoped>
.bigButton {
    height: 300px;
    font-size: 30px;
    font-weight: bold;
    border: solid 5px peru;
    border-radius: 5px 10px 5px 10px;
}
</style>
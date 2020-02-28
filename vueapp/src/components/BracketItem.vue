<template>
    <div 
        class="bracketItem"
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
            validator(value) {
                return value.hasOwnProperty('id') && value.hasOwnProperty('name');
            }
        }
    },
    
}
</script>
<style scoped>
.bracketItem{
    height: 20px;
    width: 100px;
    background-color: #fff;
    font-size: 12px;
    font-style: italic;
    color: #000;
}

</style>
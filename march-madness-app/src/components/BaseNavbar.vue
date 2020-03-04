<template>
    <div class="navbar">
        <div v-for="link in links" :key="link.title" class="navbar__item" :class="{'navbar__item--active': link.isActive}">
            {{ link.title }}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        links: {
            type: Array
        }
    }
}
</script>
<style scoped>
.navbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: black;
}
.navbar__item {
    width: 40px;
    font-size: 16px;
    font-weight: 500;
    color: peachpuff; 
}
.navbar__item:hover {
    opacity: 0.6;
}
.navbar__item--active {
    background-color:slategray;
    font-style: italic;
}
</style>
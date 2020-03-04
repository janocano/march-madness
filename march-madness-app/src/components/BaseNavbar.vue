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
    background-color: #6b5c57;
}
.navbar__item {
    width: 84px;
    height: 100%;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 800;
    color: peachpuff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.navbar__item:hover {
    background-color: rgba(72, 45, 45, 0.6);
}
.navbar__item--active {
    background-color:slategray;
    font-style: italic;
    font-weight: 800;
}
</style>
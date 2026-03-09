<template>
    <div>
        <h3>{{ topping.name }}</h3>

    <img :src="topping.image" />

   <p>{{ topping.price }}</p>
    </div>
</template>

<script setup>

        
defineProps({
    topping: { 
    type: Object,
    required: true
}
})


</script>

<style lang= scoped>
div {
    display: flex;
}
</style>

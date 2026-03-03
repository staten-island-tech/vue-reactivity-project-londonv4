import { ref } from 'vue'
<template>
    <div>
        <h2>{{ iceCream.flavor }}</h2>

    <img :src="iceCream.image" />

   <h1>Toppings: {{ iceCream.toppings }}</h1>
  <

<script setup>

    
</script>

    </div>
</template>

<script>
export default {
    setup () {
        
defineProps({
  iceCream: {
    type: Object,
    required: true
  }
})
        return {}
    }
}
</script>

<style lang= scoped>

</style>

<script setup>

</script>

<style lang= scoped>

</style>


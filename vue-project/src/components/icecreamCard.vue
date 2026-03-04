import { ref } from 'vue'
<template>
    <div>
        <h2>{{ icecream.flavor }}</h2>

    <img :src="icecream.image" />

   <h1>Toppings: {{ icecream.toppings }}</h1>
  <

    </div>

<script setup>
export default {
  props: ['title'],
  setup(props) {
    console.log(props.title)
  }
}
        
defineProps({
  iceCream: {
    type: Object,
    required: true
  }
})






        return {}
  
</script>
</template>
<style lang= scoped>
div {
    display: flex;
}
</style>

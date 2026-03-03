<template>
    <div>
icecreamCard v-for="icecream in icecreams" :key="icecream.id">
  {{ icecream }}
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { AnimalCard } from '@/components/xx.vue';
const icecreams = ref([
  { id: 1, flavor: 'Chocolate', price: 3.99 },
  { id: 2, flavor: 'Strawberry', price: 3.99 },
  { id: 3, flavor: 'Mint', price: 3.99 },

]

</script>

<style lang= scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
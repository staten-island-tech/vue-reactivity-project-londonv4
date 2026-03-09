<template>
  <div>

    <h1>Make Ice Cream</h1>
<div class= "somestuff">
    <img src="/src/assets/cone.png">
    <h2>Total: ${{ total }}</h2>
</div>



    <div class= "IcecreamCard">
      <li v-for="topping in toppings"
      :key="topping.name"
      :topping="topping">
      <h3>{{ topping.name }}</h3>
      <img :src="topping.img">
      <p>${{ topping.price}}</p>
      <button @click="addTopping(topping)">add to cone</button>
      <button @click="removeTopping(topping)">remove from cone</button>


    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import icecreamCard from '@/components/icecreamCard.vue'
import icecreamCone from '@/components/icecreamCone.vue'

const toppings = ref([
  { name: "Chocolate Scoop", price: 3, image: "" },
  { name: "Strawberry Scoop", price: 3 },
  { name: "Sprinkles", price: 1 },
  { name: "Gummy Bears", price: 1 }
])

const total = ref(0)

function addTopping(topping){
cone.value.push(topping)
  total.value += topping.price
}

function removeTopping(topping){
cone.value= cone.filter(topping=> {t => !==topping)
}
  total.value -= topping.price
}
</script>


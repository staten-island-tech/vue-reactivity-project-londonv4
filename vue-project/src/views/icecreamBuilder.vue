<template>
  <div>

    <h1>Make Ice Cream</h1>
<div class= "somestuff">
    <img src="https://static.vecteezy.com/system/resources/previews/044/651/294/non_2x/empty-waffle-cone-ready-for-ice-cream-png.png">
    <h2>Total: ${{ total }}</h2>
</div>



    <div class= "IcecreamCard">
      <ul>
      <li v-for="topping in toppings"
      :key="topping.name">
      <h3>{{ topping.name }}</h3>
      <img :src="topping.image">
      <p>${{ topping.price}}</p>
      <button @click="addTopping(topping)">add to cone</button>
      <button @click="removeTopping(topping)">remove from cone</button>
    </li>
  </ul>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IcecreamCard from '@/components/IcecreamCard.vue'
import IcecreamCone from '@/components/IcecreamCone.vue'

const toppings = ref([
  { name: "Chocolate Scoop", price: 3, image: "" },
  { name: "Strawberry Scoop", price: 3, image: ""},
  { name: "Sprinkles", price: 1, image: "" },
  { name: "Gummy Bears", price: 1, image:"" }
])

const total = ref(0)
const cone= ref ([])
function addTopping(topping){
cone.value.push(topping)
  total.value += topping.price
}

function removeTopping(topping){
cone.value= cone.value.filter(t=> t !==topping)
  total.value -= topping.price
}
</script>


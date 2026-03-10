<template>
  <div>

    <h1>Make Ice Cream</h1>

</div>
  <div class="icecream-builder">
  <div class="cone-wrapper">
    <img src="https://static.vecteezy.com/system/resources/previews/044/651/294/non_2x/empty-waffle-cone-ready-for-ice-cream-png.png" class="coneimg">
    <img
      v-for="(topping, i) in cone"
      :key="i"
      :src="topping.image"
      class="toppingimg"
      :style="{ bottom: `${270 + i * 30}px`, zIndex: topping.name.toLowerCase().includes('scoop') ? 1 : 10 }"
    >
    <h2>Total: ${{ total.toFixed(2) }}</h2>
  </div>


    <div class="IcecreamCard">
      <ul>
        <li v-for="topping in toppings" :key="topping.name" class="topping-item">
          <h3>{{ topping.name }}</h3>
          <img :src="topping.image" class="toppingImage">
          <p>${{ topping.price }}</p>
          <button @click="addTopping(topping)">add to cone</button>
          <button @click="removeTopping(topping)">remove from cone</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup> 
import { ref } from 'vue'

const toppings = ref([
  { name: "Chocolate Scoop", price: 37, image: "https://static.vecteezy.com/system/resources/previews/060/283/782/non_2x/delicious-chocolate-ice-cream-scoop-on-transparent-background-free-png.png"},
  { name: "Strawberry Scoop", price: 28, image: "https://png.pngtree.com/png-clipart/20250518/original/pngtree-strawberry-sweet-ice-cream-on-transparent-background-png-image_21021129.png" },
  { name: "Pistachio Scoop ", price: 109, image:"https://png.pngtree.com/png-clipart/20250116/original/pngtree-scoop-of-pistachio-ice-cream-isolated-on-transparent-background-png-image_20259172.png"},
  { name: "Rocky Road Scoop", price: 70, image:"https://wellscdn.com/content/foodservice/product/large/d33b3b7e-ede6-4f0c-81a2-655b7e5ef692/rocky-road-3gal.v2.png"},
  { name: "Government Cheese Scoop", price: 0.99, image:"https://static.vecteezy.com/system/resources/previews/065/603/422/non_2x/scoop-of-delicious-mango-ice-cream-dessert-isolated-on-the-transparent-background-png.png"},
  {name: "Matcha Scoop", price: 65, image: "https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-matcha-ice-cream-scoop-isolated-vector-illustration-png-image_16238987.png"},
  { name: "Sprinkles", price: 89, image: "https://png.pngtree.com/png-clipart/20240726/original/pngtree-colorful-sprinkles-clipart-png-image_15638777.png" },
  { name: "Gummy Bears", price: 104, image:"https://pngimg.com/d/jelly_candies_PNG42.png" },
  { name: "Dubai Chocolate", price: 999.99, image:"https://www.thebakerysking.com.au/cdn/shop/files/Chocolate_KunafaSmallChocsplit.png?v=1743715267&width=1445"},
  { name: "Bananas", price: 39, image:"https://static.vecteezy.com/system/resources/previews/057/177/148/non_2x/fresh-banana-slices-stacked-on-a-transparent-background-highlighting-their-natural-texture-and-color-banana-slices-isolated-on-transparent-background-free-png.png"},
  { name: "Chip", price: 0.01, image:"https://www.dieffenbachs.com/wp-content/uploads/2020/08/thin_cut_solo_chip.png"},
  { name: "Taco Meat", price: 3, image:"https://thebehive.com/cdn/shop/products/tacobeef2020.png?v=1740772209"}
])

const total = ref(0)
const cone= ref ([])
function addTopping(topping){
cone.value.push(topping)
  total.value = topping.price + total.value
}

function removeTopping(topping){
const index = cone.value.indexOf(topping)
if (index > -1){
  cone.value.splice(index, 1)
  total.value = total.value-topping.price
}
}
</script>


<style>
.coneimg {
  max-width: 400px;  
   margin: 150px auto 0;
  padding: 10px; 
}
.h1{
  width: 50px;
}
.toppingImage {
  max-width: 50px;
}
.h1 {
  color: pink;
}
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  width: 25%;
  margin: 0.0000001px 0;
}
.icecream-builder {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px; 
}

.cone-wrapper {
  position: relative;
  width: 1000px;
  text-align: center;
}

.coneimg {
  width: 100%;
  display: block;
}

.toppingimg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
}

.icecream-toppings ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns of toppings */
  gap: 15px;
}

.icecream-toppings li {
  text-align: center;
}

.topping-preview {
  width: 60px;
  display: block;
  margin: 0 auto 5px;
}
* {
  color: pink;
}

</style>

<template>
  <div>

    <h1>Make Ice Cream</h1>

    <img src="/src/assets/cone.png">

    <h2>Total: ${{ total }}</h2>

    <IcecreamCard
      v-for="item in toppings"
      :key="item.name"
      :item="item"

    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import IcecreamCard from '@/components/icecreamCard.vue'

const toppings = ref([
  { name: "Chocolate Scoop", price: 3 },
  { name: "Strawberry Scoop", price: 3 },
  { name: "Sprinkles", price: 1 },
  { name: "Gummy Bears", price: 1 }
])

const total = ref()

function addTopping(item){
  total.value += item.price
}

function removeTopping(item){
  total.value -= item.price
}
</script>



Ice cream card
<template>
  <div class="card">

    <h3>{{ item.name }}</h3>
    <h2>${{ item.price }}</h2>


  </div>
</template>

<script setup>

defineProps({
  item: Object
})

</script>







Icecreamcone.vue
<script setup>
defineProps({
  scoops: array
})
</script>

<template>

<h2>Your Icecream</h2>

<img src="/src/assets/cone.png" >

<ul>
  <li v-for="item in scoops">
    {{ item }}
  </li>
</ul>

</template>




App.vue
<script setup>
import { ref } from "vue"
import icecreamCone from "./components/icecreamCone.vue"


const scoops = ref([])

function addScoop(flavor){
  scoops.value.push(flavor)
}
</script>

<template>

<h1>Build Your Ice Cream</h1>

<IceCreamCone :scoops="scoops"/>

<uhhh @add="addScoop"/>

</template>


































































<template>
    <div>
        <icecreamBuilder v-for="icecream in icecream" :key="icecream.name"> :icecream="icecream"{{ icecream.name }}
          </icecreamCard>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { icecreamCard } from '@/components/icecreamCard.vue';

const frosting= ref([
  { name: 'sprinkles', type: 'topping', img: '', price:'',},
    { name: 'chocolate fudge', type: 'topping', img: '', price:'',},
  { name: 'dubai chocolate', type: 'topping', img: '', price:'',},
  { name: 'gummy bears', type: 'topping', img: '', price:'',},
  { name: '', type: 'topping', img: '', price:'',},

    { name: 'strawberry', type: 'flavor', img: '', price:'',},
    { name: 'strawberry', type: 'flavor', img: '', price:'',}

])

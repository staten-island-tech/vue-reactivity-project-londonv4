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
  { name: 'sprinkles', type: 'topping', img: '', price:'',}
    { name: 'chocolate fudge', type: 'topping', img: '', price:'',}
  { name: 'dubai chocolate', type: 'topping', img: '', price:'',}
  { name: 'gummy bears', type: 'topping', img: '', price:'',}
  { name: '', type: 'topping', img: '', price:'',}

    { name: 'strawberry', type: 'flavor', img: '', price:'',}
    { name: 'strawberry', type: 'flavor', img: '', price:'',}

])

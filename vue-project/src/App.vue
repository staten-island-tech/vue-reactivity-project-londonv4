

<template>
  <div>
<h1> Ice Cream Maker</h1>
 <input type="img" v-model="flavor" />
 <input type="img" v-model="flavor" />
    <input type="img" value="sprinkles" v-model="toppingSelector.sprinkles"/>
        <input type="img" value="crunchies" v-model="toppingSelector.crunchies"/>
    <input type="img" value="chocolate fudge" v-model="toppingSelector.chocolateFudge"/>
    <input type="img" value="dubai chocolate" v-model="toppingSelector.dubaiChocolate"/>
    <input type="img" value="gummy bears" v-model="toppingSelector.gummyBears"/>
    <button @click = "something">Create</button>


icecreamCard <div v-for="icecream in icecreams" :key="icecream.id">
  {{ icecream }}
</div>

  </div>
</template>

<script setup>
import {ref} from 'vue'
import icecreamCard from './components/icecreamCard.vue'

</script>

<style lang= scoped>

</style>
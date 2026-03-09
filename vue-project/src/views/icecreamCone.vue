<template>
    <div class="cone">

<img src="/src/assets/cone.png"/>

<ul>
  <li v-for="item in scoops" :key="item">
    {{ item }}
  </li>
</ul>
    </div>
</template>

<script>
defineProps({
  scoops: Array
</script>

<style lang= scoped>

</style>
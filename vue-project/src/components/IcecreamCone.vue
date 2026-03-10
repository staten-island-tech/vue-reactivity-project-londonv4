<template>
  <div class="cone">
    <img src="" alt="Cone" />
    <ul>
      <li v-for="item in scoops" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  scoops: Array
})
</script>

<style scoped>
.cone {
  /* styles here */
}
</style>
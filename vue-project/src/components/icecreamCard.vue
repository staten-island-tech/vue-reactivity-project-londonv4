<template>
    <div>
<h2>{{ icecream.flavour }}</h2>
const selectedFlavor= ref("")
const selectedTopping= ref("")
const icecream= ref("")

    </div>
</template>





<template>
    <div>
<script setup>

    <h2>{{ iceCream.flavor }}</h2>

    <img :src="iceCream.image" />

   <p>Toppings: {{ iceCream.toppings }}</p>
  <

</script>

    </div>
</template>

<script>
export default {
    setup () {
        
defineProps({
  iceCream: {
    type: Object,
    required: true
  }
})
        return {}
    }
}
</script>

<style lang= scoped>

</style>

<script setup>

</script>

<style lang= scoped>

</style>


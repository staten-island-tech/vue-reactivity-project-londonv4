<<template>
    <div>

<h2>Your Icecream</h2>

<img src="/src/assets/cone.png" >

<ul>
  <li v-for="item in scoops">
    {{ item }}
  </li>
</ul>
    </div>
</template>

<script>
defineProps({
  scoops: array
</script>
}
)
<style lang= scoped>

</style>
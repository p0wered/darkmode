<template>
  <div class="hardware-item fb-column-center" data-aos="fade-up" :style="{backgroundImage: hardwareUrl}">
    <a class="hardware-item-btn" href="#"></a>
    <div class="hardware-item-inner fb-column-center">
      <a href="#" style="font-weight: 700; margin: 0">{{hardwareTitle}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesSection",
  props:['hardwareTitle','hardwareUrl']
}
</script>

<style scoped>

</style>
<template>
  <div class="hardware-item fb-column-center" :style="{backgroundImage: hardwareUrl}">
    <div class="hardware-item-inner fb-column-center">
      <p style="font-weight: 700; margin: 0">{{hardwareTitle}}</p>
      <p style="color: #c5c5c5; margin: 0">{{hardwareDesc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HardwareSection",
  props:['hardwareTitle','hardwareDesc','hardwareUrl']
}
</script>

<style scoped>

</style>
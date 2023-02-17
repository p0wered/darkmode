<template>
  <div class="section-top"></div>
  <section class="hardware-main">
    <div class="container">
      <div class="hardware-title-block">
        <h2 class="hardware-title">PC COMPONENTS</h2>
        <p class="hardware-desc">Make your dream battlestation a reality with gaming desktop solutions—engineered for
          enthusiasts and designed for performance, highest reliability, and ultra-efficient power management
        </p>
      </div>
    </div>
    <div class="item-class-selection fb-row-center">
      <template v-for="item in hardware" :key="item" >
        <HardwareSection :hardware-title="item.hardwareTitle" :hardware-desc="item.hardwareDesc" :hardware-url="item.hardwareUrl"></HardwareSection>
      </template>
    </div>
  </section>
</template>

<script>
import HardwareSection from "@/components/HardwareSection.vue";
import axios from "axios";

export default {
  name: "HardwarePage",
  components: {HardwareSection},
  mounted() {
    axios.get("backend/homepage/data.json").then(({data}) => {
      this.hardware = data.data3
    })
  },
  data() {
    return{
      hardware: []
    }
  }
}
</script>

<style scoped>

</style>
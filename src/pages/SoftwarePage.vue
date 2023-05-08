<template>
  <div class="section-top"></div>
  <div class="container">
    <div class="hardware-title-block" data-aos="fade-left">
      <h2 class="software-title">SOFTWARE</h2>
      <p class="hardware-desc" data-aos="fade-left">Razer offers a wide range of gaming software to complete your Razer gaming experience,
        whether it is allowing you to game lag-free, stream with customized Chroma effects, or amp up your audio for
        competitive gaming advantage.
      </p>
    </div>
  </div>
  <template v-for="item in main" :key="item">
    <SoftwareMain :software-title="item.softwareTitle" :software-desc="item.softwareDesc" :software-url="item.softwareUrl" :software-image="item.softwareImage"></SoftwareMain>
  </template>
</template>

<script>
import SoftwareMain from "@/components/SoftwareMain.vue";
import axios from "axios";

export default {
  name: "SoftwarePage",
  components: {SoftwareMain},
  mounted() {
    axios.get("backend/homepage/data.json").then(({data}) => {
      this.main = data.software
    })
  },
  data() {
    return{
      main: []
    }
  }
}
</script>

<style scoped>

</style>
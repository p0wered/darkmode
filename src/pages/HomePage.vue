<template>
  <template v-for="item in section1" :key="item">
    <HomepageMain :section-title="item.title" :section-desc="item.description" :button-first="item.buttonFirst" :button-second="item.buttonSecond" :image-desktop="window.width > 692 ? item.urlDesktop : item.urlMobile"></HomepageMain>
  </template>
</template>

<script>
import HomepageMain from "@/components/HomepageMain.vue";
import axios from "axios";
export default {
  name: "HomePage",
  components: {HomepageMain},
  mounted() {
    axios.get("backend/homepage/data.json").then(({data}) => {
      this.section1 = data.data1
    })
  },
  data() {
    return{
      section1: [],
      window: {
        width: 0,
        height: 0
      },
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
}
</script>

<style scoped>

</style>
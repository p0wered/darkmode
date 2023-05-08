<template>
  <div class="section-top"></div>
  <template v-for="item in section1" :key="item">
    <HomepageMain :section-title="item.title" :section-desc="item.description" :button-first="item.buttonFirst" :button-second="item.buttonSecond" :image-desktop="window.width > 930 ? item.urlDesktop : item.urlMobile"></HomepageMain>
  </template>
  <template v-for="item in section2" :key="item">
    <HomepagePanel :left-panel-title="item.leftPanelTitle" :right-panel-title="item.rightPanelTitle" :left-panel-desc="item.leftPanelDesc" :right-panel-desc="item.rightPanelDesc" :left-panel-btn="item.leftPanelButton" :right-panel-btn="item.rightPanelButton" :left-panel-url="item.urlLeftPanel" :right-panel-url="item.urlRightPanel"></HomepagePanel>
  </template>
</template>

<script>
import axios from "axios";
import HomepageMain from "@/components/HomepageMain.vue";
import HomepagePanel from "@/components/HomepagePanel.vue";
export default {
  name: "HomePage",
  components: {HomepagePanel, HomepageMain},
  mounted() {
    axios.get("backend/homepage/data.json").then(({data}) => {
      this.section1 = data.data1
      this.section2 = data.data2
    })
  },
  data() {
    return{
      section1: [],
      section2: [],
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
AOS.init();
</script>

<style scoped>

</style>
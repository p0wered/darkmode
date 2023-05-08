<template>
  <div class="section-top"></div>
  <section class="hardware-main">
    <template v-for="item in hardware3.slice(0, 1)" :key="item">
      <CategoriesTitleBlock :block-title="item.blockTitle" :block-desc="item.blockDesc"></CategoriesTitleBlock>
    </template>
    <div class="item-class-selection">
      <div class="container-fluid selection-flexbox">
        <div class="selection-temp">
          <template v-for="item in hardwareSelection.slice(0, 2)" :key="item">
            <CategoriesSection :hardware-title="item.hardwareTitle" :hardware-url="item.hardwareUrl"></CategoriesSection>
          </template>
        </div>
        <div class="selection-temp">
          <template v-for="item in hardwareSelection.slice(2, 4)" :key="item">
            <CategoriesSection :hardware-title="item.hardwareTitle" :hardware-url="item.hardwareUrl"></CategoriesSection>
          </template>
        </div>
      </div>
    </div>
    <template v-for="item in hardware3.slice(1, 2)" :key="item">
      <CategoriesTitleBlock :block-title="item.blockTitle" :block-desc="item.blockDesc"></CategoriesTitleBlock>
    </template>
    <div class="item-class-selection">
      <div class="container-fluid selection-flexbox">
        <div class="selection-temp">
          <template v-for="item in hardwareSelection.slice(4, 6)" :key="item">
            <CategoriesSection :hardware-title="item.hardwareTitle" :hardware-url="item.hardwareUrl"></CategoriesSection>
          </template>
        </div>
        <div class="selection-temp">
          <template v-for="item in hardwareSelection.slice(6, 8)" :key="item">
            <CategoriesSection :hardware-title="item.hardwareTitle" :hardware-url="item.hardwareUrl"></CategoriesSection>
          </template>
        </div>
      </div>
    </div>
    <div class="special">
      <div class="special-title-box" data-aos="fade-left">
        <h2 class="special-title">CHECK OUT OUR CUSTOMS</h2>
        <p class="special-desc">For those seeking a truly unique setup, make it your own with a customized mouse and
          mouse mat.
        </p>
        <a href="#" class="buy-item">
          <p style="margin: 0">VIEW ALL</p>
          <i class="bi bi-chevron-right"></i>
        </a>
      </div>
    </div>
    <template v-for="item in hardware3.slice(2, 3)" :key="item">
      <CategoriesTitleBlock :block-title="item.blockTitle" :block-desc="item.blockDesc"></CategoriesTitleBlock>
    </template>
    <div class="item-class-selection">
      <div class="container-fluid selection-flexbox">
        <div class="selection-temp">
          <template v-for="item in hardwareSelection.slice(8, 10)" :key="item">
            <CategoriesSection :hardware-title="item.hardwareTitle" :hardware-url="item.hardwareUrl"></CategoriesSection>
          </template>
        </div>
        <div class="selection-temp">
          <template v-for="item in hardwareSelection.slice(10, 12)" :key="item">
            <CategoriesSection :hardware-title="item.hardwareTitle" :hardware-url="item.hardwareUrl"></CategoriesSection>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import CategoriesSection from "@/components/CategoriesSection.vue";
import CategoriesTitleBlock from "@/components/CategoriesTitleBlock.vue";

export default {
  name: "CategoriesPage",
  components: {CategoriesTitleBlock, CategoriesSection},
  mounted() {
    axios.get("backend/homepage/data.json").then(({data}) => {
      this.hardware3 = data.title
      this.hardwareSelection = data.selection
    })
  },
  data() {
    return{
      hardware3: [],
      hardwareSelection: [],
    }
  }
}
</script>

<style scoped>

</style>
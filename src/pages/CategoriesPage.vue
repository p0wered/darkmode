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
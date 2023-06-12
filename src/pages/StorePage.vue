<template>
  <div class="section-top"></div>
  <div class="container">
      <h2 class="store-title" data-aos="fade-left">REIZA STORE</h2>
      <div class="store-flexbox">
          <div class="filter-block col-lg-3 d-lg-block d-none">
            <h4 style="margin: 0; font-weight: 700">FILTERS</h4>
            <hr>
            <div class="store-list">
              <a @click="arrowRotate('arrowOneDown')" class="filter-collapse" data-bs-toggle="collapse" href="#pc-components" role="button" aria-expanded="false">
                  <p>PC & LAPTOPS</p>
                  <i :class="{'arrow-down': arrowOneDown}" class="bi bi-caret-down-fill"></i>
              </a>
              <div class="collapse show" id="pc-components">
                  <ul class="inner-list">
                      <li><FiltersCheckbox filter-name="GRAPHICS CARDS"></FiltersCheckbox></li>
                      <li><FiltersCheckbox filter-name="MOTHERBOARDS"></FiltersCheckbox></li>
                      <li><FiltersCheckbox filter-name="PSU"></FiltersCheckbox></li>
                      <li><FiltersCheckbox filter-name="PC CASES"></FiltersCheckbox></li>
                      <li><FiltersCheckbox filter-name="LAPTOPS"></FiltersCheckbox></li>
                  </ul>
              </div>
              <a @click="arrowRotate('arrowTwoDown')" class="filter-collapse" data-bs-toggle="collapse" href="#peripherals" role="button" aria-expanded="false">
                  <p>PERIPHERALS</p>
                  <i :class="{'arrow-down': arrowTwoDown}" class="bi bi-caret-down-fill"></i>
              </a>
              <div class="collapse show" id="peripherals">
                  <ul class="inner-list">
                      <li><FiltersCheckbox filter-name="KEYBOARDS"></FiltersCheckbox></li>
                      <li><FiltersCheckbox filter-name="MOUSES"></FiltersCheckbox></li>
                      <li><FiltersCheckbox filter-name="MOUSE MATS"></FiltersCheckbox></li>
                      <li><FiltersCheckbox filter-name="HEADSETS"></FiltersCheckbox></li>
                      <li><FiltersCheckbox filter-name="CUSTOMS"></FiltersCheckbox></li>
                  </ul>
              </div>
              <a @click="arrowRotate('arrowThreeDown')" class="filter-collapse" data-bs-toggle="collapse" href="#accessories" role="button" aria-expanded="false">
                  <p>ACCESSORIES</p>
                  <i :class="{'arrow-down': arrowThreeDown}" class="bi bi-caret-down-fill"></i>
              </a>
              <div class="collapse show" id="accessories">
                  <ul class="inner-list">
                      <li><FiltersCheckbox filter-name="RGB COMPONENTS"></FiltersCheckbox></li>
                      <li><FiltersCheckbox filter-name="CAPTURE CARDS"></FiltersCheckbox></li>
                      <li><FiltersCheckbox filter-name="WEBCAMS"></FiltersCheckbox></li>
                      <li><FiltersCheckbox filter-name="MICROPHONE"></FiltersCheckbox></li>
                  </ul>
              </div>
              <a class="reset-btn" href="#">RESET ALL</a>
            </div>
          </div>
          <div class="cards-grid">
              <StoreItem></StoreItem>
              <StoreItem></StoreItem>
              <StoreItem></StoreItem>
              <StoreItem></StoreItem>
              <StoreItem></StoreItem>
              <StoreItem></StoreItem>
              <StoreItem></StoreItem>
              <StoreItem></StoreItem>
          </div>
      </div>
  </div>
</template>

<script>
import FiltersCheckbox from "@/components/FiltersCheckbox.vue";
import StoreItem from "@/components/StoreItem.vue";

export default {
  name: "StorePage",
    components: {StoreItem, FiltersCheckbox},

  data() {
    return{
        arrowOneDown: false,
        arrowTwoDown: false,
        arrowThreeDown: false,
    }
  },

  methods: {
      arrowRotate(value) {
          this[value] = !this[value]
      }
  }
}
</script>

<style scoped>

</style>
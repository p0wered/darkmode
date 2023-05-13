<template>
  <div class="section-top"></div>
  <div class="container">
      <h2 class="store-title" data-aos="fade-left">REIZA STORE</h2>
      <div class="store-flexbox">
          <div class="filter-block col-lg-4">
            <h4 style="margin: 0">FILTERS</h4>
            <hr>
            <div class="store-list">
              <p style="margin-bottom: .325rem">CATEGORY</p>
              <ul class="inner-list">
                  <li>
                      <div class="store-list-item">
                          <p>GRAPHICS CARD</p>
                          <input type="checkbox">
                      </div>
                  </li>
                  <li>MOTHERBOARD</li>
                  <li>PC CASE</li>
                  <li>LAPTOP</li>
              </ul>
            </div>
          </div>
          <div class="cards-grid">
              <div class="store-card"></div>
              <div class="store-card"></div>
              <div class="store-card"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "StorePage"
}
</script>

<style scoped>

</style>
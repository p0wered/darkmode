<template>
  <div class="container">
    <div class="hardware-title-block" data-aos="fade-left">
      <h2 class="hardware-title" data-aos="fade-left">{{blockTitle}}</h2>
      <p class="hardware-desc">{{blockDesc}}</p>
      <a href="#" class="buy-item">
        <p style="margin: 0">VIEW ALL</p>
        <i class="bi bi-chevron-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesTitleBlock",
  props:['blockTitle','blockDesc']
}
</script>

<style scoped>

</style>
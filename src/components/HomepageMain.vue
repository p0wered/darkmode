<template>
  <section class="homepage-main section-top" :style="{backgroundImage: imageDesktop}">
    <div class="homepage-text-box fb-column-center">
      <h1 class="homepage-title">{{sectionTitle}}</h1>
      <p class="homepage-desc">{{sectionDesc}}</p>
      <div class="buy-item-flexbox">
        <a class="buy-item">
          <p>{{buttonFirst}}</p>
          <i class="bi bi-chevron-right"></i>
        </a>
        <a class="buy-item">
          <p>{{buttonSecond}}</p>
          <i class="bi bi-chevron-right"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomepageMain",
  props:['sectionTitle','sectionDesc','buttonFirst','buttonSecond','imageDesktop', 'imageMobile'],
}
</script>

<style scoped>

</style>
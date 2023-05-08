<template>
  <section class="homepage-main" :style="{backgroundImage: imageDesktop}">
    <a class="homepage-main-btn" href="#"></a>
    <div class="homepage-text-box fb-column-center" data-aos="fade-up">
      <h1 class="homepage-title">{{sectionTitle}}</h1>
      <p class="homepage-desc" data-aos="fade-up">{{sectionDesc}}</p>
      <div class="buy-item-flexbox" data-aos="fade-up">
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
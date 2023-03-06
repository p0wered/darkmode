<template>
  <div class="software-tint"></div>
  <section class="software-main" :style="{backgroundImage: softwareUrl}">
    <div class="container">
      <div class="software-text-box fb-column-center">
        <div class="software-logo" :style="{backgroundImage: softwareImage}"></div>
        <h1 class="homepage-title">{{softwareTitle}}</h1>
        <p class="software-desc" style="margin: 0">{{softwareDesc}}</p>
        <a href="#" class="download-btn">Download Now</a>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "SoftwareMain",
  props: ["softwareTitle", "softwareDesc", "softwareUrl", "softwareImage"]
}
</script>

<style scoped>

</style>
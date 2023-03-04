<template>
  <div class="homepage-panel-row">
    <div class="homepage-panel-item" :style="{backgroundImage: leftPanelUrl}">
      <a class="homepage-panel-btn" href="#"></a>
      <div class="panel-text fb-column-center">
        <h3 class="homepage-panel-title">{{leftPanelTitle}}</h3>
        <p class="homepage-panel-desc">{{leftPanelDesc}}</p>
        <a class="buy-item">
          <p>{{leftPanelBtn}}</p>
          <i class="bi bi-chevron-right"></i>
        </a>
      </div>
    </div>
    <div class="homepage-panel-item" :style="{backgroundImage: rightPanelUrl}">
      <div class="panel-text fb-column-center">
        <h3 class="homepage-panel-title">{{rightPanelTitle}}</h3>
        <p class="homepage-panel-desc">{{rightPanelDesc}}</p>
        <a class="buy-item">
          <p>{{leftPanelBtn}}</p>
          <i class="bi bi-chevron-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomepagePanel",
  props:['leftPanelTitle','rightPanelTitle','leftPanelDesc','rightPanelDesc','leftPanelBtn','rightPanelBtn','leftPanelUrl','rightPanelUrl']
}
</script>

<style scoped>

</style>
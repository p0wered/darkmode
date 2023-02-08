<template>
  <div class="homepage-panel-row" >
    <div class="homepage-panel-item" :style="{backgroundImage: leftPanelUrl}">
      <div class="panel-text fb-column-center">
        <h3 class="homepage-title">{{leftPanelTitle}}</h3>
        <p class="homepage-desc">{{leftPanelDesc}}</p>
        <a class="buy-item">
          <p>{{leftPanelBtn}}</p>
          <i class="bi bi-chevron-right"></i>
        </a>
      </div>
    </div>
    <div id="line"></div>
    <div class="homepage-panel-item" :style="{backgroundImage: rightPanelUrl}">
      <div class="panel-text fb-column-center">
        <h3 class="homepage-title">{{rightPanelTitle}}</h3>
        <p class="homepage-desc">{{rightPanelDesc}}</p>
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
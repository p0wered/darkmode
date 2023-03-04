<template>
  <header>
    <div class="container">
      <div class="header-layout">
        <div>
          <img class="logo" src="/assets/logo.png" alt="logo">
        </div>
        <div class="d-none d-lg-flex" style="font-size: 16px;">
          <ul style="padding: 0">
            <li><router-link :to="{name:'home'}">HOME</router-link></li>
            <li><router-link :to="{name:'categories'}">CATEGORIES</router-link></li>
            <li><router-link :to="{name:'software'}">SOFTWARE</router-link></li>
            <li><router-link :to="{name:'services'}">SERVICES</router-link></li>
            <li><router-link :to="{name:'about'}">ABOUT</router-link></li>
          </ul>
        </div>
        <div class="d-none d-lg-flex" style="font-size: 22px;">
          <ul style="padding: 0">
            <li><router-link :to="{name:'wishlist'}"><i class="bi bi-heart"></i></router-link></li>
            <li><router-link :to="{name:'cart'}"><i class="bi bi-bag"></i></router-link></li>
            <li><router-link :to="{name:'account'}"><i class="bi bi-person-circle"></i></router-link></li>
          </ul>
        </div>
        <div class="menu-icon d-block d-lg-none" @click="headerButton()">
          <div class="burger-btn" :class="{'active': xActive, 'not-active': iconActive}">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="mobile-menu d-lg-none" :style="{display:menuDisplay}">
    <ul class="main-menu-list">
      <li><router-link :to="{name:'home'}">HOME</router-link></li>
      <li><router-link :to="{name:'categories'}">CATEGORIES</router-link></li>
      <li><router-link :to="{name:'software'}">SOFTWARE</router-link></li>
      <li><router-link :to="{name:'services'}">SERVICES</router-link></li>
      <li><router-link :to="{name:'about'}">ABOUT</router-link></li>
      <ul class="side-menu-list fb-row-center">
        <li><router-link :to="{name:'wishlist'}"><i class="bi bi-heart"></i></router-link></li>
        <li><router-link :to="{name:'cart'}"><i class="bi bi-bag"></i></router-link></li>
        <li><router-link :to="{name:'account'}"><i class="bi bi-person-circle"></i></router-link></li>
      </ul>
    </ul>
    <div>

    </div>
  </div>
  <router-view></router-view>
</template>

<script>
  export default {
    data() {
      return{
        xActive: false,
        iconActive: true,
        menuDisplay: 'none',
      }
    },
    methods: {
      headerButton() {
        this.xActive = !this.xActive
        this.iconActive = !this.iconActive
        if (this.xActive === false) {
          this.menuDisplay = 'none'
        }
        else{
          this.menuDisplay = 'flex'
        }
      }
    }
  }

</script>
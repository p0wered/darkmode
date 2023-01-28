<template>
  <header>
    <div class="container">
      <div class="header-layout">
        <div class="logo">
          <i class="bi bi-controller"></i>
        </div>
        <div class="d-none d-lg-flex">
          <ul>
            <li><router-link :to="{name:'home'}">HOME</router-link></li>
            <li><router-link :to="{name:'hardware'}">HARDWARE</router-link></li>
            <li><router-link :to="{name:'accessories'}">ACCESSORIES</router-link></li>
            <li><router-link :to="{name:'services'}">SERVICES</router-link></li>
            <li><router-link :to="{name:'about'}">ABOUT</router-link></li>
          </ul>
        </div>
        <div class="d-none d-lg-flex">
          <ul>
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
  <div class="mobile-menu d-lg-none" :style="{display: menuDisplay}">
    <ul>
      <li><router-link :to="{name:'home'}">HOME</router-link></li>
      <li><router-link :to="{name:'hardware'}">HARDWARE</router-link></li>
      <li><router-link :to="{name:'accessories'}">ACCESSORIES</router-link></li>
      <li><router-link :to="{name:'services'}">SERVICES</router-link></li>
      <li><router-link :to="{name:'about'}">ABOUT</router-link></li>
    </ul>
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
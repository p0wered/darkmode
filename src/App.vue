<template>
  <header>
    <div class="container">
      <div class="header-layout">
        <div class="logo">
          <i class="bi bi-controller"></i>
        </div>
        <div>
          <ul>
            <li><router-link :to="{name:'home'}">HOME</router-link></li>
            <li><router-link :to="{name:'hardware'}">HARDWARE</router-link></li>
            <li><router-link :to="{name:'accessories'}">ACCESSORIES</router-link></li>
            <li><router-link :to="{name:'services'}">SERVICES</router-link></li>
            <li><router-link :to="{name:'about'}">ABOUT</router-link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><router-link :to="{name:'wishlist'}"><i class="bi bi-heart"></i></router-link></li>
            <li><router-link :to="{name:'cart'}"><i class="bi bi-bag"></i></router-link></li>
            <li><router-link :to="{name:'account'}"><i class="bi bi-person-circle"></i></router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>

</script>
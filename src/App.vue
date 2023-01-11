<template>
  <header>
    <div class="container">
      <div class="header-layout">
        <div>
          <h1>X</h1>
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
            <li><router-link :to="{name:'home'}">X</router-link></li>
            <li><router-link :to="{name:'home'}">X</router-link></li>
            <li><router-link :to="{name:'home'}">X</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>

</script>
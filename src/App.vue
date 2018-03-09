<template>
  <div id="app">
    <!-- <Home></Home> -->
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/style/style.scss'
import Home from './pages/home/home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

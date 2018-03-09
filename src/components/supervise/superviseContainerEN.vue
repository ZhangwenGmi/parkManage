<template>
  <div>
  	<SuperviseMenu></SuperviseMenu>
    <TopBar></TopBar>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import SuperviseMenu from '../../components/supervise/superviseMenuEN.vue'
import TopBar from '../../components/common/TopBarEN.vue'

export default {
	name:"superviseContainer",
  components: {
    SuperviseMenu,TopBar
  }
}
</script>

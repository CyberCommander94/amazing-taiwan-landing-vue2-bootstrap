<template>
  <div class="tai-app">
    <AppNavbar />
    <HomePage />
    <AppFooter />
  </div>
</template>

<script>
import HomePage from "@/pages/HomePage.vue";
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default {
  name: 'App',
  components: {
    HomePage,
    AppNavbar,
    AppFooter,
  }
}
</script>

<style lang="scss" scoped>
.tai-app {
  width: 100vw;
  height: 100vh;
  padding-top: 65px;
}

@include media-breakpoint-up(lg) {
  .tai-app {
    width: 100vw;
    height: 100vh;
    padding-top: 91px;
  }
}
</style>

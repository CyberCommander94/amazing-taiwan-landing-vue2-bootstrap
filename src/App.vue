<template>
  <div class="tai-app">
    <AppHeader />
    <HomePage />
    <AppFooter />
  </div>
</template>

<script>
import HomePage from "@/pages/HomePage.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default {
  name: 'App',
  components: {
    HomePage,
    AppHeader,
    AppFooter,
  }
}
</script>

<style lang="scss" scoped>
.tai-app {
  width: 100vw;
  height: 100vh;
}
</style>

<script>
import allProducts from "./components/pages/allProducts.vue";
import navBar from "./components/pages/navBar.vue";

export default {
  name: "App",
  components: {
    allProducts,
    navBar,
  },
};
</script>
<template>
  <navBar v-if="!$route.meta.hideNavbar" />
  <div class="container max-w-5xl mx-auto">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

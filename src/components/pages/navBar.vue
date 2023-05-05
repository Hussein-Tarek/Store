<template>
  <div>
    <div class="navbar bg-black text-white">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li :class="{ active: activeNavItem === 'home' }">
            <router-link to="/home" @click="setActiveNavItem('home')"
              >Home</router-link
            >
          </li>
          <li :class="{ active: activeNavItem === 'product' }">
            <router-link to="/products" @click="setActiveNavItem('product')"
              >Products</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  activeNavItem: "",
  methods: {
    setActiveNavItem(navItem) {
      this.activeNavItem = navItem;
    },
  },
};
</script>

<style scoped></style>

<template>
  <div class="navbar_item" v-on:click="loadRoute">
    <div class="navbar_item-title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "NavbarItem",
  props: ["title"],
  methods: {
    loadRoute: function() {
      this.$router.push({ name: this.title });
    }
  }
};
</script>

<style scoped>
.navbar_item {
  display: inline-block;
  padding: 1rem;
  margin: 0.5rem;
}
.navbar_item-title {
  font-size: 2rem;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
</style>

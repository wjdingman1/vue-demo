<template>
  <div class="body-section">
    <toggle-button v-model="toggled" />
    <div v-if="toggled" class="body-section_content">I'm toggled ON</div>
    <div v-else class="body-section_content">I'm toggled OFF</div>
  </div>
</template>

<script>
export default {
  name: "Conditionals",
  data() {
    return {
      toggled: false
    };
  }
};
</script>

<style scoped>
.body-section_content {
  font-weight: 450;
  margin-top: 3em;
}
</style>

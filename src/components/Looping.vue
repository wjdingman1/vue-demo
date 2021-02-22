<template>
  <div class="body-section">
    <div class="body-section_title">Why should you use Vue?</div>
    <ul>
      <li v-for="reason in reasons" :key="reason">{{ reason }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Looping",
  data() {
    return {
      reasons: [
        "Open source",
        "Excellent documentation",
        "Easy learning curve",
        "Its not Angular"
      ]
    };
  }
};
</script>

<style scoped>
.body-section_title {
  font-weight: 450;
}
li {
  list-style-type: none;
}
</style>

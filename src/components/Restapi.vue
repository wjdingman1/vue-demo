<template>
  <div class="body-section">
    <div class="body-section_button-holder">
      <button v-on:click="fetchUserData">User Data</button>
      <button v-on:click="fetchPostData">Post Data</button>
    </div>
    <div class="body-section_data-display">
      <div v-for="item in displayData" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
import * as axios from "axios";
export default {
  name: "Restapi",
  data() {
    return {
      displayData: []
    };
  },
  methods: {
    fetchUserData: function() {
      axios.get("https://jsonplaceholder.typicode.com/users").then(result => {
        const { data = [] } = result;
        const users = data.map(info => info.username);
        this.displayData = users;
      });
    },
    fetchPostData: function() {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
        const { data = [] } = result;
        const postTitles = data.map(info => info.title).slice(0, 10);
        this.displayData = postTitles;
      });
    }
  }
};
</script>

<style scoped>
button {
  margin: 1rem;
  background-color: rgb(59, 168, 51);
  padding: 10px;
  color: white;
  border-radius: 5px;
  border-width: 0px;
}
</style>

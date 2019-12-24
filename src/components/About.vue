<template>
  <div class="row">
    <div class="col-12">
      <p class="h1">What do you want to know?</p>
    </div>
    <div class="col-12">
      <p>
        <span>Change colors:</span>
        <button type="buton" @click="changeColors">Click</button>
      </p>
      <p>Current theme: {{ currentTheme }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-page",
  data() {
    return {
      title: "About",
      theme: "light"
    };
  },

  methods: {
    changeColors() {
      if (this.theme === "dark") this.theme = "light";
      else this.theme = "dark";
    }
  },

  computed: {
    currentTheme() {
      return this.theme;
    }
  }
};
</script>

<style scoped>
</style>

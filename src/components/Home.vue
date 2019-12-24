<template>
  <div class="row">
    <div class="col-12 my-3 text-center">
      <p class="h1">Welcome to Avatar Database!</p>
      <p>You can preview a lot of avatars here.</p>
    </div>
    <div class="col-12">
      <my-avatars></my-avatars>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-page",

  data() {
    return {
      title: "Home"
    };
  }
};
</script>

<style scoped>
</style>

<template>
  <div>
    <Navigation />
    <b-container class="my-3">
      <Nuxt keep-alive />
      <MyFooter />
    </b-container>
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  transition: 0.8s ease-out;
  transition-property: background-color, color, outline-color;
}
.dark-mode body {
  background-color: #343a40;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>

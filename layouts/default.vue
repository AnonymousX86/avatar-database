<template>
  <div class="bg-dark text-light">
    <Navigation />
    <b-container class="my-3">
      <Nuxt />
    </b-container>
    <MyFooter />
  </div>
</template>

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

/*.fade-enter-active,*/
/*.fade-leave-active {*/
/*  transition: opacity 0.5s ease;*/
/*}*/

/*.fade-enter-from,*/
/*.fade-leave-to {*/
/*  opacity: 0;*/
/*}*/
</style>

<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">
      <b-img-lazy
        src="https://dummyimage.com/30x30/003385/fff.jpg&text=img"
        alt=".img"
        fluid
        :rounded="true"
        width="30"
        blank-width="30"
        height="30"
        blank-height="30"
      />
      Avatar Database
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" :active="$route.name === 'index'">Home</b-nav-item>
        <b-nav-item to="/about" :active="$route.name === 'about'">
          About
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script>
export default {
  name: "Navigation",
}
</script>

<style scoped></style>

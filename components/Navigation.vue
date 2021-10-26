<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="/" class="ms-2">Avatar Database</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          v-for="l in links"
          :key="l.id"
          :to="l.path"
          exact
          exact-active-class="active"
        >
          {{ l.name }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 1,
          path: "/",
          name: "Home",
        },
        {
          id: 2,
          path: "/search",
          name: "Search",
        },
        {
          id: 3,
          path: "/about",
          name: "About",
        },
      ],
    }
  },
}
</script>

<style scoped></style>

<template>
  <b-row no-gutters>
    <b-col cols="12">
      <h1>Avatar database</h1>
      <h5 class="border-left pl-3">A lot of avatars, free to use</h5>
      <p>This is currently empty homepage, everything will be added soon.</p>
    </b-col>
    <b-col cols="12">
      <Avatars />
    </b-col>
  </b-row>
</template>

<script>
import Avatars from "@/components/Avatars"
// noinspection JSUnusedGlobalSymbols
export default {
  components: { Avatars },
}
</script>

<style scoped></style>

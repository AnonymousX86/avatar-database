<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h1>Search for images</h1>
        <input v-model="query" type="text"/>
        <p>{{query}}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            query: ""
        }
    }, 
}
</script>

<style scoped></style>

<template>
  <b-row>
    <b-col v-if="$fetchState.pending" cols="12">
      <h5>Please wait...</h5>
    </b-col>
    <b-col v-else-if="$fetchState.error" cols="12">
      <h5>Error!</h5>
      <p>Unable to load images.</p>
      <b-button variant="primary" @click="$fetch">Try again</b-button>
    </b-col>
    <b-col v-else cols="12">
      <b-row>
        <b-col
          v-for="(a, i) in myAssets"
          :key="i"
          cols="6"
          md="4"
          lg="3"
          xl="2"
          class="mb-2 mouseOver"
        >
          <p class="mb-0" style="max-height: 24px">
            {{ shortName(a.fields.title) }}
          </p>
          <b-img-lazy
            :src="a.fields.file.url"
            :rounded="true"
            fluid
            class="my-2 w-100"
          />
          <b-row class="mouseOver-info">
            <b-col cols="12">
              <b-button variant="info" class="w-100">Download</b-button>
            </b-col>
            <b-col>
              {{ Math.floor(a.fields.file.details.size / 1024) }} KB
            </b-col>
            <b-col class="text-right">
              {{ sizes(a.fields.file.details.image) }}
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { createClient } from "@/plugins/contentful"

// noinspection JSUnusedGlobalSymbols
export default {
  name: "Avatars",
  data() {
    return {
      myAssets: undefined,
    }
  },
  async fetch() {
    const { items } = await createClient().getAssets()
    this.myAssets = items
  },
  methods: {
    sizes(wh) {
      return wh.width + "x" + wh.height
    },
    shortName(str) {
      return str.length > 16 ? str.substr(0, 16) + "..." : str
    },
    filenameOnly(str) {
      return str.substr(0, str.length - 4)
    },
  },
}
</script>

<style scoped lang="scss">
.mouseOver-info {
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
}
.mouseOver:hover {
  .mouseOver-info {
    opacity: 1;
  }
}
</style>

<template>
  <b-row class="pt-4">
    <b-col md="8">
      <h3>Recently added avatars</h3>
      <p>You can specify amount of showing & appending avatars.</p>
    </b-col>

    <b-col
      cols="8"
      offset="2"
      sm="7"
      offset-sm="5"
      md="4"
      offset-md="0"
      lg="3"
      xl="2"
      offset-xl="1"
    >
      <FancyCounter
        :options="selectOptions"
        :counter-index="assetsCountIndex"
        @change="handleFetchSizeChange"
      />
    </b-col>

    <b-col cols="12" class="mb-4" />

    <b-col
      v-if="$fetchState.pending && firstFetch"
      cols="12"
      class="text-center my-5"
    >
      <h3 class="blink">Please wait...</h3>
    </b-col>

    <b-col v-else-if="$fetchState.error" cols="12" class="text-center my-5">
      <b-row no-gutters>
        <b-col cols="12" md="6" offset-md="3" class="text-left">
          <h3>&#9888;&#65039; Error!</h3>
          <p>Unable to load images.</p>
          <b-button variant="warning" class="px-5 w-100" @click="$fetch">
            Try again
          </b-button>
        </b-col>
      </b-row>
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
            :src="a.fields.file.url + '?fm=webp&w=240&h=240&q=90'"
            :alt="a.fields.file.fileName"
            blank-color="#777"
            :rounded="true"
            fluid
            class="my-2 w-100"
          />
          <b-row class="mouseOver-info">
            <b-col cols="12">
              <b-button variant="primary" class="w-100">Download</b-button>
            </b-col>
            <b-col>
              {{ Math.floor(a.fields.file.details.size / 1024) }} KB
            </b-col>
            <b-col class="text-right">
              {{ sizes(a.fields.file.details.image) }}
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="8" offset="2">
          <b-button
            :variant="
              noMoreAssets ? 'warning' : btnClicked ? 'secondary' : 'primary'
            "
            :disabled="noMoreAssets"
            class="py-3 my-2 w-100 font-weight-bold"
            @click="showMore"
          >
            <span v-if="btnClicked" class="blink">
              Loading next {{ selectOptions[assetsCountIndex] }} avatars...
            </span>
            <span v-else-if="noMoreAssets">There is no more avatars!</span>
            <span v-else>Show more</span>
          </b-button>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import client from "@/plugins/contentful"

// noinspection JSUnusedGlobalSymbols
export default {
  name: "Avatars",
  data() {
    return {
      selectOptions: [12, 24, 48, 96, 192],
      myAssets: [],
      assetsSkip: 0,
      firstFetch: true,
      btnClicked: false,
      noMoreAssets: false,
      assetsCountIndex: 0,
    }
  },
  async fetch() {
    try {
      const preLen = this.myAssets.length
      const { items } = await client.getAssets({
        order: "-sys.createdAt",
        limit: this.selectOptions[this.assetsCountIndex],
        skip: this.assetsSkip,
      })
      this.myAssets = [...this.myAssets, ...items]
      this.firstFetch = this.btnClicked = false
      this.assetsSkip = this.myAssets.length
      if (this.myAssets.length === preLen) {
        this.noMoreAssets = true
      }
    } catch (error) {
      alert(JSON.stringify(error))
    }
    this.firstFetch = this.btnClicked = false
  },
  methods: {
    sizes(wh) {
      return wh.width + "x" + wh.height
    },
    shortName(str) {
      return str.length > 16 ? str.substr(0, 16) + "..." : str
    },
    resetAssetsData() {
      this.myAssets = []
      this.assetsSkip = 0
      this.firstFetch = true
      this.btnClicked = false
      this.noMoreAssets = false
    },
    showMore() {
      this.btnClicked = true
      this.$fetch()
    },
    handleFetchSizeChange(index) {
      this.assetsSkip = this.myAssets.length
      this.assetsCountIndex = index
      this.$fetch()
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

.blink {
  animation: blinking 1s linear infinite;
}
@keyframes blinking {
  50% {
    opacity: 0.2;
  }
}
</style>

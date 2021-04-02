<template>
  <b-row no-gutters>
    <b-col md="6" lg="8" xl="9">
      <h1>Avatar database</h1>
      <p>A lot of free to use avatars.</p>
    </b-col>
    <b-col md="6" lg="4" xl="3">
      <p class="h5">Change theme</p>
      <b-row class="my-2">
        <b-col v-for="theme in themeColors" :key="theme.id">
          <b-button
            class="w-100"
            :variant="
              $colorMode.preference === theme.value ? 'primary' : 'secondary'
            "
            @click="$colorMode.preference = theme.value"
          >
            {{ theme.text }}
          </b-button>
        </b-col>
      </b-row>
      <p v-if="$colorMode.preference === 'system'" class="font-italic">
        ( <span class="text-capitalize">{{ $colorMode.value }}</span> theme
        detected )
      </p>
    </b-col>
  </b-row>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  data() {
    return {
      themeColors: [
        {
          id: 0,
          text: "System",
          value: "system",
        },
        {
          id: 1,
          text: "Light",
          value: "light",
        },
        {
          id: 2,
          text: "Dark",
          value: "dark",
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import "~bootstrap";
.active-theme {
  @extend .border-success;
}
</style>

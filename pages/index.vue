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

    <b-col cols="12" class="mb-3">
      <h2 class="mb-3">Quick FAQ</h2>
      <article v-for="(question, index) in faq" :key="index">
        <p class="mb-0 pb-0 font-weight-bold">Q: {{ question.q }}</p>
        <p>A: {{ question.a }}</p>
      </article>
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
      faq: [
        {
          q: 'What\'s "avatar"?',
          a: "If you're new on the Internet; avatars are images that are not yours photo but an image representing you over the Internet.",
        },
        {
          q: "Are they paid?",
          a: "Generally some of them yes, but those on this website - no. All images in this website are free to use.",
        },
        {
          q: "Why are you collecting them?",
          a: "It's very good question. But try asking numismatist why they're collecting coins. Everyone should have a hobby.",
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

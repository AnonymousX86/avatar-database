<template>
  <footer class="mt-4">
    <b-row no-gutters class="pb-5 pt-3 border-top">
      <b-col>
        <b-button
          href="https://ko-fi.com/anonymousx86"
          target="_blank"
          rel="noopener"
          variant="secondary"
        >
          <b-img
            src="@/assets/img/KofiLogo.webp"
            alt="Support me on Ko-fi"
            height="42"
            class="py-0 px-3"
          />
        </b-button>
      </b-col>
      <b-col>
        <p class="text-right text-muted">
          Made by Jakub Suchenek |
          <a href="https://github.com/AnonymousX86" title="Check my GitHub">
            GitHub
          </a>
        </p>
      </b-col>
    </b-row>
  </footer>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  name: "MyFooter",
}
</script>

<style scoped></style>

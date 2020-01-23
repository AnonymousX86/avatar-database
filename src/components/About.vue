<template>
  <div class="row">
    <div class="col-12 my-3">
      <p class="h1">What do you want to know?</p>
      <div class="row">
        <div class="col-xl-2 col-lg-3 col-md-4 col-5">
          <img class="img-fluid rounded" :src="authorPhoto" alt="Author photo" />
        </div>
        <div class="col-xl-10 col-lg-9 col-md-8 col-7">
          <p class="text-justify text-md-left">
            Hello, my name's Jakub. I'm C++/Python programmer and web developer.
            <br />One day I&nbsp;though: "I&nbsp;have a&nbsp;lot of&nbsp;avatars downloaded,
            also I&nbsp;have no&nbsp;idea what to do..." and&nbsp;this is&nbsp;how
            Avatar&nbsp;Database has&nbsp;been created.
          </p>
          <p>
            Make sure to visit
            <a href="https://github.com/AnonymousX86">my GitHub profile</a> for more projects.
          </p>
        </div>
      </div>
    </div>
    <!-- Contribute -->
    <div class="col-12">
      <p class="h1">Helpful sites</p>
      <ul type="disc" class="contrib">
        <li>
          <a href="https://www.freepik.com/free-photos-vectors/poster" target="_top">
            Eror 404 thumbnail created by macrovector - www.freepik.com
          </a>
        </li>
        <li>
          <a href="https://fonts.google.com/" target="_top">
            Google Fonts <span class="faded">(Special Elite font)</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-page",
  data() {
    return {
      title: "About"
    };
  },

  methods: {},

  computed: {
    authorPhoto() {
      return './src/img/index/author.jpeg';
    },
  }
};
</script>

<style scoped>
</style>

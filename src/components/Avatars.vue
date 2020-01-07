<template>
  <div class="row">
    <!-- Search field -->
    <div class="col-12 my-3">
      <div class="search-wrapper">
        <form class="search">
          <label for="searchField">Try to search something</label>
          <br />
          <input
            type="text"
            name="searchField"
            id="searchField"
            placeholder="Search by tags..."
            v-model="search"
            list="tags"
          />
          <button type="reset" @click="updateSearch('')">Clear</button>
          <datalist id="tags">
            <option v-for="tag of TagsSortedData" :key="tag" :value="tag"></option>
          </datalist>
        </form>
      </div>
    </div>
    <!-- Tag list -->
    <div class="col-12 my-3">
      <p class="h4">
        Tag list
        <span class="faded">({{ TagsFilteredAmount }})</span>
      </p>
      <button
        v-for="tag of TagsFilteredData"
        :key="tag"
        @click="updateSearch(tag)"
        class="tag"
      >{{ tag }}</button>
    </div>
    <!-- Avatar list -->
    <div class="col-12 my-3">
      <p class="h4">
        Avatar list
        <span class="faded">({{ AvatarsFilteredAmount }})</span>
      </p>
      <div class="row">
        <!-- START Genrating avatars -->
        <div
          v-for="avatar of AvatarsFilteredData"
          :key="avatar.name"
          class="col-6 col-sm-4 col-md-3 col-lg-2 avatar-wrapper mb-1"
        >
          <div class="image-container">
            <img :src="LoadingImgMain" :alt="LoadingImageAlt" class="img-fluid" />
            <img :src="imgLink(avatar.name)" :alt="''" class="img-fluid" />
          </div>
          <p class="my-1">{{ avatar.name }}</p>
          <div class="btn-container">
            <button type="button" @click="ShowInfo(avatar)" class="tags">Info</button>
            <button type="button" @click="DownloadImg(avatar.name)" class="download">Preview</button>
          </div>
        </div>
        <!-- END Genrating avatrs -->
      </div>
    </div>
    <!-- Contribute -->
    <div class="col-12">
      <a
        href="https://www.freepik.com/free-photos-vectors/poster"
      >Eror 404 thumbnail created by macrovector - www.freepik.com</a>
    </div>
    <!-- Overlay wrapper -->
    <div id="overlay-wrapper" style="display: none;" @click="CloseDownload">
      <div class="overlay">
        <button type="button" class="btn-back">Back</button>
        <div>
          <img
            :src="'./../../src/img/index/error.jpeg'"
            :alt="'No image'"
            :class="'img-fluid download-img'"
            id="download-overlay-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import states from "./../data.js";
export default {
  name: "my-avatars",

  data() {
    return {
      search: ""
    };
  },

  methods: {
    updateSearch(tag) {
      this.search = tag;
    },
    // Show tags after pressing button
    ShowInfo(input) {
      alert("Tags: " + input.tags.join(", ") + "\nSize: " + input.size + "px");
    },
    // Download avatar button
    DownloadImg(name) {
      $("#download-overlay-image").attr(
        "src",
        "./../src/img/avatars/" + name + ".jpeg"
      );
      $("#overlay-wrapper").fadeIn("fast");
      // .removeClass("hidden");
    },
    CloseDownload() {
      $("#overlay-wrapper").fadeOut("fast");
      // .addClass("hidden");
    },
    // Adding link to "<img ... />" based on avatars name
    imgLink(name) {
      return "./../src/img/avatars/" + name + ".jpeg";
    },
    // Comparing function (needed for sorting avatars by name)
    compare(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
  },

  computed: {
    LoadingImgMain() {
      return "./src/img/index/error.jpeg";
    },
    LoadingImageAlt() {
      return "";
    },
    // +-----------+
    // |  AVATARS  |
    // +-----------+
    //
    // All avatars
    AvatarsTotalData() {
      return states.Avatars;
    },
    // Sorted avatars
    AvatarsSortedData() {
      return this.AvatarsTotalData.sort(this.compare);
    },
    // Filtered avatars
    AvatarsFilteredData() {
      if (this.search == "") {
        return this.AvatarsSortedData;
      } else {
        return this.AvatarsSortedData.filter(avatar =>
          avatar.tags.includes(this.search.toLowerCase())
        );
      }
    },
    // Amount of all avatars
    AvatarsTotalAmount() {
      return this.AvatarsTotalData.length;
    },
    // Amount of filtered avatars
    AvatarsFilteredAmount() {
      return this.AvatarsFilteredData.length;
    },
    // +--------+
    // |  TAGS  |
    // +--------+
    //
    // All tags
    TagsTotalData() {
      let result = [];
      for (let avatar of this.AvatarsTotalData) {
        for (let tag of avatar.tags) {
          if (!result.includes(tag)) {
            result.push(tag);
          }
        }
      }
      return result;
    },
    // Sorted tags by name
    TagsSortedData() {
      return TagsTotalData.sort();
    },
    // Filtered tags
    TagsFilteredData() {
      let result = [];
      for (let avatar of this.AvatarsFilteredData) {
        for (let tag of avatar.tags) {
          if (!result.includes(tag)) {
            result.push(tag);
          }
        }
      }
      return result.sort();
    },
    // Amount of all tags
    TagsTotalAmount() {
      return this.TagsTotalData.length;
    },
    // Amount of filtered tags
    TagsFilteredAmount() {
      return this.TagsFilteredData.length;
    }
  }
};
</script>

<style>
#overlay-wrapper {
  width: 100%;
  height: 100%;
  background-color: black;
  background-color: #000000ee;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.download-img {
  position: relative;
  margin: 15px auto 0;
  display: block;
  max-height: calc(100vh - 30px);
}
</style>

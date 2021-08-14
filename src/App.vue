<template>
  <div class="page-container">
    <carousel :per-page="1" :autoplay="true" :loop="true">
      <slide v-for="banner in banners" :key="banner.id">
        <banner v-bind="banner" />
      </slide>
    </carousel>
    <router-view />
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";

import { Carousel, Slide } from "vue-carousel";
import Banner from "./components/Banner.vue";

import BannersMock from "./mocks/banners.mock";

export default {
  name: "App",
  components: {
    Banner,
    Carousel,
    Slide,
  },
  data() {
    return {
      banners: BannersMock,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  max-width: 198rem;
  width: 100%;
  margin: 0 auto;
}
</style>

<style lang="scss">
@import "./scss/global.scss";
</style>

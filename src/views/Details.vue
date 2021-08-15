<template>
  <main>
    <div class="content">
      <div class="content__header">
        <font-awesome-icon
          class="content__arrow"
          @click="goBackToMainPage"
          icon="chevron-left"
        />
        <h3 class="content__title">{{ details.category }}</h3>
      </div>
      <carousel
        :autoplay="true"
        :per-page="1"
        :perPageCustom="[[768, 2]]"
        :loop="true"
        :navigationEnabled="true"
        navigationNextLabel="&#8594;"
        navigationPrevLabel="&#8592;"
      >
        <slide>
          <detail-card v-bind="detailCardData" />
        </slide>

        <slide>
          <detail-card v-bind="detailCardData" />
        </slide>

        <slide>
          <detail-card v-bind="detailCardData" />
        </slide>

        <slide>
          <detail-card v-bind="detailCardData" />
        </slide>
      </carousel>

      <div style="margin-top: 2rem"></div>

      <p class="content__description">
        O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos
        os fatos e acontecimentos relevantes de uma empresa desde o seu ano de
        fundação. Tenha acesso aos principais eventos corporativos de uma
        empresa, como: marcos jurídicos, mudança no quadro societário, aumento
        de capital,reportagens e muito mais.
      </p>

      <p class="content__description">
        Após realizar a consulta, o histórico é salvo automaticamente, tornando
        as informações acessíveis ao usuário. A linha do tempo pode também ser
        exportada no formato PDF.
      </p>

      <div class="footer">
        <price
          v-if="details.price"
          :price="details.price"
          color-modifier="black"
          amount-size="xlarge"
        />
        <base-button text="Habilitar" size="small" />
      </div>
    </div>
  </main>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

import DetailCard from "../components/DetailCard.vue";
import BaseButton from "../components/BaseButton.vue";
import Price from "../components/Price.vue";

import BannersMock from "../mocks/banners.mock";
export default {
  name: "Details",
  components: {
    Carousel,
    Slide,
    DetailCard,
    BaseButton,
    Price,
  },
  data() {
    return {
      details: {},

      detailCardData: {
        image: require("../assets/Captura de Tela -1.svg"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua.",
      },
      banners: BannersMock,
    };
  },

  methods: {
    goBackToMainPage() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.details = this.$route.params;
  },
};
</script>

<style lang="scss">
.VueCarousel-navigation-button.VueCarousel-navigation-prev,
.VueCarousel-navigation-button.VueCarousel-navigation-next {
  color: var(--grey-light) !important;
  font-size: 5rem !important;

  @media screen and (max-width: 768px) {
    display: none !important;
  }
}
</style>

<style scoped lang="scss">
.content {
  max-width: 113rem;
  width: 100%;

  padding: 1rem;

  margin: 1rem auto 0 auto;

  &__header {
    display: flex;
    position: relative;
    justify-content: center;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }
  }

  &__arrow {
    position: absolute;
    top: 0.2rem;
    left: -2.5rem;
    font-size: 2.3rem;
    color: var(--tertiary);
    cursor: pointer;
  }

  &__title {
    color: var(--tertiary);
    font-size: 2.4rem;
    font-weight: 400;
    margin-bottom: 3rem;
    position: relative;
  }

  &__description {
    color: var(--grey-light);
    font-size: 1.6rem;
    line-height: 3rem;

    &:first-of-type {
      margin-bottom: 2rem;
    }
  }
}

.footer {
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  padding-bottom: 8rem;

  > div {
    margin-right: 3.8rem;
  }
}
</style>

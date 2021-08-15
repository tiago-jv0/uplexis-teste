<template>
  <div class="banner">
    <div :class="['banner__main', isWhite && 'banner__main--white']">
      <div class="banner__header">
        <router-link to="/">
          <img class="banner__logo" :src="logo" alt="Logo Upminer" />
        </router-link>

        <h3 :class="['banner__title', isWhite && 'banner__title--white']">
          {{ title }}
        </h3>
      </div>

      <div class="banner__content">
        <p
          :class="[
            'banner__description',
            isWhite && 'banner__description--white',
          ]"
        >
          {{ description }}
        </p>
      </div>

      <div class="banner__footer">
        <price
          :price="price"
          currency-modifier="small"
          amount-modifier="xlarge"
        />
        <base-button
          @click.stop.prevent="openDetails()"
          text="Saiba Mais"
          size="small"
        />
      </div>
    </div>

    <div class="banner__image" :style="imageStyles"></div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import Price from "./Price.vue";
export default {
  name: "Banner",
  components: {
    BaseButton,
    Price,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isWhite: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },

  data() {
    const backgroundColor = this.isWhite
      ? "var(--white)"
      : "var(--banner-background-second-color)";

    return {
      imageStyles: {
        backgroundColor,
        backgroundImage: `url(${this.image})`,
      },
    };
  },

  methods: {
    openDetails() {
      const cardDetails = {
        category: this.title,
        description: this.description,
        price: this.price,
      };
      this.$router.push({
        name: "details",
        params: cardDetails,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.banner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 5px solid var(--secondary);
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    &__image {
      display: none;
    }
  }
  &__main {
    padding: 2rem 3rem;

    background-image: linear-gradient(
      to right,
      var(--banner-background-first-color) 0%,
      var(--banner-background-second-color) 75%
    );

    &--white {
      background-image: linear-gradient(
        to right,
        var(--grey) 0%,
        var(--white) 75%
      );
    }

    @media screen and (min-width: 1200px) {
      padding: 5rem 8.5rem;
    }
  }

  &__logo {
    margin-right: 1.8rem;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width: 568px) {
    }
    justify-content: flex-start;
  }
  &__title {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;

    &--white {
      color: var(--dark);
    }

    &::before {
      @media screen and (min-width: 768px) {
        content: "|";
        display: inline-block;
        margin-right: 1rem;
        transform: scaleY(1.2);
        color: var(--grey);
      }
    }
    @media screen and (min-width: 992px) {
      font-size: 2rem;
      line-height: 2.4rem;
    }
    @media screen and (min-width: 1300px) {
      font-size: 3.2rem;
      line-height: 3.8rem;
    }
  }

  &__description {
    max-width: 61rem;
    margin-top: 2.5rem;
    font-weight: 400;
    color: var(--white);
    font-size: 1.4rem;
    line-height: 1.9rem;

    &--white {
      color: var(--grey-light);
    }

    @media screen and (min-width: 768px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }

    @media screen and (min-width: 1300px) {
      font-size: 1.9rem;
      line-height: 2.4rem;
    }
  }

  &__image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }

  &__footer {
    margin-top: 1.8rem;
    display: flex;
    align-items: center;

    > div {
      margin-right: 2.2rem;
    }
  }
}
</style>

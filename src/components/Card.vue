<template>
  <div class="card">
    <div class="card__content">
      <font-awesome-icon :icon="icon" class="card__icon" />

      <h3 class="card__category">{{ category }}</h3>

      <p v-if="!!description" class="card__description">{{ description }}</p>
    </div>
    <div class="card__about">
      <price :price="price" currency-modifier="large" amount-modifier="large" />
      <button class="card__cta" @click="openDetails">Saiba Mais</button>
    </div>
  </div>
</template>

<script>
import Price from "./Price.vue";
export default {
  name: "Card",
  components: {
    Price,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    category: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
  },
  methods: {
    openDetails() {
      const componentDetails = {
        icon: this.icon,
        category: this.category,
        description: this.description,
        price: this.price,
      };
      this.$router.push({
        name: "details",
        params: componentDetails,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  text-align: center;
  background: var(--white) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 18px #0000000f;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;

  &__content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__icon {
    text-align: center;
    width: 2.6rem;
    height: 3.5rem;

    path {
      fill: var(--tertiary);
    }
  }

  &__category {
    font-size: 2rem;
    line-height: 2.4rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    font-weight: 400;
    color: var(--grey-black);

    margin: 1.8rem 0;
  }

  &__description {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    font-size: 1.3rem;
    color: var(--grey);
    line-height: 2.6rem;
  }

  &__about {
    margin-top: 4rem;
    height: 5.3rem;
    background: transparent
      linear-gradient(39deg, var(--secondary) 0%, var(--tertiary) 100%) 0% 0%
      no-repeat padding-box;
    border-radius: 0px 0px 5px 5px;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__cta {
    cursor: pointer;
    border: none;
    background: transparent;
    color: var(--white);
    font-size: 1.8rem;
  }
}
</style>

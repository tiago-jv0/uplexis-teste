<template>
  <div class="card">
    <div class="card__icon">
      <img :src="iconUrl" :alt="iconDescription" />
    </div>

    <h3 class="card__title">{{ title }}</h3>

    <p class="card__description">{{ description }}</p>

    <div class="card__about">
      <span class="card__price">R$ {{ price }}</span>
      <button class="card__cta">Saiba Mais</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    iconUrl: {
      type: String,
      required: true,
    },
    iconDescription: {
      type: String,
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    price: Number,
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 305px;
  text-align: center;
  background: var(--white) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 18px #0000000f;
  border-radius: 5px;

  padding-top: 3rem;
  &__icon {
    text-align: center;
  }

  &__title {
    font-size: 2rem;
    line-height: 2.4rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    font-weight: 400;
    color: #444444;

    margin: 1.8rem 0;
  }

  &__description {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    font-size: 1.3rem;
    color: var(--grey);
    line-height: 1.5rem;
  }

  &__about {
    margin-top: 4rem;
    height: 5.3rem;
    background: transparent linear-gradient(39deg, #ff8e49 0%, #f0690a 100%) 0%
      0% no-repeat padding-box;
    border-radius: 0px 0px 5px 5px;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__price {
    font-size: 2.2rem;
    line-height: 2.6rem;
    color: var(--white);
  }

  &__cta {
    border: none;
    background: transparent;
    color: var(--white);
    font-size: 1.8rem;
  }
}
</style>

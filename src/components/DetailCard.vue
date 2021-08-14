<template>
  <div class="card">
    <img class="card__image" :src="image" alt="Imagem" />
    <p class="card__text">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "DetailCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  max-width: 48rem;
  width: 100%;
  background: var(--white) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 18px #0000000f;
  border-radius: 0.5rem;
  padding: 1rem;
  &__image {
    max-width: 100%;
  }

  &__text {
    padding: 1rem;
    font-size: 1.4rem;
    color: var(--tertiary);
    line-height: 2.5rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
}
</style>

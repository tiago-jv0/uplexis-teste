<template>
  <div class="category">
    <div class="category__image">
      <img :src="iconUrl" :alt="iconDescription" />
    </div>

    <p class="category__text">{{ category }}</p>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    iconUrl: {
      type: String,
      required: true,
    },
    iconDescription: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  background: #f9f9f9 0% 0% no-repeat padding-box;
  border: 1px solid #ececec;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 8.4rem;
  &__image {
  }

  &__text {
    margin-top: 1rem;
    font-size: 1.4rem;
    line-height: 1.68rem;
    color: var(--grey-light);
  }
}
</style>

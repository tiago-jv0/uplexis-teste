<template>
  <div :class="['category', selected && 'category--selected']">
    <div class="category__image">
      <font-awesome-icon :icon="icon" />
    </div>

    <p class="category__text">{{ category }}</p>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    selected: {
      type: Boolean,
      default: () => false,
    },
    icon: {
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
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 8.4rem;
  cursor: pointer;
  &__image {
    svg {
      width: 2rem;
      height: 2rem;

      path {
        fill: var(--grey-light) !important;
      }
    }
  }

  &__text {
    margin-top: 1rem;
    font-size: 1.4rem;
    line-height: 1.68rem;
    color: var(--grey-light);
    text-align: center;
  }

  &--selected {
    background: var(--primary) 0% 0% no-repeat padding-box;
    .category__image {
      path {
        fill: var(--white) !important;
      }
    }

    .category__text {
      color: var(--white);
    }
  }
}
</style>

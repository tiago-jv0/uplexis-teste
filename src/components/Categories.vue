<template>
  <div class="categories">
    <category
      :selected="selectedCategory === item.category"
      @click.native="onCategoryChosen(item.category)"
      v-bind="item"
      :key="item.id"
      v-for="item in items"
    />
  </div>
</template>

<script>
import Category from "./Category.vue";
export default {
  components: { Category },
  name: "Categories",
  props: {
    selectedCategory: {
      type: String,
      required: false,
      default: () => "Mundo",
    },
    items: { type: Array, required: true },
  },

  methods: {
    onCategoryChosen(category) {
      this.$emit("on-category-chosen", category);
    },
  },
};
</script>

<style lang="scss" scoped>
.categories {
  overflow-x: scroll;
  scrollbar-color: var(--primary);

  display: grid;
  grid-template-columns: repeat(10, minmax(max-content, 1fr));

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
  }

  @media screen and (min-width: 992px) {
    overflow: hidden;
  }
}
</style>

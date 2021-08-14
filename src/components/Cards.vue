<template>
  <div class="cards">
    <card v-bind="item" :key="item.id" v-for="item in items" />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: { Card },
  name: "Cards",
  props: {
    data: {
      type: Array,
      required: true,
    },
    orderBy: { type: String, default: () => "releaseDate" },
    filter: { type: String, default: () => "Mundo" },
  },

  computed: {
    items() {
      let filteredData =
        this.filter === "Mundo"
          ? [...this.data]
          : this.data.filter((item) => item["category"] === this.filter);

      const sortFunctions = {
        price: (currentItem, nextItem) => currentItem.price - nextItem.price,
        releaseDate: (currentItem, nextItem) =>
          new Date(currentItem.releaseDate).getTime() >=
          new Date(nextItem.releaseDate).getTime(),
      };

      return filteredData.sort(sortFunctions[this.orderBy]);
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30.5rem, 1fr));
  gap: 3.6rem;
}
</style>

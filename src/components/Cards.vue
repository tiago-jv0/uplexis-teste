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
    items: Array,
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

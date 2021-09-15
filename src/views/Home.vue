<template>
  <div class="page-container">
    <div>
      <categories
        :selected-category="filterCardsBy"
        @on-category-chosen="filterBy"
        :items="categories"
      />
      <div class="container">
        <span class="text">Ordernar:</span>
        <div class="select">
          <v-select
            v-model="orderCardsBy"
            label="name"
            :options="orderOptions"
            :reduce="(item) => item.orderBy"
            :clearable="false"
          ></v-select>
        </div>
      </div>
      <cards :data="cards" :orderBy="orderCardsBy" :filter="filterCardsBy" />
    </div>
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";

import Cards from "../components/Cards.vue";
import Categories from "../components/Categories.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Categories,
    Cards,
  },

  methods: {
    filterBy(category) {
      this.filterCardsBy = category;
    },
  },

  created() {
    this.$store.dispatch("FETCH_ALL");
  },

  data() {
    return {
      orderOptions: [
        { name: "lancamento", orderBy: "releaseDate" },
        { name: "preço", orderBy: "price" },
      ],
      orderCardsBy: "lancamento",
      filterCardsBy: "Mundo",
    };
  },

  computed: {
    ...mapGetters({
      categories: "sources",
      cards: "apps",
    }),
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  padding: 1rem;
}
</style>

<style lang="scss">
.container {
  margin: 2rem 0;
  display: flex;
  align-items: center;
}
.vs__selected {
  font-size: 1.4rem;
}
.vs__dropdown-option {
  font-size: 1.4rem;
}

.VueCarousel-dot {
  display: none !important;
}
.text {
  font-weight: bold;
  font-size: 18px;
}

.select {
  width: 25rem;
  margin-left: 2rem;
}
</style>

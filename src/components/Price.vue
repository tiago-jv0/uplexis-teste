.
<template>
  <div :class="['price', colorModifier && `price--${colorModifier}`]">
    <small
      :class="[
        'price__currency',
        currencySize && `price__currency--${currencySize}`,
      ]"
      >R$</small
    >
    <span
      :class="['price__amount', amountSize && `price__amount--${amountSize}`]"
    >
      {{ formattedPrice }}</span
    >
  </div>
</template>

<script>
export default {
  name: "Price",
  props: {
    price: {
      type: Number,
    },
    currencySize: {
      type: String,
      default: () => "",
    },
    colorModifier: {
      type: String,
      default: () => "white",
    },
    amountSize: {
      type: String,
      default: () => "",
    },
  },

  computed: {
    formattedPrice() {
      return this.price.toString().replace(".", ",");
    },
  },
};
</script>

<style scoped lang="scss">
.price {
  &--white {
    color: var(--white);
  }

  &--black {
    color: var(--black);
  }

  &__currency {
    font-size: 1.6rem;
    color: var(--black);

    &--large {
      font-size: 2.2rem;
      line-height: 4.5rem;
    }

    &--xlarge {
      font-size: 3.6rem;
    }
  }

  &__amount {
    font-size: 1.6rem;

    &--large {
      font-size: 2.2rem;
      line-height: 2.6rem;
    }

    &--xlarge {
      font-size: 3.7rem;
      line-height: 2.6rem;
    }
  }
}
</style>

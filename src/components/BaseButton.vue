<template>
  <button :class="['button', `button--${variant}`]" v-on="$listeners">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  border: none;
  font-family: "Roboto", sans-serif;

  background: transparent
    linear-gradient(39deg, var(--secondary) 0%, var(--primary) 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 1.8rem;

  &--small {
    padding: 0.6rem 1.8rem;
  }

  &--medium {
    padding: 0.75rem 3rem;
  }
}
</style>

<template>
  <app-card v-bind="card" />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  //this defines what 1rem is
  font-size: 62.5%; // 1 rem = 10px; 10px/16px = 62.5%
  scroll-behavior: smooth;
}

body {
  box-sizing: border-box;
  padding: 3rem;
}

:root {
  --white: #ffffff;
  --primary: #f26f14;
  --secondary: #ff8e49;
  --grey-black: #444444;
  --grey: #9e9e9e;
}
</style>

<template lang="pug">
  .wrapper
    header
    nav
    main
      nuxt
</template>

<script>
export default {

}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
.wrapper {
  height: 100vh;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: "header header" "nav main";
  overflow: hidden;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas: "header header" "main";
  }
}
header {
  grid-area: header;
  background: #CCCCCC;
}
main {
  grid-area: main;
  background: #CCCCCC;
  overflow: auto;
}
nav {
  grid-area: nav;
  background: #CCCCCC;
}
</style>

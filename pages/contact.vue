<template lang="pug">
  #contact
    #map.contact__map
    .contact__data
      .line 1
      .line 2
      .line 3
    .contact__reqvizits
    .contact__form

</template>

<style lang="scss">
#contact {
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr 25% 25%;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "contact__map contact__data contact__reqvizits"
    "contact__map contact__form contact__form";
  .contact__map {
    background: red;
    grid-area: contact__map;
  }
  .contact__data {
    grid-area: contact__data;

    background: green;
    display: flex;
    flex-direction: column;
    padding: 50px;
    @media (max-width: 1000px) {
      background: orange;
    }
    .line {
      flex-grow: 1;
      display: flex;
      // align-items: center;
      &:last-child {
        align-items: flex-end;
      }
    }
  }
  .contact__reqvizits {
    grid-area: contact__reqvizits;
    background: yellow;
  }
  .contact__form {
    grid-area: contact__form;
    background: blue;
  }
}
</style>

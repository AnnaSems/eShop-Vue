<template>
  <header>
    <input v-model="searchValue" type="text" class="input" />
    <button @click="onClick" class="input-button" type="button">Найти</button>
    <button class="cart-button" type="button" @click="$emit('toggle-cart')">
      Корзина
    </button>
  </header>
</template>

<script>
export default {
  data: () => ({
    searchValue: "",
  }),
  methods: {
    onClick() {
      this.$emit("filter-good", this.searchValue);
    },
  },
  watch: {
    searchValue() {
      this.onClick();
    },
  },
};
</script>

<style>
header {
  width: 100%;
  height: 6rem;
  border: 1px solid;
}
.input {
  margin: 30px;
  width: 120px;
  height: 30px;
}
.input-button {
  margin: 2%;
  width: 5rem;
  height: 40%;
  float: left;
  border: 1px solid;
  border-radius: 15%;
  cursor: pointer;
}
.cart-button {
  margin: 2%;
  width: 5rem;
  height: 40%;
  float: right;
  border: 1px solid;
  border-radius: 15%;
  cursor: pointer;
}
</style>

<template>
  <Header @toggleCart="toggleCartStatus" @filter-good="filterGood" />
  <GoodsList @add-to-cart="addToCart" :items="filterItems" />
  <Cart :cartGood="cartGoods" :isVisible="isVisibleCart" />
</template>

<script>
import Header from "./components/Header";
import GoodsList from "./components/GoodsList";
import Cart from "./components/Cart";

const API_LINK = "http://localhost:8082/";

export default {
  name: "App",
  components: {
    Header,
    GoodsList,
    Cart,
  },
  data: () => ({
    items: [],
    filterItems: [],
    cartGoods: [],
    isVisibleCart: false,
  }),
  mounted() {
    this.fetchGoods(`${API_LINK}catalog.json`);
    this.getCart();
  },
  methods: {
    async fetchGoods(url) {
      const response = await fetch(url);
      if (response.ok) {
        const commit = await response.json();
        this.items = commit;
        this.filterItems = commit;
      } else {
        console.log(response.status);
      }
    },
    addToCart(item) {
      this.makePOSTRequest(item, `${API_LINK}cart.json`).then(() =>
        this.getCart()
      );
    },
    makePOSTRequest(data, url) {
      fetch(url, {
        method: "POST", // или 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((data) => data.json());
    },
    async getCart() {
      const response = await fetch(`${API_LINK}cart.json`);
      if (response.ok) {
        const commit = await response.json();
        this.cartGoods = commit;
      } else {
        console.log(response.status);
      }
    },
    filterGood(value) {
      const regex = new RegExp(value, "i");
      this.filterItems = this.items.filter((item) =>
        regex.test(item.product_name)
      );
    },

    toggleCartStatus() {
      this.isVisibleCart = !this.isVisibleCart;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.add-cart {
  position: relative;
  left: 35%;
  width: 5rem;
  height: 15%;
  border: 1px solid;
}

main {
  height: 93%;
  margin-top: 70px;
}
</style>

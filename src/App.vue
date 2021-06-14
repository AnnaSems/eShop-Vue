<template>
    <header>
      <input @keydown="filterGood(value)" v-model="value" class="input" />
      <button @click="filterGood(value)" class="input-button" type="button">Найти</button>
      <button class="cart-button">Корзина</button>
    </header>
    <main>
      <div class="goods-list">
      <div class="goods-item" v-for="item in items" :key="item.product_name">
      <h3>{{item.product_name}}</h3>
      <p>{{item.price}}</p>
      <button @click="addGood(item)" class="add-cart">Добавить в корзину</button>
      </div>
      </div>
      <hr />
      <div v-if="isVisibleCart" class="cart-list">Корзина</div>
      <div v-if="isVisibleCart" class="goods-list" >
      <div class="goods-item" v-for="item in filterItems" :key="item.product_name">
      <h3>{{item.product_name}}</h3>
      <p>{{item.price}}</p>
      </div>
    </div>
    </main>
</template>

<script>
const API_LINK = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    items: [],
    filterItems: [],
    value: '',
    isVisibleCart: false,
  }),
  methods: {
    async fetchGoods() {
    const response = await fetch(`${API_LINK}/catalogData.json`);
    const commit = await response.json();
    this.items = commit;
    },
    filterGood(value) {
    const regex = new RegExp(value, 'i');
    this.items = this.items.filter(item => regex.test(item.product_name));
  },
    addGood(good) {
    this.filterItems.push(good);
    this.isVisibleCart = true;
    return this.filterItems;
  }
    },
  mounted() {
    this.fetchGoods()
  },
  watch: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
header {
  width: 100%;
  height: 6rem;
  border: 1px solid;
}
.input{
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
}
.add-cart{
  position: relative;
  left: 35%;
  width: 5rem;
  height: 15%;
  border: 1px solid;
}
.cart-button{
  margin: 2%;
  width: 5rem;
  height: 40%;
  float: right;
  border: 1px solid;
  border-radius: 15%;
}
main {
  height: 93%;
  margin-top: 70px;
}
.goods-list{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.goods-item{
  border: 1px solid;
  width: 20%;
  height: 250px;
}

.goods-item h3{
  margin-top: 120px;
  text-align: center;
}

.goods-item p{
  margin-top: 10px;
  text-align: center;
}
</style>

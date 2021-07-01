<template>
  <main>
    <div class="goods-list">
      <div class="goods-item" v-for="item in items" :key="item.product_name">
        <h3>{{ item.product_name }}</h3>
        <p>{{ item.price }}</p>
        <button @click="add(item)" class="add-cart">Добавить в корзину</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ["items"],
  methods: {
    add(item) {
      this.$emit("add-to-cart", item);
    },
  },
};
</script>

<style>
.goods-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.goods-item {
  border: 1px solid;
  width: 20%;
  height: 250px;
  margin: 0 5% 30px 5%;
  margin-bottom: 50px;
}

.goods-item h3 {
  margin-top: 120px;
  text-align: center;
}

.goods-item p {
  margin-top: 10px;
  text-align: center;
}
</style>

<template>
  <div class="cart" v-show="isVisible">
    <div class="cart-list">Корзина</div>
    <div class="goods-list">
      <div class="goods-item" v-for="item in cartGood" :key="item.id">
        <h3>{{ item.product_name }}</h3>
        <p>{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartGood: {
      type: Array,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.goods-item {
  border: 1px solid;
  width: 20%;
  height: 250px;
}

.goods-item h3 {
  margin-top: 120px;
  text-align: center;
}

.goods-item p {
  margin-top: 10px;
  text-align: center;
}
.cart {
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
  padding: 20px;
  width: 800px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  overflow: auto;
}
</style>

<template>
  <div>
    <h2>Product Catalog</h2>
    <ul>
      <li v-for="product in cartStore.productCatalog" :key="product.id">

        {{ product.name }} - {{ product.price }}$
        <button @click="cartStore.addToCart(product)">Add to Cart</button>
      </li>
    </ul>
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="(item, index) in cartStore.items"
       :key="item.id">
        {{ item.name}} - ({{ item.quantity }} pcs) - {{ item.price }}$
        <button @click = "cartStore.removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <p>Total Price: {{ cartStore.totalPrice }}$</p>
    <p>Aantal Product: {{ cartStore.aantalProduct }}</p>
    <button @click="cartStore.clearCart()">Clear Cart</button>

  </div>

</template>

<script setup>
import { useStore} from "@/stores/index";

const cartStore = useStore();

/*
const addToCart = (product) => {
  const existingIndex = cartStore.findCartItemIndex(product);
  if (existingIndex !== -1) {
    cartStore.updateCartItemQuantity(existingIndex);
  } else {
    cartStore.addToCart(product);
  }
};

const addProductToCart = (product) => {
  cartStore.addToCart(product);
}

const addCart = (product) =>{
  cartStore.addToCart(product);
}

const removeFromCart = (index) =>{
  cartStore.removeFromCart(index);
}

const clearCart = () => {
  cartStore.clearCart();
}
*/


</script>

<style scoped>

</style>
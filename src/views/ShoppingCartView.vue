<template>
  <div>
    <ShoppingCart />
  </div>

</template>

<script>
import { defineComponent} from "vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default defineComponent({
  name: "ShoppingCartView",
  components: {
    ShoppingCart
  }

});
</script>

<style>

</style>
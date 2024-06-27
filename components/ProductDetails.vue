<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="" class="max-w-[400px] mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <p class="font-bold border-b-2 pb-2 mb-4">Product description:</p>
        <p class="">{{ product.description }}</p>
        <button class="btn flex mt-7">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <p class="text-lg">Add to cart</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>

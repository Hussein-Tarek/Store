<template>
  <div class="flex flex-wrap gap-8 justify-center mt-10">
    <div class="card card-compact w-96 bg-base-100 shadow-xl min-h-[300px]">
      <figure>
        <img class="max-h-[300px]" :src="product.image" />
        <p></p>
      </figure>
      <div class="card-body">
        <span
          class="bg-black text-white text-lg font-bold absolute right-4 top-2 w-18 rounded"
          >{{ product.price }}$</span
        >
        <h2 class="card-title pt-5">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "productDetails",
  data() {
    return {
      id: "",
      product: {},
    };
  },
  created() {
    this.getProductById();
  },
  methods: {
    getProductById() {
      this.id = this.$route.params.id;
      console.log(this.id);
      axios
        .get(`http://localhost:2000/products/${this.id}`)
        .then((data) => {
          this.product = data.data;
          console.log(data.data);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>

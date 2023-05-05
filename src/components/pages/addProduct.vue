<template>
  <div class="text-center w-full flex justify-center pt-10">
    <form class="w-[300px]" @submit.prevent="handleSubmit">
      <label class="label">
        <span class="label-text">Title</span>
      </label>
      <input
        type="text"
        placeholder="Enter Title"
        class="input input-bordered w-full max-w-xs"
        v-model="data.title"
      />
      <label class="label">
        <span class="label-text">Price</span>
      </label>
      <input
        type="number"
        placeholder="Enter Price"
        class="input input-bordered w-full max-w-xs"
        v-model="data.price"
      />
      <label class="label">
        <span class="label-text">Description</span>
      </label>
      <input
        type="text"
        placeholder="Enter Description"
        class="input input-bordered w-full max-w-xs"
        v-model="data.description"
      />
      <label class="label">
        <span class="label-text">Image</span>
      </label>
      <input
        type="text"
        placeholder="Enter url"
        class="input input-bordered w-full max-w-xs"
        v-model="data.image"
      />
      <button class="btn btn-primary block m-auto mt-10" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addProduct",
  data() {
    return {
      data: {
        title: "",
        price: "",
        description: "",
        image: "",
      },
    };
  },

  methods: {
    handleSubmit() {
      axios
        .post("http://localhost:2000/products", {
          title: this.data.title,
          price: this.data.price,
          description: this.data.description,
          image: this.data.image,
        })
        .then((res) => {
          console.log(res);
          this.$router.push(`/products`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>

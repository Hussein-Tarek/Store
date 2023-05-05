<template>
  <div class="flex flex-wrap gap-8 justify-center mt-10">
    <div v-for="product in products" :key="product.id">
      <div
        class="card card-compact w-96 bg-base-100 shadow-xl min-h-[350px] max-w-[300px]"
      >
        <figure class="max-h-[510px] mt-10">
          <img class="h-52" :src="product.image" alt="product" />
        </figure>
        <div class="card-body">
          <button @click="handleDetails(product.id)">
            <h2 className=" mb-5 text-justify">
              {{ product.title.substring(0, 50) }}
              <span className="text-gray-500 font-bold"> Read More....</span>
            </h2>
          </button>
          <div
            class="card-actions flex items-end absolute right-0 gap-0 top-12"
          >
            <button
              class="btn bg-transparent border-none"
              @click="handleDelete(product.id)"
            >
              <div class="w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ff0000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M10 12V17"
                      stroke="#ff0000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14 12V17"
                      stroke="#ff0000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4 7H20"
                      stroke="#ff0000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                      stroke="#ff0000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                      stroke="#ff0000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
            <button
              class="btn bg-transparent border-none w-15"
              @click="handleEdit(product.id)"
            >
              <div class="w-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
          <!-- <h2 class="card-title pb-10">
            {{ product.title.substring(0, 30) }}...
          </h2> -->
        </div>
      </div>
    </div>
    <button
      class="btn btn-circle bg-black fixed bottom-5 right-5"
      @click="handleAdd"
    >
      +
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allProducts",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getAllProducts();
  },
  methods: {
    getAllProducts() {
      axios
        .get("http://localhost:2000/products")
        .then((data) => {
          console.log(data?.data);
          this.products = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDetails(id) {
      this.$router.push(`/products/${id}`);
    },
    handleAdd() {
      this.$router.push("/add");
    },
    handleEdit(id) {
      this.$router.push(`/edit/${id}`);
    },
    handleDelete(id) {
      axios
        .delete(`http://localhost:2000/products/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.getAllProducts();
    },
  },
};
</script>

<style scoped></style>

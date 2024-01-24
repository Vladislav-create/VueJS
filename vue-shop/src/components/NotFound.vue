<template>
  <div class="center">
    <HeaderComp />
    <div class="content">
      <section class="left">
        <img class="left__img" src="../assets/404.png" alt="Цифры 404" />
        <h3 class="left__text">
          We are sorry, but the page you requested was not found
        </h3>
        <router-link to="/indexcomp">
            <button class="left__btn">
          Back To Home<svg
            class="main-text__btn__arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
          >
            <path
              d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        </router-link>
      </section>
      <section class="right">
        <img src="../assets/404img.png" alt="" />
      </section>
    </div>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";

export default {
  name: "NotFound",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { HeaderComp },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "DM Serif Display", serif;
  font-family: "Jost", sans-serif;
  font-family: "Lato", sans-serif;
  font-family: "Open Sans", sans-serif;
}

a {
  text-decoration: none;
  cursor: pointer;
}
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 60px;
  &__btn {
    cursor: pointer;
    border: none;
    padding: 26px 49px;
    max-width: 240px;
    background-color: #292f36;
    border-radius: 18px;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 8px;

    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
  }
}
</style>

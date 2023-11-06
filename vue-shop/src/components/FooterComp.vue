<template>
  <div class="footer__box center">
    <div class="footer__left">
        <div class="footer__left__logo">
            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 34.0003H13.9588V24.499C13.9588 22.4853 15.5898 20.8543 17.6035 20.8543C19.6172 20.8543 21.2482 22.4853 21.2482 24.499V34.0003H34.4975V0C15.7211 0 0.5 15.2211 0.5 34.0003Z" fill="#CDA274"/>
            </svg> 
            <h3 class="footer__left__logo__title">Interno</h3>
        </div>
        <p class="footer__left__text">It is a long established fact that a reader will be distracted lookings.</p>
        <div class="footer__left__social-icons">
          <img src="../assets/twitter.png" alt="">
        </div>
    </div>
    <div class="footer__middle">
      <h3 class="footer__middle__title">Pages</h3>
      <a href="#" class="footer__middle__nav">Home</a>
      <a href="#" class="footer__middle__nav">Project</a>
      <a href="#" class="footer__middle__nav">Blog</a>
    </div>
    <div class="footer__right">
      <h3 class="footer__right__title">Contact</h3>
      <p class="footer__right__address">55 East Birchwood Ave. Brooklyn, New York 11201</p>
      <p class="footer__right__email">contact@interno.com</p>
      <p class="footer__right__phone">(123) 456 - 7890</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComp",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
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

.footer__box {
  display: flex;
  gap: 101px;
  margin-top: 96px;
}

.footer__left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__logo {
    display: flex;
    align-items: baseline;
    gap: 10px;
    &__title{
      color: #292F36;
      font-size: 40px;
      font-weight: 400;
      line-height: 125%;
      margin-bottom: 18px;
    }
  }
  &__text {
      color: #4D5053;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
      margin-bottom: 31px;
      max-width: 393px;
      text-align: start;
    }
}

.footer__middle {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  &__title{
    color: #292F36;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
  }
  &__nav {
    color: #4D5053;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0.22px;
  }
}

.footer__right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 29px;
  &__title {
    color: #292F36;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
  }
  &__address {
    color: #4D5053;
    font-size: 22px;
    font-weight: 400;
    line-height: 300%;
    letter-spacing: 0.22px;
  }
  &__email {
    color: #4D5053;
    font-size: 22px;
    font-weight: 400;
    line-height: 300%;
    letter-spacing: 0.22px;
  }
  &__phone {
    color: #4D5053;
    font-size: 22px;
    font-weight: 400;
    line-height: 300%;
    letter-spacing: 0.22px;
  }
}

</style>

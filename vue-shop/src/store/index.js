import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    counter: 0,
    products: [
      {
        id: 0,
        name: 'Aple',
        price: 200,
        quantity: 1
      },
      {
        id: 1,
        name: 'Potato',
        price: 150,
        quantity: 1
      },
      {
        id: 2,
        name: 'Pineaple',
        price: 300,
        quantity: 1
      },
    ],
    images: 'Project-details-1.png',
    paths: [
      'Project-details-1.png',
      'Project1.png',
      'Project2.png',
    ]
  },
  mutations: {
    STORE_DECREMENT(state){
      state.counter++
    },
    STORE_INCREMENT(state){
      state.counter--
    },
    ADD_PRODUCT(state, product){
      state.products.push(product)
    },
    CHAGE_PATH(state){
      state.counter++
      if (state.counter == state.paths.length) {
        state.counter = 0
      }
      state.images = state.paths[state.counter]
    }
  },
  actions: {
    addProduct(store, product){
      const findProduct = store.getters.GET_PRODUCTS.find((item) => item.name === product.name)
      if (findProduct) {
        findProduct.quantity++
      } else {
        store.commit('ADD_PRODUCT', product)
      }
    }
  },
  getters: {
    GET_PRODUCTS(state){
      return state.products
    },
    totalQuantity(state){
      return state.products.reduce((acc, product) => acc + product.quantity, 0)
    },
    totalPrice(state){
      return state.products.reduce((acc, product) => acc + product.quantity * product.price, 0)
    },
    getImages(state){
      return state.images
    }
  },
});

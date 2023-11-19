<template>
    <div>
        {{ counter }}
        <button @click="compDecrement">+</button>
        <button @click="compIncrement">-</button>
        <div v-for="(product, index) in GET_PRODUCTS" :key=index>
            {{ product.name }} - {{ product.price }} - {{ product.quantity }}
        </div>
        <input type="text" placeholder="name" v-model="name">
        <input type="number" placeholder="price" v-model="price">
        <button @click="addNewProduct">Add</button>
        <h3>TOTAL QUANTITY: {{ totalQuantity }}</h3>
        <h3>TOTAL PRICE: {{ totalPrice }}</h3>
    </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex';
export default {
    name: 'TestComp',

    data() {
        return {
            name: '',
            price: '',
        };
    },

    mounted() {
        
    },

    methods: {
        ...mapMutations(['STORE_DECREMENT', 'STORE_INCREMENT', 'ADD_PRODUCT']),
        ...mapActions(['addProduct']),
        compDecrement(){
            this.STORE_DECREMENT()
            // this.$store.commit('STORE_DECREMENT')
        },
        compIncrement(){
            this.STORE_INCREMENT()
            // this.$store.commit('STORE_INCREMENT')
        },
        // addProduct(){
        //     const {name, price} = this
        //     const newProduct = {id: this.GET_PRODUCTS.length, name, price}
        //     this.ADD_PRODUCT(newProduct)
        // }
        addNewProduct(){
            const {name, price} = this
            const newProduct = {id: this.GET_PRODUCTS.length, name, price, quantity: 1}
            this.addProduct(newProduct)
        }
    },
    computed: {
        counter(){
            return this.$store.state.counter
        },
        ...mapGetters(['GET_PRODUCTS', 'totalQuantity', 'totalPrice'])
    }
};
</script>

<style lang="scss" scoped>

</style>
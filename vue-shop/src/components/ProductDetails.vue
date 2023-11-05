<template>
    <div>
        <p class="product__name">{{ this.product.name }}</p>
        <p class="product__price">{{ formattedPrice }}</p>
        <p class="product__available">{{ available }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    data() {
        return {
            product: {
                name:'Ремонт кухни',
                price: 200000,
                available: false,
            }
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    computed: {
        formattedPrice () {
            return '$ ' + this.product.price
        },
        available() {
            return this.product.available ? 'Услуга доступна' : 'На данный момент услуга не доступна'
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
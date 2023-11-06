<template>
    <div>
        <p class="product__name">{{ this.product.name }}</p>
        <p class="product__price">{{ formattedPrice }}</p>
        <p class="product__available">{{ available }}</p>
        <button >{{ date }}</button>
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
        },
        date(){
            const dateNow = new Date();

            
               const day = dateNow.getDate();
               const month = dateNow.getMonth() + 1;
               const year = dateNow.getFullYear();
            
            return (`${day}.${month}.${year}`);
        },
    }
};
</script>

<style lang="scss" scoped>

</style>
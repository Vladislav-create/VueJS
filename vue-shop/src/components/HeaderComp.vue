<template>
    <section class="header center">
            <section class="header__left">
                    <a href="index.html" class="header__left__logo"  rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
                            </svg>
                    </a>
                    <a href="index.html" class="header__left__text"  rel="noopener noreferrer">
                        Interno
                    </a>
            </section>
            <section class="header__right">
                <router-link to="/indexcomp" class="header__right__nav">Home</router-link>
                <router-link to="/ourproject" class="header__right__nav">Project</router-link>
                <router-link to="/blogcomp" class="header__right__nav">Blog</router-link>
            </section>
        </section>
</template>

<script>
export default {
    name: 'HeaderComp',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    * {
    margin: 0;
    padding: 0;
    font-family: 'DM Serif Display', serif;
    font-family: 'Jost', sans-serif;
    font-family: 'Lato', sans-serif;
    font-family: 'Open Sans', sans-serif;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
    .center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
    }
    .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 53px;
    margin-bottom: 57px;
    &__left {
        display: flex;
        align-items: center;
        gap: 10px;
        &__text {
            color: #292F36;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 125%;
        }
    }
    &__right {
        display: flex;
        gap: 50px;
        &__nav {
            color: #292F36;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            }
        }
    }
</style>
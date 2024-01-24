<template>
    <div>
        <HeaderComp />
        <section class="header-img">
            <img class="header-img__img" src="../assets/blogHeaderImg.png" alt="">
            <div class="header-nav-elem">
                <h3 class="header-nav-elem__title">Articles & News</h3>
                <div class="header-nav-elem__bread-crumbs">
                    <router-link to="/indexcomp"><a class="header-nav-elem__bread-crumbs__crumb" href="#">Home</a></router-link>
                    <span> / </span>
                    <router-link to="/blogcomp"><a class="header-nav-elem__bread-crumbs__crumb" href="#">Blog</a></router-link>
                </div>
            </div>
        </section>
        <section class="latest-post center">
            <h3 class="latest-post__header">Latest Post</h3>
            <div class="latest-post__content">
                <img :src="latestPost.postImg" alt="" class="latest-post__content__img">
                <div class="latest-post__content__text">
                    <h3 class="latest-post__content__text__title">{{ latestPost.postTitle }}</h3>
                    <p class="latest-post__content__text__discribe">{{ latestPost.postText }}</p>
                    <div class="latest-post__content__text__footer">
                        <p class="latest-post__content__text__footer__date">26 December,2022 </p>
                        <router-link to="/blogdetailscomp"><svg class="latest-post__content__text__footer__btn" width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.5" r="26" fill="#F4F0EC"/>
                            <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></router-link> 
                    </div>
                </div>
            </div>
        </section>
        <section class="articles-news center">
            <div class="articles-news__header">
                <h3 class="articles-news__header__title">
                    Articles & News
                </h3>
                <p class="articles-news__header__subtitle">
                    It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
                </p>
            </div>
            <div class="articles-news__carts">
                <div class="articles-news__carts__box" v-for="product in arrForPagination" :key="product.id">
                    <article class="articles-news__carts__cart">
                        <img class="articles-news__carts__cart__img" :src="product.imgSrc" alt="">
                        <div class="articles-news__carts__cart__info">
                            <h3 class="articles-news__carts__cart__title">{{ product.title }}</h3>
                            <div class="articles-news__carts__cart__info-box">
                                <p class="articles-news__carts__cart__date">26 December,2022</p>
                                <router-link to="/404">                                
                                    <svg class="articles-news__carts__cart__btn" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg></router-link>
                            </div>
                        </div>
                    </article>        
                </div>
            </div>
        </section>
        <section class="pagination">
                    <button @click='changePage(item)' class="pagination__btn" v-for="item in items" :key="item">{{ item }}</button>
                    <button @click="changePagesNumber" class="pagination__btn"><svg width="6" height="13" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        </section>
        <FooterComp />
    </div>
</template>

<script>
import FooterComp from './FooterComp.vue';
import HeaderComp from './HeaderComp.vue';

export default {
    name: 'BlogComp',
    data() {
        
        return {
            currentPage: 0,
            step: 6,
            products: [
                {
                    id: 0,
                    imgSrc: require('../assets/Photo.png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 1,
                    imgSrc: require('../assets/Photo(1).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 2,
                    imgSrc: require('../assets/Photo(2).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 3,
                    imgSrc: require('../assets/Photo(2).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 4,
                    imgSrc: require('../assets/Photo(1).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 5,
                    imgSrc: require('../assets/Photo.png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 6,
                    imgSrc: require('../assets/Photo(2).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 7,
                    imgSrc: require('../assets/Photo(2).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 8,
                    imgSrc: require('../assets/Photo(1).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 9,
                    imgSrc: require('../assets/Photo(2).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 10,
                    imgSrc: require('../assets/Photo(2).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 11,
                    imgSrc: require('../assets/Photo(1).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 12,
                    imgSrc: require('../assets/Photo(2).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 13,
                    imgSrc: require('../assets/Photo(2).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
                {
                    id: 14,
                    imgSrc: require('../assets/Photo(1).png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: Date.now()
                },
            ],
            posts: [
                {
                    id: 0,
                    postImg: require('../assets/latestPost.png'),
                    postTitle: 'Test 1',
                    postText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to      popular  belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
                },
                {
                    id: 1,
                    postImg: require('../assets/latestPost.png'),
                    postTitle: 'Test 2',
                    postText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to      popular  belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
                },
                {
                    id: 2,
                    postImg: require('../assets/latestPost.png'),
                    postTitle: 'Low Cost Latest Invented Interior Designing Ideas',
                    postText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to      popular  belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
                },
            ],
            items: ['01', '02', '03'],
            
        };
    },
    mounted() {
    },
    computed: {
        latestPost() {
            return this.posts[this.posts.length - 1]
        },
        arrForPagination() {
            const start = this.currentPage * this.step
            const end = start + this.step
            return this.products.slice(start, end)
        }
    },
    methods: {
        changePage(pageNumber){
            if (pageNumber == 1) {
                this.currentPage = 0
            } else {
                this.currentPage = +pageNumber - 1
            }
            
        },
        changePagesNumber(){
            let start = +this.items[this.items.length-1]
            let newEl = start
            let newArr = []
            let check = +this.items[this.items.length-1]
            for (let i = 0; i < this.items.length; i++) {
                check = +this.items[this.items.length-1]
                if (check < 9) {
                    newEl += 1
                    newArr.push(`0${newEl}`)
                } else {
                    newEl += 1
                    newArr.push(newEl)
                }
                
            }
            this.items = newArr
        }
    },
    components: { HeaderComp, FooterComp }
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
    .header-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__img {
        width: 100%;
    }
    }

    .header-nav-elem {
        border-radius: 37px 37px 0px 0px;
        background: #FFF;
        margin-top: -177px;
        padding: 41px 78px;
        max-width: 503px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__title {
            color: #292F36;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
        }
        &__bread-crumbs {
            &__crumb {
                color: #4D5053;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.22px;
            }
        }
    }

    .latest-post {
        max-width: 1201px;
        margin-top: 200px;
        &__header {
            color: #292F36;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 1px;
            margin-bottom: 27px;
        }
        &__content {
            display: flex;
            padding: 21px;
            gap: 65px;
            border-radius: 62px;
            border: 1px solid #E7E7E7;
            box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
            &__text {
                padding-top: 51px;
                max-width: 489px;
                &__title {
                    color: #292F36;
                    font-size: 25px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 125%;
                    letter-spacing: 0.5px;
                    margin-bottom: 22px;
                }
                &__discribe {
                    color: #4D5053;
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                    letter-spacing: 0.22px;
                }
                &__footer {
                    margin-top: 50px;
                    display: flex;
                    justify-content: space-between;
                }
            }    
        }
    }

    .articles-news {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 811px;
            margin-bottom: 53px;
            &__title {
                color: #292F36;
                text-align: center;
                font-size: 50px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 1px;
                padding-top: 96px;
                padding-bottom: 12px;
            }
            &__subtitle {
                color: #4D5053;
                text-align: center;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.22px;
            }
        }
        &__carts {
            display: flex;
            flex-wrap: wrap;
            gap: 23px; 
            &__box {
                padding: 21px;
                border-radius: 62px;
                border: 1px solid #E7E7E7;
                box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
            }
            &__box:hover {
                background-color: #E7E7E7;
            }
            &__cart {
                max-width: 340px;
                &__info-box {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }
    }
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 51px;
        margin-bottom: 200px;
        &__btn {
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            padding: 14px 17px;
            border-radius: 50%;
            background-color: #FFFFFF;
        }
        &__btn:last-child {
            border-radius: 50%;
            padding: 18px 23px 20px 23px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__btn:hover {
            background-color: #E7E7E7;
        }
    }

</style>
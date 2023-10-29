<template>
    <div>
        <!-- <section class="header center">
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
                <a href="index.html" class="header__right__nav">Home</a>
                <a href="" class="header__right__nav">Project</a>
                <a href="./blog.html" class="header__right__nav">Blog</a>
            </section>
        </section> -->
        <section class="blogDetails-header">
            <img class="blogDetails-header__img" src="../assets/blog-details.png" alt="">
        </section>
        <section class="blogDetails-content center">
            <div class="blogDetails-content__box">
                <section class="blogDetails-content__info" v-for="project in sortProject" :key="project.id">
                    <h3 class="blogDetails-content__info__title">{{ project.title }}</h3>
                    <img class="blogDetails-content__info__img" :src=project.img alt="">
                    <p class="blogDetails-content__info__description">{{ project.description }}</p>
                    <h3 class="blogDetails-content__info__subTitle">{{ project.subTitle }}</h3>
                    <p class="blogDetails-content__info__descriptionMore">{{ project.descriptionMore }}</p>
                    <img class="blogDetails-content__info__secondImg" :src=project.secondImg alt="">
                </section>
            </div>
            <section class="blogDetails-content__tags">
                <button class="blogDetails-content__tags__btn" v-for="tag in tags" :key="tag.indexOf" @click="sortProjects(tag)">{{ tag }}</button>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    name: 'BlogDetailsComp',

    data() {
        return {
            count: 0,
            resultArr: [],
            projects: [
                {
                    id: 0,
                    title: 'Kitchen',
                    img: require('../assets/Kitchen.png'),
                    description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of     htly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
                    subTitle: 'Design sprints are great',
                    descriptionMore: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondImg: require('../assets/Kitchen1.png')
                },
                {   
                    id: 1,
                    title: 'Bedroom',
                    img: require('../assets/Kitchen.png'),
                    description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of     htly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
                    subTitle: 'Design sprints are great',
                    descriptionMore: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondImg: require('../assets/Kitchen1.png')
                },
                {   
                    id: 2,
                    title: 'Building',
                    img: require('../assets/Kitchen.png'),
                    description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of     htly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
                    subTitle: 'Design sprints are great',
                    descriptionMore: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondImg: require('../assets/Kitchen1.png')
                },
                {   
                    id: 3,
                    title: 'Architecture',
                    img: require('../assets/Kitchen.png'),
                    description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of     htly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
                    subTitle: 'Design sprints are great',
                    descriptionMore: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondImg: require('../assets/Kitchen1.png')
                },
                {   
                    id: 4,
                    title: 'Kitchen Planning',
                    img: require('../assets/Kitchen.png'),
                    description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of     htly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
                    subTitle: 'Design sprints are great',
                    descriptionMore: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondImg: require('../assets/Kitchen1.png')
                },
            ],
            tags: [
                'Kitchen',
                'Bedroom',
                'Building',
                'Architecture',
                'Kitchen Planning',
                'All'
            ]
        };
    },

    computed:{
        sortProject(){
           return this.count == 0 ? this.projects : this.resultArr
        }
    },

    methods: {
        sortProjects(tag){
            this.count = 1
            this.resultArr = []
            let arr = this.projects.filter((project)=>project.title == tag)
            this.resultArr.push(arr[0])
            if (tag == 'All') {
                this.count = 0
            }
        }
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
    .blogDetails-header {
    &__img {
        width: 100%;
    }
    }
    .blogDetails-content {
        display: flex;
        margin-top: 200px;
        gap: 52px;
        &__info {
            max-width: 800px;
        }
        &__box {
            display: flex;
            flex-direction: column;
            gap: 60px;
        }
    }
</style>
<template>
  <div>
    <HeaderComp />
    <section class="blogDetails-header">
      <img
        class="blogDetails-header__img"
        src="../assets/blog-details.png"
        alt=""
      />
    </section>
    <section class="blogDetails-content center">
      <div class="blogDetails-content__box">
        <section
          class="blogDetails-content__info"
          v-for="project in sortProject"
          :key="project.id"
        >
          <h3 class="blogDetails-content__info__title">{{ project.title }}</h3>
          <img
            class="blogDetails-content__info__img"
            :src="project.img"
            alt=""
          />
          <div class="blogDetails-content__info__nav">
              <p class="blogDetails-content__info__nav__date">26 December,2022 </p>
              <div class="blogDetails-content__info__nav__crumbs">
                <a class="blogDetails-content__info__nav__crumb" href="#">Interior /</a>
                <a class="blogDetails-content__info__nav__crumb" href="#"> Home /</a>
                <a class="blogDetails-content__info__nav__crumb" href="#"> Decore</a>
              </div>
          </div>
          <p class="blogDetails-content__info__description">
            {{ project.description }}
          </p>
          <img src="../assets/Quotes.png" alt="">
          <h3 class="blogDetails-content__info__subTitle">
            {{ project.subTitle }}
          </h3>
          <p class="blogDetails-content__info__descriptionMore">
            {{ project.descriptionMore }}
          </p>
          <div class="blogDetails-content__info__descriptionMore-points">
            <ol class="blogDetails-content__info__descriptionMore-points-decor">
              <li class="blogDetails-content__info__descriptionMore-point">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
              <li class="blogDetails-content__info__descriptionMore-point">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
              <li class="blogDetails-content__info__descriptionMore-point">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            </ol>
          </div>
          <img
            class="blogDetails-content__info__secondImg"
            :src="project.secondImg"
            alt=""
          />
          <p class="blogDetails-content__info__lastDescription">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </section>
      </div>
      <section class="blogDetails-content__tags">
        <h3 class="blogDetails-content__tags__title">
          Tags
        </h3>
        <div class="blogDetails-content__tags__btns">
          <button
          class="blogDetails-content__tags__btn"
          v-for="tag in tags"
          :key="tag"
          @click="sortProjects(tag)"
        >
          {{ tag }}
        </button>
        </div>
      </section>
    </section>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './FooterComp.vue';
import HeaderComp from './HeaderComp.vue';

export default {
    name: "BlogDetailsComp",
    data() {
        return {
            count: 0,
            resultArr: [],
            projects: [
                {
                    id: 0,
                    title: "Kitchen",
                    img: require("../assets/Kitchen.png"),
                    description: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of     htly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
                    subTitle: "Design sprints are great",
                    descriptionMore: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondImg: require("../assets/Kitchen1.png"),
                },
                {
                    id: 1,
                    title: "Bedroom",
                    img: require("../assets/Kitchen.png"),
                    description: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of     htly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
                    subTitle: "Design sprints are great",
                    descriptionMore: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondImg: require("../assets/Kitchen1.png"),
                },
                {
                    id: 2,
                    title: "Building",
                    img: require("../assets/Kitchen.png"),
                    description: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of     htly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
                    subTitle: "Design sprints are great",
                    descriptionMore: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondImg: require("../assets/Kitchen1.png"),
                },
                {
                    id: 3,
                    title: "Architecture",
                    img: require("../assets/Kitchen.png"),
                    description: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of     htly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
                    subTitle: "Design sprints are great",
                    descriptionMore: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondImg: require("../assets/Kitchen1.png"),
                },
                {
                    id: 4,
                    title: "Kitchen Planning",
                    img: require("../assets/Kitchen.png"),
                    description: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of     htly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
                    subTitle: "Design sprints are great",
                    descriptionMore: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondImg: require("../assets/Kitchen1.png"),
                },
            ],
            tags: [
                "Kitchen",
                "Bedroom",
                "Building",
                "Architecture",
                "Kitchen Planning",
                "All",
            ],
        };
    },
    computed: {
        sortProject() {
            return this.count == 0 ? this.projects : this.resultArr;
        },
    },
    methods: {
        sortProjects(tag) {
            this.count = 1;
            this.resultArr = [];
            let arr = this.projects.filter((project) => project.title == tag);
            this.resultArr.push(arr[0]);
            if (tag == "All") {
                this.count = 0;
            }
        },
    },
    components: { HeaderComp, FooterComp }
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
      color: #292f36;
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
      color: #292f36;
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
    &__title {
      font-size: 50px;
      font-weight: 400;
      line-height: 63px;
      letter-spacing: 0.02em;
      text-align: left;
      margin-bottom: 21px;
    }
    &__nav {
      display: flex;
      justify-content: space-between;
      margin-top: 46px;
      margin-bottom: 48px;
      &__date {
        color: #4D5053;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.16px;
        text-transform: capitalize;
      }
      &__crumbs {
        padding-right: 60px;
      }
      &__crumb {
        color: #4D5053;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.16px;
        text-transform: capitalize;
      }
    }
    &__description {
      color: #4D5053;
      font-size: 22px;
      font-weight: 400;
      letter-spacing: 0.22px;
      margin-bottom: 35px;
      text-align: left;
    }
    &__subTitle {
      color: #292F36;
      font-size: 50px;
      font-weight: 400;
      letter-spacing: 1px;
      margin-top: 27px;
      margin-bottom: 20px;
      text-align: left;
    }
    &__descriptionMore {
      color: #4D5053;
      font-size: 22px;
      font-weight: 400;
      letter-spacing: 0.22px;
      margin-bottom: 24px;
      text-align: left;
    }
    &__descriptionMore-points-decor {
      padding-left: 20px;
      color: #CDA274;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 0.4px;
      margin-bottom: 20px;
    }
    &__descriptionMore-point {
      color: #4D5053;
      font-size: 22px;
      font-weight: 400;
      letter-spacing: 0.22px;
      margin-bottom: 32px;
      text-align: left;
    }
    &__descriptionMore-point::marker{
      color: #CDA274;
    }
    &__lastDescription {
      color: #4D5053;
      font-size: 22px;
      font-weight: 400;
      letter-spacing: 0.22px;
      text-align: left;
      margin-top: 35px;
      margin-bottom: 96px;
    }
  }
  &__box {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  &__tags {
    &__title {
      color: #292F36;
      font-size: 25px;
      font-weight: 400;
      letter-spacing: 0.5px;
      text-align: left;
      margin-bottom: 24px;
    }
    &__btns {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    &__btn {
      color: #000;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.36px;
      padding: 9px 30px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
    }
    &__btn:hover {
      color: #FFF;
      background-color: #292F36;
    }
  }
}
</style>

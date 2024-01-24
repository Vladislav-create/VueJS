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
        <section class="blogDetails-content__tags">
        <button
          class="blogDetails-content__tags__btn"
          v-for="tag in tags"
          :key="tag"
          @click="sortProjects(tag)"
        >
          {{ tag }}
        </button>
        </section>
        <section
          class="blogDetails-content__info"
          v-for="project in sortProject[0].ourProjects"
          :key="project.id"
        >
          <img
            class="blogDetails-content__info__img"
            :src="project.img"
            alt=""
          />
          <div class="blogDetails-content__info__nav">
            <h3 class="blogDetails-content__info__title">
              {{ project.title }}
            </h3>
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32 44L40 35L32 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </section>
      </div>
    </section>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './FooterComp.vue';
import HeaderComp from './HeaderComp.vue';

export default {
    name: "OurProject",
    data() {
        return {
            count: 0,
            resultArr: [],
            projects: [
                {
                    id: 0,
                    projectsName: "Kitchen",
                    ourProjects: [
                        {
                            id: 0,
                            img: require("../assets/Project.png"),
                            title: "Kitchen",
                        },
                        {
                            id: 1,
                            img: require("../assets/Project1.png"),
                            title: "Kitchen",
                        },
                        {
                            id: 2,
                            img: require("../assets/Project2.png"),
                            title: "Kitchen",
                        },
                        {
                            id: 3,
                            img: require("../assets/Project3.png"),
                            title: "Kitchen",
                        },
                        {
                            id: 4,
                            img: require("../assets/Project4.png"),
                            title: "Kitchen",
                        },
                        {
                            id: 5,
                            img: require("../assets/Project5.png"),
                            title: "Kitchen",
                        },
                        {
                            id: 6,
                            img: require("../assets/Project6.png"),
                            title: "Kitchen",
                        },
                        {
                            id: 7,
                            img: require("../assets/Project7.png"),
                            title: "Kitchen",
                        },
                    ],
                },
                {
                    id: 1,
                    projectsName: "Bathroom",
                    ourProjects: [
                        {
                            id: 8,
                            img: require("../assets/Project.png"),
                            title: "Bathroom",
                        },
                        {
                            id: 9,
                            img: require("../assets/Project1.png"),
                            title: "Bathroom",
                        },
                        {
                            id: 10,
                            img: require("../assets/Project2.png"),
                            title: "Bathroom",
                        },
                        {
                            id: 11,
                            img: require("../assets/Project3.png"),
                            title: "Bathroom",
                        },
                        {
                            id: 12,
                            img: require("../assets/Project4.png"),
                            title: "Bathroom",
                        },
                        {
                            id: 13,
                            img: require("../assets/Project5.png"),
                            title: "Bathroom",
                        },
                        {
                            id: 14,
                            img: require("../assets/Project6.png"),
                            title: "Bathroom",
                        },
                        {
                            id: 15,
                            img: require("../assets/Project7.png"),
                            title: "Bathroom",
                        },
                    ],
                },
                {
                    id: 2,
                    projectsName: "Bedroom",
                    ourProjects: [
                        {
                            id: 0,
                            img: require("../assets/Project.png"),
                            title: "Bedroom",
                        },
                        {
                            id: 1,
                            img: require("../assets/Project1.png"),
                            title: "Bedroom",
                        },
                        {
                            id: 2,
                            img: require("../assets/Project2.png"),
                            title: "Bedroom",
                        },
                        {
                            id: 3,
                            img: require("../assets/Project3.png"),
                            title: "Bedroom",
                        },
                        {
                            id: 4,
                            img: require("../assets/Project4.png"),
                            title: "Bedroom",
                        },
                        {
                            id: 5,
                            img: require("../assets/Project5.png"),
                            title: "Bedroom",
                        },
                        {
                            id: 6,
                            img: require("../assets/Project6.png"),
                            title: "Bedroom",
                        },
                        {
                            id: 7,
                            img: require("../assets/Project7.png"),
                            title: "Bedroom",
                        },
                    ],
                },
                {
                    id: 3,
                    projectsName: "Living Area",
                    ourProjects: [
                        {
                            id: 0,
                            img: require("../assets/Project.png"),
                            title: "Living Area",
                        },
                        {
                            id: 1,
                            img: require("../assets/Project1.png"),
                            title: "Living Area",
                        },
                        {
                            id: 2,
                            img: require("../assets/Project2.png"),
                            title: "Living Area",
                        },
                        {
                            id: 3,
                            img: require("../assets/Project3.png"),
                            title: "Living Area",
                        },
                        {
                            id: 4,
                            img: require("../assets/Project4.png"),
                            title: "Living Area",
                        },
                        {
                            id: 5,
                            img: require("../assets/Project5.png"),
                            title: "Living Area",
                        },
                        {
                            id: 6,
                            img: require("../assets/Project6.png"),
                            title: "Living Area",
                        },
                        {
                            id: 7,
                            img: require("../assets/Project7.png"),
                            title: "Living Area",
                        },
                    ],
                },
            ],
            tags: ["Bathroom", "Bedroom", "Kitchen", "Living Area", "All"],
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
            let arr = this.projects.filter((project) => project.projectsName == tag);
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
  }
  &__box {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
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

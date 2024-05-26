<script setup>
import IconBoxVue from '@/components/IconBox.vue';
import { RouterLink } from 'vue-router';
</script>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
};
</script>

<template>

  <!-- Hero Start -->
  <section class="hero" style="background-image: url(/tashkent-city.jpeg);">
    <div class="container">
      <div class="hero__box">
        <div class="hero__title">
          <h3>{{ $t('hero.title') }}</h3>
        </div>
        <div class="hero__desc">
          <p>{{ $t('hero.text') }}</p>
        </div>
        <div class="hero__buttons">
          <button class="button button-bg">{{ $t('hero.projects') }}</button>
          <button class="button">{{ $t('hero.contact') }}</button>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero End -->

  <!-- About Start -->
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="about__title" data-aos="fade-right">
            <h3>{{ $t('about.about') }}</h3>
            <h2>{{ $t('hero.title') }}</h2>
          </div>
          <div class="about__desc" data-aos="fade-up">
            <p>{{ $t('about.desc') }}</p>
          </div>
        </div>
      </div>
      <div class="row about__row">
        <div class="col-lg-8 offset-lg-4">
          <div class="row" data-aos="fade-down-left">
            <div class="col-6 col-md-4 offset-6 offset-md-4 about__col">
              <img src="/about.jpg" alt="about">
              <h2>4000+</h2>
              <p>{{ $t('about.employee') }}</p>
            </div>
            <div class="col-6 col-md-4 about__col">
              <img src="/about.jpg" alt="about">
              <h2>150+</h2>
              <p>{{ $t('about.projects') }}</p>
            </div>
            <div class="col-6 col-md-4 about__col">
              <img src="/about.jpg" alt="about">
              <h2>16</h2>
              <p>{{ $t('about.complex') }}</p>
            </div>
            <div class="col-6 col-md-4 about__col">
              <img src="/about.jpg" alt="about">
              <h2>14</h2>
              <p>{{ $t('about.market') }}</p>
            </div>
            <div class="col-6 col-md-4 about__col">
              <img src="/about.jpg" alt="about">
              <h2>250+</h2>
              <p>{{ $t('about.special') }}</p>
            </div>
            <div class="col-6 col-md-4 about__yellow">
              <h2>{{ $t('about.about') }}</h2>
            </div>
            <div class="col-6 col-md-4 about__col">
              <img src="/about.jpg" alt="about">
              <h2>9+</h2>
              <p>{{ $t('about.hospital') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About End -->

  <!-- Advantages Start -->
  <section class="advantages">
    <div class="container">
      <div class="advantages__title">
        <div class="title" data-aos="fade-right">
          <h3 class="title__first">{{ $t('advantages.text1') }}</h3>
          <h3 class="title__second">{{ $t('advantages.text2') }}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4 mb-md-0" data-aos="fade-up" v-for="advantage in 3" :key="advantage">
          <IconBoxVue :img="$t(`/icon${advantage}.svg`)" :title="$t(`advantages.icon${advantage}.text`)"
            :desc="$t(`advantages.icon${advantage}.desc`)" />
        </div>
      </div>
    </div>
  </section>
  <!-- Advantages End -->

  <!-- Team Start -->
  <section class="team">
    <div class="container">
      <div class="team__title">
        <div class="title" data-aos="fade-right">
          <h3 class="title__first">{{ $t('team.text1') }}</h3>
          <h3 class="title__second">{{ $t('team.text2') }}</h3>
        </div>
      </div>
      <swiper data-aos="fade-up" :navigation="true" :breakpoints="{
            '640': {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '992' : {
              slidesPerView: 4,
              spaceBetween: 30,
            }
          }" :spaceBetween="30" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false, }" :modules="modules"
        class="mySwiper">
        <swiper-slide>
          <img src="/team1.webp" alt="team1">
          <h4>{{ $t('team.person1.name') }}</h4>
          <p>{{ $t('team.person1.job') }}</p>
        </swiper-slide>
        <swiper-slide>
          <img src="/team2.webp" alt="team2">
          <h4>{{ $t('team.person2.name') }}</h4>
          <p>{{ $t('team.person2.job') }}</p>
        </swiper-slide>
        <swiper-slide>
          <img src="/team3.webp" alt="team3">
          <h4>{{ $t('team.person3.name') }}</h4>
          <p>{{ $t('team.person3.job') }}</p>
        </swiper-slide>
        <swiper-slide>
          <img src="/team4.webp" alt="team4">
          <h4>{{ $t('team.person4.name') }}</h4>
          <p>{{ $t('team.person4.job') }}</p>
        </swiper-slide>
        <swiper-slide>
          <img src="/team5.webp" alt="team5">
          <h4>{{ $t('team.person5.name') }}</h4>
          <p>{{ $t('team.person5.job') }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <!-- Team End -->

    <!-- Projects Start -->
    <section class="project" id="projects">
    <div class="container">
      <div class="project__title">
        <div class="title" data-aos="fade-right">
          <h3 class="title__first">{{ $t('project.text1') }}</h3>
          <h3 class="title__second">{{ $t('project.text2') }}</h3>
        </div>
      </div>
      <div class="row">
        <div data-aos="fade-right" class="col-md-6 mb-4">
          <div
            class="project__card"
            style="
              background-image: linear-gradient(
                  rgba(0, 0, 0, 0.3) 60%,
                  rgb(0, 0, 0)
                ),
                url(/p1.webp);
            "
          >
            <div class="project__box">
              <h3>{{ $t("project.card1.text") }}</h3>
              <p>{{ $t("project.card1.desc") }}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" class="col-md-6 mb-4">
          <div
            class="project__card"
            style="
              background-image: linear-gradient(
                  rgba(0, 0, 0, 0.3) 60%,
                  rgb(0, 0, 0)
                ),
                url(/p2.webp);
            "
          >
            <div class="project__box">
              <h3>{{ $t("project.card2.text") }}</h3>
              <p>{{ $t("project.card2.desc") }}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" class="col-md-6 mb-4">
          <div
            class="project__card"
            style="
              background-image: linear-gradient(
                  rgba(0, 0, 0, 0.3) 60%,
                  rgb(0, 0, 0)
                ),
                url(/p3.webp);
            "
          >
            <div class="project__box">
              <h3>{{ $t("project.card3.text") }}</h3>
              <p>{{ $t("project.card3.desc") }}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" class="col-md-6 mb-4">
          <div
            class="project__card"
            style="
              background-image: linear-gradient(
                  rgba(0, 0, 0, 0.3) 60%,
                  rgb(0, 0, 0)
                ),
                url(/p4.webp);
            "
          >
            <div class="project__box">
              <h3>{{ $t("project.card4.text") }}</h3>
              <p>{{ $t("project.card4.desc") }}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" class="col-md-6 mb-4 mb-md-0">
          <div
            class="project__card"
            style="
              background-image: linear-gradient(
                  rgba(0, 0, 0, 0.3) 60%,
                  rgb(0, 0, 0)
                ),
                url(/p5.webp);
            "
          >
            <div class="project__box">
              <h3>{{ $t("project.card5.text") }}</h3>
              <p>{{ $t("project.card5.desc") }}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" class="col-md-6 mb-4 mb-md-0">
          <div
            class="project__card"
            style="
              background-image: linear-gradient(
                  rgba(0, 0, 0, 0.3) 60%,
                  rgb(0, 0, 0)
                ),
                url(/p6.webp);
            "
          >
            <div class="project__box">
              <h3>{{ $t("project.card6.text") }}</h3>
              <p>{{ $t("project.card6.desc") }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="project__btn text-center">
        <RouterLink>
          <button class="button button-black">{{ $t('project.btn') }}</button>
        </RouterLink>
      </div>
    </div>
  </section>
  <!-- Projects End -->

    <!-- Team Start -->
    <section class="company">
    <div class="container">
      <div class="company__title">
        <div class="title" data-aos="fade-right">
          <h3 class="title__first">{{ $t('company.text1') }}</h3>
          <h3 class="title__second">{{ $t('company.text2') }}</h3>
        </div>
      </div>
      <swiper data-aos="fade-up" :navigation="true" :breakpoints="{
            '640': {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '992' : {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }" :spaceBetween="30" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false, }" :modules="modules"
        class="mySwiper">
        <swiper-slide>
            <div class="company__box" style="background-image: url(/n1.webp);">
              <p class="company__date">2023-01-27</p>
              <div class="company__bottom">
                <h5>{{ $t('company.news1.title') }}</h5>
                <RouterLink to="/">
                  {{ $t('company.newsBtn') }}
                </RouterLink>
              </div>
            </div>
        </swiper-slide>
        <swiper-slide>
          <div class="company__box" style="background-image: url(/n2.webp);">
            <p class="company__date">2023-01-27</p>
            <div class="company__bottom">
              <h5>{{ $t('company.news2.title') }}</h5>
              <RouterLink to="/">
                {{ $t('company.newsBtn') }}
              </RouterLink>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="company__box" style="background-image: url(/n3.webp);">
            <p class="company__date">2023-01-27</p>
            <div class="company__bottom">
              <h5>{{ $t('company.news3.title') }}</h5>
              <RouterLink to="/">
                {{ $t('company.newsBtn') }}
              </RouterLink>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="company__box" style="background-image: url(/n4.webp);">
            <p class="company__date">2023-01-27</p>
            <div class="company__bottom">
              <h5>{{ $t('company.news4.title') }}</h5>
              <RouterLink to="/">
                {{ $t('company.newsBtn') }}
              </RouterLink>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <!-- Team End -->

</template>

<style lang="scss">
$yellow: #fab448;


// Hero Styles

.hero {
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 230px;
  padding-bottom: 150px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.55);
  }

  &__box {
    z-index: 11;
    position: relative;
  }

  &__title {
    max-width: 400px;
    margin-bottom: 25px;

    h3 {
      color: #fff;
      text-transform: uppercase;
      font-size: 80px;
      letter-spacing: 0.045em;
    }
  }

  &__desc {
    margin-bottom: 60px;

    p {
      color: #fff;
      font-size: 20px;
    }
  }

  &__buttons {
    display: flex;
    gap: 35px;

    a {
      z-index: 3333;
    }
  }
}

// Title Styles

.title {
  h3 {
    font-size: 50px;
  }

  &__first {
    padding-left: 55px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0px;
      height: 3px;
      width: 40px;
      background-color: $yellow;
    }
  }

  &__second {
    padding-left: 100px;
  }
}

// About Styles
.about {
  padding-top: 120px;
  overflow: hidden;
  background-position: bottom left;
  background-image: url(/BrandLogo.svg);
  background-size: 46%;
  background-repeat: no-repeat;

  &__title {
    padding-left: 55px;
    margin-bottom: 30px;

    h3 {
      font-size: 50px;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        top: 45%;
        left: -55px;
        width: 35px;
        height: 4px;
        background-color: $yellow;
      }
    }

    h2 {
      text-transform: uppercase;
      text-align: right;
      font-size: 47px;
    }
  }

  &__row {
    transform: translateY(-150px);
  }

  &__yellow {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    background-color: $yellow;

    h2 {
      color: #fff;
      font-size: 25px;
    }
  }

  &__desc {
    p {
      color: #2f2f2f;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: 300;
      line-height: 1.7;
    }
  }

  &__col {
    border: 1px solid #000;
    padding: 25px;
    min-height: 190px;
    transition: all 1s ease;
    cursor: pointer;
    background-size: cover;
    background-position: center center;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      transition: all .3s ease;
      opacity: 0;
    }

    h2,
    p {
      position: relative;
      transition: all .3s ease;
    }

    &:hover {
      img {
        opacity: 1;
      }

      h2 {
        color: $yellow;
      }

      p {
        color: #fff;
      }
    }

    h2 {
      font-weight: 600;
      font-size: 53px;
      margin-bottom: 15px;
    }

    p {
      font-size: 17px;
      transition: all .3s ease;
    }
  }
}

.button {
  padding: 15px 45px;
  background: none;
  border: none;
  position: relative;
  font-weight: 400;
  letter-spacing: 3px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  border: 2px solid $yellow;
  transition: all .3s ease;

  &-bg {
    background-color: $yellow;
  }
  &-black {
    color: #000;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: transparent;
    right: 0;
    border: 2px solid $yellow;
    transition: all .3s ease;
    z-index: -1;
    transform: translate(10px, -10px);
  }

  &:hover {
    transform: translate(10px, -10px);

    &::after {
      transform: translate(0px);
      opacity: 0;
    }
  }
}

// Advantages Styles
.advantages {
  padding-top: 100px;
  padding-bottom: 120px;
  background-image: url(/advantages.png);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  &__title {
    margin-bottom: 80px;
  }
}

// Team Styles
.team {
  background-color: #FAFAFA;
  padding-top: 60px;
  overflow: hidden;
  padding-bottom: 100px;
  &__title {
    margin-bottom: -80px;
  }

  .swiper {
    width: 100%;

    &-slide {
      height: 550px;
      cursor: pointer;
      &:hover {
        h4 {
          color: $yellow;
        }
      }
      img {
        height: 420px;
        object-fit: cover;
        width: 100%;
        margin-bottom: 25px;
      }

      h4 {
        transition: all .3s ease;
        font-weight: 500;
        font-size: 22px;
        margin-bottom: 16px;
      }
    }
    &-wrapper {
      margin-top: 150px;
    }
    &-button-prev,&-button-next {
      bottom: 0px;
      padding: 10px;
      padding-left: 20px;
      padding-right: 20px;
      border: 1px solid $yellow;
      transition: all .3s ease;
      &:hover {
        background-color: $yellow;
        &:after {
          color: #fff;
        }
      }

      &:after {
        color: $yellow;
        font-size: 18px;
      }
    }
  }
}

// Project Styles

.project {
  overflow: hidden;
  padding-top: 70px;
  padding-bottom: 70px;

  &__title {
    margin-bottom: 70px;
  }

  &__card {
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    overflow: hidden;
    cursor: pointer;

    h3,
    p {
      color: #fff;
    }

    h3 {
      margin-bottom: 15px;
    }

    &:hover {
      .project__box {
        transform: translateY(0%);
      }
    }
  }

  &__box {
    transform: translateY(90%);
    transition: all 0.4s ease;
    min-height: 100%;
  }
  &__btn {
    margin-top: 90px;
  }
}

// Company Styles
.company {
  overflow: hidden;
  background-image: url(/bg-news.svg);
  padding-top: 40px;
  padding-bottom: 90px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  &__date {
    padding-left: 18px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 38%;
      left: 0;
      width: 8px;
      height: 8px;
      background-color: $yellow;
      border-radius: 50%;
    }
  }
  &__bottom {
    z-index: 9999;
    transition: all .3s ease;
  }

  &__box {
    padding: 25px;
    position: relative;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    min-height: 350px;
    transition: all .6s ease;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0, 0.5);
    }
    &:hover {
      background-size: 115%;
      .company__bottom {
        z-index: 20;
        transform: translateY(-30px);
      }
    }
  }

    a {
      text-decoration: underline;
    }

    h5, a,p {
    z-index: 4;
    position: relative;
    color: #fff;
  }
  h5 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  &__title {
    margin-bottom: 80px;
  }

  .swiper {
    width: 100%;

    &-slide {
      height: 400px;
      cursor: pointer;
      &:hover {
        h4 {
          color: $yellow;
        }
      }
      img {
        height: 420px;
        object-fit: cover;
        width: 100%;
        margin-bottom: 25px;
      }

      h4 {
        transition: all .3s ease;
        font-weight: 500;
        font-size: 22px;
        margin-bottom: 16px;
      }
    }
    &-button-prev,&-button-next {
      bottom: 0px;
      padding: 10px;
      padding-left: 20px;
      padding-right: 20px;
      border: 1px solid $yellow;
      transition: all .3s ease;
      &:hover {
        background-color: $yellow;
        &:after {
          color: #fff;
        }
      }

      &:after {
        color: $yellow;
        font-size: 18px;
      }
    }
  }

}

// Media Styles

@media (max-width: 992px) {
  .about {
    padding-bottom: 100px;
    background-size: 90%;

    &__row {
      margin-top: 50px;
      transform: translateY(0px);
    }

    &__title {
      padding-left: 0;

      h2 {
        text-align: left;
      }

      h3 {
        margin-bottom: 15px;
      }
    }
  }
  .team {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 50px;
    &__container {
      margin: 0 auto;
    }
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 140px;
    padding-bottom: 100px;

    &__buttons {
      flex-wrap: wrap;
      gap: 30px;
    }

    &__title {
      h3 {
        font-size: 35px;
      }
    }

    &__desc {
      p {
        font-size: 16px;
      }
    }
  }

  .button {
    font-size: 14px;
    padding: 12px 20px;
  }

  .about {
    padding-top: 50px;
    background-size: 100%;

    &__title {
      h2 {
        font-size: 25px;
      }

      h3 {
        font-size: 35px;
      }
    }

    &__desc {
      p {
        font-size: 14px;
        margin-bottom: 0;
      }
    }

    &__row {
      margin-top: 40px;
    }

    &__col {
      height: 140px;
      min-height: auto;
      padding: 15px;

      h2 {
        font-size: 32px;
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  .title {
    h3 {
      font-size: 30px;
    }

    &__first {
      padding-left: 30px;

      &::before {
        width: 20px;
      }
    }

    &__second {
      padding-left: 60px;
    }
  }

  .advantages {
    padding-top: 60px;
    padding-bottom: 50px;

    &__title {
      margin-bottom: 40px;
    }
  }
  .team {
    padding-bottom: 80px;
    .swiper {
      &-slide {
        height: 400px;
        img {
          height: 280px;
        }
      }
    }
  }
  .company {
    &__bottom {
      padding-bottom: 20px;
      h5 {
        margin-bottom: 15px;
      }
    }
    &__box {
      background-size: cover;
      &:hover {
        background-size: cover;
      }
    }
    .swiper {
      &-slide {
        height: 330px;
      }
    }
  }
}

@media (max-width: 576px) {
  .company {
    padding-top: 20px;
    padding-bottom: 50px;
    &__title {
      margin-bottom: 50px;
    }
    &__bottom{
      h5 {
        font-size: 16px;
      }
    }
  }
  .project {
    &__card {
      height: 300px;
    }
  }
}

@media (min-width: 1400px) {
  .team {
    &__container {
      max-width: 1420px;
    }
  }
}
</style>
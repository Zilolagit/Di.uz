<template>
    <section class="hero" style="background-image: url(/all.jpg);">
    <div class="container">
        <h3>{{ $t(`company.news${$route.params.id}.title`) }}</h3>
    </div>
    </section>
    <section class="detail">
        <div class="container detail__container">
            <img :src="`/n${$route.params.id}.webp`" alt="blog single image">
            <p>{{ $t(`company.news${$route.params.id}.desc`) }}</p>
        </div>
    </section>
        <!-- Team Start -->
        <section class="company" id="news">
    <div class="container ">
      <div class="company__title">
        <h3>{{ $t('company.related') }}</h3>
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
        <swiper-slide v-for="slide in 4" :key="slide">
            <div class="company__box" :style="`background-image: url(/n${slide}.webp);`">
              <p class="company__date">2023-01-27</p>
              <div class="company__bottom">
                <h5>{{ $t(`company.news${slide}.title`) }}</h5>
                <RouterLink :to="`/blog/${slide}`">
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

<style lang="scss" scoped>
.hero {
    h3 {
        position: relative;
        z-index: 1;
        color: #fff;
        font-size: 30px;
    }
}
.detail {
    padding-bottom: 70px;
    &__container {
        max-width: 900px;
    }
    padding-top: 70px;
    img {
        height: 400px;
        object-fit: cover;
        width: 100%;
        object-position: center;
        margin-bottom: 40px;
    }
    p {
        line-height: 1.7;
    }
}
.company {
    &__title {
        margin-top: 40px;
        margin-bottom: 40px;
        h3 {
            font-size: 40px;
        }
    }
}

@media (max-width: 992px) {
    .detail {
        padding-bottom: 0;
        img {
            height: 200px;
        }
    }
    .hero {
      h3 {
        font-size: 20px;
      }
    }
}
</style>
<template>
  <!-- Hero Start -->
  <section class="hero" style="background-image: url(/bg-main.jpg);">
    <div class="container">
      <div class="hero__box">
        <div class="hero__title">
          <h3>{{ $t('aboutPage.text') }}</h3>
        </div>
        <div class="hero__desc" style="max-width: 620px;">
          <p>{{ $t('aboutPage.desc') }}</p>
        </div>
        <div class="hero__buttons">
          <a href="https://di.uz/%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F.pdf" target="_blank">
            <button class="button button-bg">{{ $t('aboutPage.download') }} <i class="fa-solid fa-cloud-arrow-down"></i></button>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero End -->

    <!-- About Start -->
    <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="about__title mb-5 mb-lg-0 " data-aos="fade-right">
            <div class="title">
              <h3 class="title__first">{{ $t('aboutPage.company.text1') }}</h3>
              <h2 class="title__second">{{ $t('aboutPage.company.text2') }}</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1">
          <div class="image about__img" data-aos="fade-left">
            <img src="/aboutPage.jpg" alt="aboutPage">
          </div>
          <div class="about__desc" data-aos="fade-up" data-aos-duration="700">
            <p>{{ $t('aboutPage.company.desc') }}</p>
          </div>
          <div class="about__btn" data-aos="fade-up" data-aos-duration="800">
            <button class="button button-bg">{{ $t('hero.projects') }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About End -->

  <section class="mission">
    <div class="container mission__container">
      <div class="row">
        <div class="col-lg-5">
          <div class="mission__box" data-aos="fade-up">
            <h3>{{ $t('mission.card1.text') }}</h3>
            <p>{{ $t('mission.card1.desc') }}</p>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="mission__card" >
            <div class="image mission__img" data-aos="fade-down-left">
              <img src="/misson1.jpg" alt="mission">
            </div>
          </div>
        </div>
      </div>
      <div class="row mission__row">
        <div class="col-lg-5">
          <div class="mission__box mission__box-second" data-aos="fade-up">
            <h3>{{ $t('mission.card2.text') }}</h3>
            <p>{{ $t('mission.card2.desc') }}</p>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="mission__card" >
            <div class="image mission__img" data-aos="fade-down-left">
              <img src="/misson2.jpg" alt="mission">
            </div>
          </div>
        </div>
      </div>
      <div class="row mission__row">
        <div class="col-lg-5">
          <div class="mission__box mission__box-third" data-aos="fade-up">
            <h3>{{ $t('mission.card3.text') }}</h3>
            <p>{{ $t('mission.card3.desc') }}</p>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="mission__card" >
            <div class="image mission__img" data-aos="fade-down-left">
              <img src="/misson3.jpg" alt="mission">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <section class="timeline">
    <div class="container-fluid">

    </div>
  </section> -->

    <!-- About Start -->
    <section class="analyse">
    <div class="container">
      <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3 ">
              <div class="analyse__col" data-aos="fade-up">
                <img src="/about.jpg" alt="about">
                <h2>4000+</h2>
                <p>{{ $t('about.employee') }}</p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 ">
              <div class="analyse__col" data-aos="fade-up">
                <img src="/about.jpg" alt="about">
                <h2>150+</h2>
                <p>{{ $t('about.projects') }}</p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="analyse__col" data-aos="fade-up">
                <img src="/about.jpg" alt="about">
                <h2>16</h2>
                <p>{{ $t('about.complex') }}</p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="analyse__col" data-aos="fade-up">
                <img src="/about.jpg" alt="about">
                <h2>14</h2>
                <p>{{ $t('about.market') }}</p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="analyse__col" data-aos="fade-up">
                <img src="/about.jpg" alt="about">
                <h2>250+</h2>
                <p>{{ $t('about.special') }}</p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="analyse__col" data-aos="fade-up">
                <img src="/about.jpg" alt="about">
                <h2>9+</h2>
                <p>{{ $t('about.hospital') }}</p>
              </div>
            </div>
      </div>
    </div>
  </section>
  <!-- About End -->

</template>

<script setup>
import IconBox from '@/components/IconBox.vue';
</script>

<style scoped lang="scss">
.hero {
  &__buttons {
    i {
      padding-left: 10px;
    }
  }
}
.about {
  padding-bottom: 70px;
  &__title {
    padding-left: 0;
  }
  &__img {
    margin-bottom: 30px;
  }
  &__desc {
    margin-bottom: 55px;
  }
}

.mission {
  overflow: hidden;
  padding-top: 120px;
  padding-bottom: 150px;
  background-position: center;
  background-color: #F9F9F9;
  background-image: url(/bg-mission.svg );
  &__row {
    margin-top: 120px;
  }
  &__box {
    padding-left: 30px;
    position: relative;
    &::before {
      content: "1";
      position: absolute;
      top: 0px;
      left: -39px;
      width: 50px;
      height: 50px;
      background-color: #fab448;
      font-weight: 600;
      font-size: 30px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-second {
      &::before {
        content: "2";
      }
    }
    &-third {
      &::before {
        content: "3";
      }
    }
  }
  &__container {
    border-left: 3px solid #fab448;
  }
  h3 {
    font-size: 40px;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-bottom: 30px;
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 17px;
    line-height:1.8;
  }
}

// Analyse Styles
.analyse {
  padding-top: 90px;
  padding-bottom: 70px;
  overflow: hidden;

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
        background-color: #fab448;
      }
    }

    h2 {
      text-transform: uppercase;
      text-align: right;
      font-size: 47px;
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
    margin-bottom: 30px;
    cursor: pointer;
    background-size: cover;
    background-position: center center;
    position: relative;
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
        color: #fab448;
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


.title {
  &__second {
    text-align: left;
    text-transform: lowercase;
  }
  &__first {
    padding-left: 30px;
  }
}

.image {
  position: relative;
  img {
    width: 100%;
  }
    &::before {
      position: absolute;
      width: 100%;
      top: -20px;
      right: -20px;
      z-index: -1;
      content: "";
      height: 100%;
      border: 1px solid #fab448;
    }
}

@media (max-width: 992px) {
  .about {
    &__title {
      h3,h2 {
        font-size: 40px;
      }
    }
  }
  .mission {
    &__row {
      margin-top: 70px;
    }
    &__card {
      padding-top: 50px;
      padding-left: 30px;
    }
  }
}
@media (max-width: 577px) {
  .about {
    &__title {
      h3 {
        &::before {
          left: 0;
          width: 20px;
        }
      }
      h3,h2 {
        font-size: 30px;
      }
    }
  }
  .mission {
    &__container {
      border: none;
    }
    &__box {
      padding: 0;
      &::before {
        right: 0;
        left: auto;
        top: -10px;
        width: 40px;
        height: 40px;
        font-size: 20px;
      }
      h3 {
        font-size: 30px;
        margin-bottom: 10px;
      }
      p{
        font-size: 14px;
      }
    }
    &__card {
      padding: 0;
      padding-top: 30px;
    }
  }
  .image {
    &::before {
      top: -10px;
      right: -10px;
    }
  }
}
</style>
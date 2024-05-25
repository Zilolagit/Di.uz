<template>
  <!-- Header Start -->
  <header class="header">
    <div class="container">
      <div class="row pb-2">
        <div class="col-6 col-lg-8 col-xl-7 d-flex justify-content-between align-items-center">
          <div class="header__logo">
            <a href="/">
              <LogoSvg />
            </a>
          </div>
          <ul class="header__menu d-none d-lg-flex">
            <li class="header__item">
              <RouterLink to="/">{{ $t("header.menu1") }}</RouterLink>
            </li>
            <li class="header__item">
              <RouterLink to="/">{{ $t("header.menu2") }}</RouterLink>
            </li>
            <li class="header__item">
              <a href="https://hr.di.uz/">
                {{ $t("header.menu3") }}
              </a>
            </li>
            <li class="header__item">
              <RouterLink to="/">{{ $t("header.menu4") }}</RouterLink>
            </li>
            <li class="header__item">
              <RouterLink to="/">{{ $t("header.menu5") }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-xl-3 offset-xl-2 header__col d-none d-lg-flex justify-content-end align-items-center">
          <ul class="header__social">
            <li>
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-telegram"></i></a>
            </li>
          </ul>
          <div class="header__dropdown">
            <a href="#" class="header__main">{{ $i18n.locale }}</a>
            <i class="fa-solid fa-angle-down"></i>
            <ul class="header__dropdown-lang">
              <li @click="changeLanguage('uz')" class="header__switch">
                <a href="#">UZ</a>
              </li>
              <li @click="changeLanguage('en')" class="header__switch">
                <a href="#">EN</a>
              </li>
              <li @click="changeLanguage('ru')" class="header__switch">
                <a href="#">RU</a>
              </li>
            </ul>
          </div>
          <div class="header__contact">
            <div class="header__icon"><i class="fa-solid fa-phone"></i></div>
          </div>
        </div>
        <div class="col-6 d-lg-none d-flex justify-content-end align-items-center" style="gap: 35px;">
          <div class="shadow">
            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#phoneForm" aria-controls="phoneForm">
              <i class="fa-solid fa-phone"></i>
            </a>
          </div>
          <div class="header__bar" @click="isOpen = !isOpen">
            <i class="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
      </div>
      <LineSvg class="header__line" />
    </div>
  </header>
  <!-- Header End -->

  <RouterView/>

  <div class="menu d-lg-none" :class="{'menu-open' : isOpen}">
    <ul class="menu__list">
      <li class="menu__item" >
        <RouterLink to="/" @click="isOpen = false">{{ $t("header.menu1") }}</RouterLink>
      </li>
      <li class="menu__item" >
        <RouterLink to="/" @click="isOpen = false">{{ $t("header.menu2") }}</RouterLink>
      </li>
      <li class="menu__item">
        <a href="https://hr.di.uz/" @click="isOpen = false">
          {{ $t("header.menu3") }}
        </a>
      </li>
      <li class="menu__item">
        <RouterLink to="/" @click="isOpen = false">{{ $t("header.menu4") }}</RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink to="/" @click="isOpen = false">{{ $t("header.menu5") }}</RouterLink>
      </li>
    </ul>
  </div>

  <PhoneFloat/>

</template>

<script>
import Aos from "aos";
import LogoSvg from "@/components/icons/LogoSvg.vue";
import LineSvg from "@/components/icons/LineSvg.vue";
import { RouterLink } from "vue-router";
import LineSvgVue from "./components/icons/LineSvg.vue";
import PhoneFloat from "@/components/PhoneFloat.vue"
import { RouterView } from "vue-router";

export default {
  name: "HeaderComponent",
  components: {
    LogoSvg,
    RouterLink,
    LineSvg,
    PhoneFloat
  },
  methods: {
    changeLanguage(lang) {
      localStorage.setItem("lang", lang);
      this.$i18n.locale = lang;
    },
  },
  mounted() {
    Aos.init();
  },
  data() {
    return {
      isOpen: false
    }
  }
};
</script>

<style lang="scss">
$yellow: #fab448;
$black: #262524;
$grey: #f4f4f4;

/* Global Styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}

// Menu Styles
.menu {
  position: fixed;
  width: 100%;
  max-height: 0vh;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
  overflow: hidden;
  transition: all .5s ease;
  transform: translateY(110px);
  height: 100vh;
  &-open {
    transition: all .5s ease;
    max-height: 100vh;
    height: 100vh;
  }
  &__item {
    margin-bottom: 10px;
    a {
      color: $black;
      font-size: 25px;
      font-weight: 500;
    }
    a.router-link-exact-active {
      color: $yellow;
    }
  }
  &__list {
    padding: 30px;
  }
}


/* Header Styles */
.header {
  padding-top: 2rem;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  &__col {
    gap: 50px;
  }

  &__line {
    width: 100%;
    height: 1px;
  }

  &__logo {
    svg {
      width: 130px;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 70px;
  }

  &__item {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      left: -25px;
      top: 49%;
      width: 8px;
      height: 8px;
      background-color: $yellow;
      transition: 0.2s ease-in-out;
      z-index: 12;
      transform: rotate(45deg) translateY(-50%) scale(0);
    }

    &:hover {
      &::before {
        transform: rotate(45deg) translateY(-50%) scale(1);
      }
    }

    a {
      color: #fff;
      font-size: 15px;
    }
  }

  &__dropdown {
    i {
      padding-left: 10px;
      color: $yellow;
      font-size: 14px;
    }

    &::before {
      display: none;
      position: relative;
    }

    &:hover .header__dropdown-lang {
      transform: translateY(15px) translateX(-16px);
      opacity: 1;
    }

    &-lang {
      opacity: 0;
      transition: all 0.4s ease;
      transform: translateY(25px) translateX(-16px);
      position: absolute;
      background-color: $yellow;
      padding: 10px 25px;
    }
  }

  &__switch {
    padding: 2px 0px;

    a {
      color: #fff;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__main {
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
  }

  &__social {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      color: #fff;
      font-size: 18px;
      transition: all 0.3s ease;

      &:hover {
        color: $yellow;
      }
    }
  }

  &__contact {
    display: flex;
    gap: 20px;
    align-items: center;

    a {
      color: #fff;
      font-weight: 600;
      font-size: 18px;
    }
  }

  &__icon {
    width: 40px;
    height: 40px;
    border-radius: 0;
    background-color: $yellow;
    color: #fff;
    display: flex;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__bar {
    i {
      color: #fff;
      font-size: 20px;
    }
  }
}

.shadow {
    width: 40px;
    height: 40px;
    border-radius: 0;
    background-color: $yellow;
    color: #fff;
    display: flex;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    i {
      color: #fff;
    }
    a {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        border: inherit;
        top: 0;
        left: 0;
        z-index: 0;
        border: 1px solid $yellow;
        background: transparent;
        border-radius: inherit;
        -webkit-animation: pulsing 2.5s linear infinite;
        animation: pulsing 2.5s linear infinite;
      }
      &::after {
        animation: pulsing1 2.5s linear infinite;
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        border: inherit;
        top: 0;
        left: 0;
        z-index: 0;
        border: 1px solid $yellow;
        background: transparent;
        border-radius: inherit;
      }
    }
  }


@keyframes pulsing1 {
  0% {
    opacity: 1;
    transform: scaleY(1) scaleX(1);
}
20% {
    opacity: 0.5;
}
70% {
    opacity: 0.5;
    transform: scaleY(1.2) scaleX(1.2);
}
80% {
    opacity: 0;
    transform: scaleY(1.2) scaleX(1.2);
}
90% {
    opacity: 0;
    transform: scaleY(1) scaleX(1);
}
}

@keyframes pulsing {
  0% {
    opacity: 1;
    -webkit-transform: scaleY(1) scaleX(1);
    transform: scaleY(1) scaleX(1);
}

20% {
    opacity: 0.5;
}
70% {
    opacity: 0.5;
    -webkit-transform: scaleY(1.4) scaleX(1.4);
    transform: scaleY(1.4) scaleX(1.4);
}
80% {
    opacity: 0;
    -webkit-transform: scaleY(1.4) scaleX(1.4);
    transform: scaleY(1.4) scaleX(1.4);
}
90% {
    opacity: 0;
    -webkit-transform: scaleY(1) scaleX(1);
    transform: scaleY(1) scaleX(1);
}
}

/* Media Styles */

@media (max-width: 1200px) {
  .header {
    &__menu {
      gap: 45px;
    }

    &__col {
      gap: 30px;
    }
  }
}

@media (max-width: 768px) {
  .header {
    padding-top: 20px;
    padding-bottom: 0px;
  }
}

</style>
<template>

<div class="loader">
  <lottie-player class="anima" src="https://lottie.host/81d86dc7-e45c-4e24-81c9-a10cd55dc6a4/kZ2z3wZimH.json" background="transparent" speed="1" loop="" autoplay=""></lottie-player>
</div>

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
              <RouterLink to="/about">{{ $t("header.menu1") }}</RouterLink>
            </li>
            <li class="header__item">
              <a href="/#projects">{{ $t("header.menu2") }}</a>
            </li>
            <li class="header__item">
              <a href="https://hr.di.uz/">
                {{ $t("header.menu3") }}
              </a>
            </li>
            <li class="header__item">
              <a href="/#news">{{ $t("header.menu4") }}</a>
            </li>
            <li class="header__item">
              <RouterLink to="/contact">{{ $t("header.menu5") }}</RouterLink>
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
          <div class="header__bar" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasExample">
            <i class="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
      </div>
      <LineSvg class="header__line" />
    </div>
  </header>
  <!-- Header End -->

  <div class="offcanvas offcanvas-start d-lg-none" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="offcanvas__menu">
      <li class="offcanvas__list">
        <router-link to="/about" ><span data-bs-dismiss="offcanvas">{{ $t('header.menu1') }}</span></router-link>
      </li>
      <li class="offcanvas__list"><a href="/#projects" ><span data-bs-dismiss="offcanvas">{{ $t('header.menu2') }}</span></a></li>
      <li class="offcanvas__list"><a href="https://hr.di.uz/" ><span data-bs-dismiss="offcanvas">{{ $t('header.menu3') }}</span></a></li>
      <li class="offcanvas__list"><a href="/#news" ><span data-bs-dismiss="offcanvas">{{ $t('header.menu4') }}</span></a></li>
      <li class="offcanvas__list">
        <router-link to="/contact"><span data-bs-dismiss="offcanvas">{{ $t('header.menu5') }}</span></router-link>
      </li>
    </ul>
    <ul class="offcanvas__lang">
      <li><a href="#" @click="changeLanguage('en')"><span data-bs-dismiss="offcanvas">En</span></a></li>
      <li><a href="#" @click="changeLanguage('uz')"><span data-bs-dismiss="offcanvas">Uz</span></a></li>
      <li><a href="#" @click="changeLanguage('ru')"><span data-bs-dismiss="offcanvas">Ru</span></a></li>
    </ul>
  </div>
</div>

  <RouterView />

  <PhoneFloat />

  <footer class="footer" v-if="$route.path != '/contact'">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="footer__title">
            <div class="title">
              <h3 class="title__first">
                {{ $t('footer.text') }}
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="footer__icon">
                <i class="fa-solid fa-location-dot"></i>
                <div class="footer__card">
                  <h4>{{ $t('footer.address.text') }}</h4>
                  <p>{{ $t('footer.address.desc') }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="footer__icon">
                <i class="fa-solid fa-phone"></i>
                <div class="footer__card">
                  <h4>{{ $t('footer.phone.text') }}</h4>
                  <p>+998 71 288 88 88</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="footer__icon">
                <i class="fa-solid fa-clock"></i>
                <div class="footer__card">
                  <h4>{{ $t('footer.address.text') }}</h4>
                  <p>{{ $t('footer.hours.desc') }}</p>
                </div>
              </div>
            </div>
          </div>
          <ul class="footer__social">
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
          </ul>
          <div class="footer__form mb-5 mb-lg-0">
            <form @submit.prevent="submitingForm">
              <div class="row">
                <div class="col-md-4 mb-4 mb-md-0">
                  <input type="tel" id="inputPhone" v-model="phone_number" class="form-control form-control-lg footer__call"
                    aria-describedby="inputNumber" placeholder="+998" required>
                </div>
                <div class="col-md-5 mb-4 mb-md-0">
                  <input type="tel" id="inputName" v-model="name" class="form-control form-control-lg " aria-describedby="inputNumber"
                    required :placeholder="$t('footer.form.place')">
                </div>
                <div class="col-md-3 d-flex">
                  <button class="footer__submit">{{ $t('footer.form.btn') }}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="footer__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98121.86133060585!2d64.3403966558286!3d39.77763909783666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1716748732582!5m2!1sru!2s"
              width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div class="row pt-5 pb-3">
        <div class="col-sm-6 col-md-4 text-center mb-4 mb-sm-0 text-sm-start">
          <div class="footer__logo">
            <img src="/footerLogo.svg" alt="footerLogo">
          </div>
        </div>
        <div class="col-sm-6 col-md-4 text-center">
          <p class="footer__copy">{{ $t('footer.copy') }}</p>
        </div>
      </div>
    </div>
  </footer>
  <footer class="footer footer-second" v-else>
    <div class="container-fluid">
      <div class="footer__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98121.86133060585!2d64.3403966558286!3d39.77763909783666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1716748732582!5m2!1sru!2s"
              width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="container">
        <div class="row pt-4 pb-4">
          <div class="col-md-6 text-center text-md-start">
            <p class="footer__copy">{{ $t('footer.copy') }}</p>
          </div>
          <div class="col-md-6 d-flex justify-content-center justify-content-md-end  ">
                <ul class="footer__social">
              <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div class="popup" v-if="isPop">
        <div class="popup__box text-center">
            <i v-if="isError == false" class="fa-regular fa-circle-check"></i>
            <i v-else class="fa-regular fa-circle-xmark" style="color: red"></i>
            <h4 v-if="isError == false">
                {{ $t('phone.textPop') }}
            </h4>
            <h4 v-else>
                {{ $t('phone.error') }}
            </h4>

            <button @click="closePop">{{ $t('phone.btnPop') }}</button>
        </div>
    </div>

</template>

<script>
import Aos from "aos";
import LogoSvg from "@/components/icons/LogoSvg.vue";
import LineSvg from "@/components/icons/LineSvg.vue";
import { RouterLink } from "vue-router";
import LineSvgVue from "./components/icons/LineSvg.vue";
import PhoneFloat from "@/components/PhoneFloat.vue"
import { RouterView } from "vue-router";
import axios from "axios";

export default {
  name: "HeaderComponent",
  components: {
    LogoSvg,
    RouterLink,
    LineSvg,
    PhoneFloat
  },
  data() {
    return {
      isOpen: false,
      token: "7069003625:AAGAQJns8zC96OqRSQIwC8Ewj1efbWCnIW",
      chat_id: "237282713",
      name : "",
      phone_number : "",
      isPop: false,
      isError:false
    }
  },
  methods: {
    changeLanguage(lang) {
      localStorage.setItem("lang", lang);
      this.$i18n.locale = lang;
    },
    async submitingForm() {
      try {
        const response = await axios.post(
          `https://api.telegram.org/bot${this.token}/sendMessage`,
          {
            chat_id: this.chat_id,
            text: `Name: ${this.name}\nPhone Number: ${this.phone_number}`,
          }
        );
        this.isPop = true

      } catch (error) {
        this.isError = true
      }
      finally {
        this.isPop = true
        this.name = "";
        this.phone_number = "";
      }
    },
    closePop() {
      this.isPop = false
      this.isError = false
    }
  },
  mounted() {
    Aos.init();
    document.onreadystatechange = () => {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loader").style.visibility = "visible";
    } else {
        document.querySelector(".loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};
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

.loader {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $yellow;
  z-index: 999999;
  .anima {
    width: 300px;
  }
}

.offcanvas {
  &__list {
    a {
      color: $black;
      font-weight: 500;
      font-size: 20px;
    }
  }
  &__lang {
    margin-top: 20px;
    display: flex !important;
    gap: 15px;
    a {
      font-weight: 500;
      color:#fab448 ;
      font-size: 18px;
    }
  }
}

// Popup Styles
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 99999;

    &__box {
        max-width: 500px;
        border-radius: 20px;
        padding: 25px;
        background-color: #fff;
        margin: 0 auto;
    }

    i {
        color: green;
        font-size: 45px;
        margin-bottom: 30px;
    }

    h4 {
        max-width: 400px;
        margin: 0 auto;
        line-height: 1.5;
        margin-bottom: 30px;
    }

    button {
        background: transparent;
        border: none;
        border: 1px solid #000;
        padding: 10px 45px;
        border-radius: 50px;
        transition: all 0.3s ease;

        &:hover {
            color: #fff;
            background-color: #000;
        }
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

// Footer Styles

.footer {
  padding-top: 80px;
  background-image: url(/bg-footer.png);
  background-position: left bottom;
  background-size: 60%;
  background-repeat: no-repeat;
  &-second {
    background-image: none;
    .container-fluid {
      padding-left: 0;
      padding-right: 0;
    }
    .footer__social {
      padding-top: 0;
      padding-bottom: 0px;
    }
  }

  &__form {
    padding: 30px 30px;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    label {
      font-size: 12px;
      margin-bottom: 10px;
    }

    input {
      font-size: 15px;
      border-radius: 0px;
      padding: 12px 20px;
    }
  }

  &__call {
    background-image: url(/uz.png);
    background-position: 20px;
    padding-left: 55px !important;
    background-size: 24px;
    background-repeat: no-repeat;
  }

  &__title {
    margin-bottom: 50px;
  }

  &__submit {
    border: none;
    background-color: $yellow;
    color: #fff;
    // padding: 15px 25px;
    width: 100%;
    // padding-left: 10px;
    // padding-right: 10px;
  }

  &__social {
    display: flex;
    gap: 15px;
    padding-top: 30px;
    padding-bottom: 30px;

    a {
      font-size: 18px;
      color: #262524;
      transition: all .3s ease;

      &:hover {
        color: $yellow;
      }
    }
  }

  &__map {
    iframe {
      width: 100%;
    }
  }

  &__icon {
    display: flex;
    gap: 30px;

    i {
      font-size: 25px;
      color: $yellow;
    }

    h4 {
      font-weight: 600;
      font-size: 20px;
    }

    p {
      color: rgba(38, 37, 36, 0.38);
      font-size: 14px;
    }
  }

  &__copy {
    color: #262524;
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

  .footer {
    padding-top: 30px;

    &__map {
      iframe {
        height: 250px !important;
      }
    }
  }
}

@media (max-width: 992px) {
  .footer {
    &__map {
      iframe {
        height: 350px;
      }
    }

    &__submit {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
</style>
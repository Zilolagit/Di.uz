<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
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
</template>

<style lang="scss">
$yellow: #fab448;

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
    background: rgba(0, 0, 0, 0.4);
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
	&:after{
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
    transform: translate(10px, -10px)	;
  }
	&:hover{
    transform: translate(10px, -10px);
    &::after{
      transform: translate(0px);
      opacity: 0;
    }
  }
}

// Media Styles
@media (max-width: 768px) {
  .hero {
    padding-top: 140px;
    padding-bottom: 100px;
    &__buttons {
      flex-wrap: wrap;
      gap: 30px;
    }
    &__title {
      h3{
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
}


</style>
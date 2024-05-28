<template>

  <!-- Hero Start -->
  <section class="hero" style="background-image: url(/bg-main.jpg);">
    <div class="container">
      <div class="hero__box">
        <div class="hero__title">
          <h3>{{ $t('contact.text') }}</h3>
        </div>
        <div class="hero__desc" style="max-width: 620px;">
          <p>{{ $t('contact.desc') }}</p>
        </div>
        <div class="hero__buttons">
          <a href="#form">
            <button class="hero__btn"> <i class="fa-solid fa-arrow-down"></i></button>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero End -->

  <section class="form" id="form">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 mb-4 mb-lg-0 ">
          <div class="footer__title">
            <div class="title">
              <h3 class="title__first">
                {{ $t('contact.main1') }}
              </h3>
              <h3 class="title__second">
                {{ $t('contact.main2') }}
              </h3>
            </div>
          </div>
          <div class="form__desc" style="max-width: 600px;">
            <p>{{ $t('contact.detail') }}</p>
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
        </div>
        <div class="col-lg-4 offset-lg-1">
          <div class="footer__form mb-5 mb-lg-0">
            <form @submit.prevent="postForm">
              <div class="row">
                  <input type="tel" id="inputName" v-model="name" class="form-control form-control-lg " aria-describedby="inputNumber"
                    required :placeholder="$t('footer.form.place')">
                  <input type="tel" id="inputPhone" v-model="phone_number" class="form-control form-control-lg footer__call"
                    aria-describedby="inputNumber" placeholder="+998" required>
                  <select class="form-select form-select-lg" required v-model="choice"
                    aria-label="Default select example">
                    <option :value="$t('phone.department.option1')" selected>{{ $t('phone.department.option1') }}
                    </option>
                    <option :value="$t('phone.department.option2')">{{ $t('phone.department.option2') }}</option>
                    <option :value="$t('phone.department.option3')">{{ $t('phone.department.option3') }}</option>
                    <option :value="$t('phone.department.option4')">{{ $t('phone.department.option4') }}</option>
                    <option :value="$t('phone.department.option5')">{{ $t('phone.department.option5') }}</option>
                    <option :value="$t('phone.department.option6')">{{ $t('phone.department.option6') }}</option>
                </select>
                <textarea class="form-control " v-model="message" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style="height: 100px"></textarea>
                <div class="form__btn text-end">
                  <button class="form__submit">{{ $t('footer.form.btn') }}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  </section>
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
import axios from "axios";

export default {
  data() {
    return {
      name: "",
            phone_number: "",
            choice: this.$t('phone.department.option1'),
            token: "7069003625:AAGAQJns8zC96OqRSQIwC8Ewj1efbWCnIW0",
            chat_id: "237282713",
            isError: false,
            isPop: false,
            message: ""
    }
  },
  methods: {
        async postForm() {
            try {
                const response = await axios.post(
                    `https://api.telegram.org/bot${this.token}/sendMessage`,
                    {
                        chat_id: this.chat_id,
                        text: `Name: ${this.name}\nPhone Number: ${this.phone_number}\nChoice: ${this.choice}\nMessage: ${this.message}`,
                    }
                );

            } catch (error) {
                console.log(error);
                this.isError = true;
            }
            finally {
                this.isPop = true;
                this.name = "";
                this.phone_number = "";
                this.message = "";
                this.choice = this.$t('phone.department.option1');
            }
        },
        closePop() {
            this.isPop = false;
            this.isError = false;
        }
    }
}

function postForm() {

}

</script>

<style lang="scss" scoped>
.hero {
  &__btn {
    border: none;
    border: 2px solid #fab448;
    background-color: transparent;
    color: #fab448;
    width: 50px;    
    height: 50px;    
    transition: all .3s ease;
    font-size: 20px;
    &:hover {
      background-color: #fab448;
      color: #fff;
    }
  }
}

.form {
  padding-top: 80px;
  padding-bottom: 60px;
  background-image: url(/bg-new.svg);
  background-position: bottom right;
  background-size: cover;
  background-repeat: no-repeat;
  &__desc {
    margin-bottom: 40px;
  }
  &__submit {
    border: none;
    background-color: #fab448;
    color: #fff;
    padding: 15px 25px;
    width: auto;

  }
  input {
    margin-bottom: 20px;
    font-size: 17px;
  }
  select {
    font-size: 17px;
    border-radius: 0;
    margin-bottom: 20px;
  }
  textarea {
    border-radius: 0;
    resize: none;
    margin-bottom: 30px;
  }
}
</style>
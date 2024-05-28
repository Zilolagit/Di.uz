<template>
    <div class="shadow shadow-fixed d-none d-lg-flex">
        <a href="#" data-bs-toggle="offcanvas" data-bs-target="#phoneForm" aria-controls="phoneForm">
            <i class="fa-solid fa-phone"></i>
        </a>
    </div>
    <div class="offcanvas offcanvas-top" data-bs-scroll="true" tabindex="-1" id="phoneForm"
        aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body text-center">
            <div class="shadow__text">
                <h3>{{ $t('phone.text') }}</h3>
            </div>
            <div class="shadow__desc mb-5">
                <p>{{ $t('phone.desc') }}</p>
            </div>
            <form class="shadow__form" @submit.prevent="submitForm">
                <input class="form-control form-control-lg mb-3" required v-model="name" type="name"
                    :placeholder="$t('phone.name')" aria-label="default input example" >
                <input class="form-control form-control-lg mb-3" required v-model="phone_number" type="tel"
                    :placeholder="$t('phone.phone')" aria-label="default input example" >
                <select class="form-select form-select-lg mb-5" required v-model="choice"
                    aria-label="Default select example">
                    <option :value="$t('phone.department.option1')" selected>{{ $t('phone.department.option1') }}
                    </option>
                    <option :value="$t('phone.department.option2')">{{ $t('phone.department.option2') }}</option>
                    <option :value="$t('phone.department.option3')">{{ $t('phone.department.option3') }}</option>
                    <option :value="$t('phone.department.option4')">{{ $t('phone.department.option4') }}</option>
                    <option :value="$t('phone.department.option5')">{{ $t('phone.department.option5') }}</option>
                    <option :value="$t('phone.department.option6')">{{ $t('phone.department.option6') }}</option>
                </select>
                <button type="submit" class="shadow__btn">{{ $t('phone.btn') }}</button>
            </form>
        </div>
    </div>
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
        }
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post(
                    `https://api.telegram.org/bot${this.token}/sendMessage`,
                    {
                        chat_id: this.chat_id,
                        text: `Name: ${this.name}\nPhone Number: ${this.phone_number}\nMessage: ${this.choice}`,
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
                this.choice = this.$t('phone.department.option1');
            }
        },
        closePop() {
            this.isPop = false;
            this.isError = false;
        }
    }
}


</script>

<style lang="scss" scoped>
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


// Shadow Styles

.shadow {
    &-fixed {
        position: fixed;
        bottom: 60px;
        right: 70px;
        z-index: 9999;
    }

    &__btn {
        width: 100%;
        border: none;
        background-color: #fab448;
        color: #fff;
        padding: 12px 10px;
        font-size: 17px;
    }

    &__text {
        margin-top: -10px;
    }

}

#phoneForm {
    max-width: 600px;
    margin: 0 auto;
    height: 450px;
    margin-top: 60px;
    height: 450px;

    input,
    select {
        font-size: 16px;
        border-radius: 50px;
    }
}
</style>
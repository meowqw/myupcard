<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section
        class="section-main"
        v-if="Object.keys(SELECTED_CARD).length !== 0"
      >
        <div class="section-main__container">
          <div class="section-main__card main-card">
            <!-- изображение -->
            <div class="main-card__img">
              <picture v-if="SELECTED_CARD.personal_img"
                ><source
                  :srcset="API_DOMAIN + SELECTED_CARD.personal_img"
                  type="image/avif" />
                <source
                  :srcset="API_DOMAIN + SELECTED_CARD.personal_img"
                  type="image/webp" />
                <img
                  loading="lazy"
                  :src="API_DOMAIN + SELECTED_CARD.personal_img"
                  class="image"
                  width="230"
                  height="230"
                  alt="avatar"
              /></picture>

              <picture v-else>
                <source
                  :srcset="personal_img"
                  type="image/avif" />
                <source
                  :srcset="personal_img"
                  type="image/webp" />
                <img
                  loading="lazy"
                  :src="personal_img"
                  class="image"
                  width="230"
                  height="230"
                  alt="avatar"
              />
              </picture>
            </div>
            <div class="main-card__info">
              <div class="main-card__top">
                <!-- тайтл -->
                <h2 class="main-card__title title-h2">
                  {{ SELECTED_CARD.name }}
                </h2>
                <!-- сабтайтл -->
                <p class="main-card__speciality text-little">
                  {{ SELECTED_CARD.spec }}
                </p>
              </div>
              <div class="main-card__bottom">
                <!-- ссылка телефона -->
                <a :href="'tel:' + SELECTED_CARD.phone" class="main-card__link"
                  ><i class="fa-solid fa-mobile"></i>
                  <span class="text-little">{{ SELECTED_CARD.phone }}</span> </a
                ><!-- ссылк емейла -->
                <a
                  :href="'mailto:' + SELECTED_CARD.email"
                  class="main-card__link"
                  ><i class="fa-solid fa-envelope"></i>
                  <span class="text-little">{{ SELECTED_CARD.email }}</span></a
                >
              </div>
            </div>
          </div>
          <!-- кнопки -->
          <div class="section-main__btns">
            <button class="btn-reset btn btn--main" @click="goToQRCode">
              <i class="fa-solid fa-qrcode"></i>
              <span>QR-код визитки</span></button
            ><!-- data-url - ссылка на визитку -->
            <button @click="share()"
              class="btn-reset btn btn--main"
              id="share"
              data-title="Тайтл визики"
              data-text="Описание визитки"
              data-url="#"
            >
              <i class="fa-regular fa-share-from-square"></i>
              <span>Поделиться визиткой</span>
            </button>

            <button class="btn-reset btn btn--main" @click="redirectToEdit()">
              <i class="fa-regular fa-pen-to-square"></i>
              <span>Редактировать визитку</span>
            </button>

            <!-- href = ссылка на визитку-->
            <a
              :href="'https://card.upcard.online/' + SELECTED_CARD.link"
              class="btn-reset btn btn--main"
              target="_blank"
              ><i class="fa-regular fa-eye"></i>
              <span>Просмотреть визитку</span></a
            >
          </div>
        </div>
      </section>
      <section class="section-main" v-else>
        <div class="section-main__container">
          <div class="section-main__card main-card">
            <div class="main-card__info">
              Здесь вы сможете увидеть ваши визитки
            </div>
          </div>
        </div>
      </section>

      <section class="list-of-cards list-of-cards--main">
        <upAccountCards />
      </section>
    </div>
  </main>
  <up-card-popup
      :is-open="isPopupOpen"
      :currentUrl="'https://card.upcard.online/' + SELECTED_CARD.link"
      @close="isPopupOpen = false"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";
import upAccountCards from "@/components/account/up-account-cards.vue";
import UpCardPopup from "@/components/card/up-card-popup.vue";

export default {
  name: "up-account-personal",
  data() {
    return {
      isPopupOpen: false,
      API_DOMAIN: API_DOMAIN,
      personal_img: require("../../assets/img/avatar-card.avif"),
    };
  },
  components: {
    UpCardPopup,
    upAccountCards,
  },
  methods: {
    ...mapActions(["SELECT_CARD"]),
    // переход на страницу редактирвоания выбранной карточки
    redirectToEdit() {
      this.$router.push("/card-edit");
    },

    goToQRCode() {
      this.$router.push("/card-qr");
    },
    share() {
      this.isPopupOpen = true;
    }
  },
  computed: {
    ...mapGetters(["SELECTED_CARD", "CARDS"]),
    // selectedCard: []
  },
  mounted() {
    
  },
};
</script>


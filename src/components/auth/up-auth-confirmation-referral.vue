<template>
  <main class="main">
    <div class="main__container container">
      <section class="confirmation section-block section-block--big">
        <div class="confirmation__container">
          <p class="confirmation__descr text-regular" data-aos="zoom-in">
            Введите ссылку от своего реферера для входа в аккаунт UpCard. Вам
            будет выдана визитка компании для пользования.
          </p>
          <form
            action="#"
            class="confirmation-form form-confirmation-referral btns-panel"
          >
            <label class="confirmation-form__label label"
              ><input
                type="text"
                name="referral-link"
                class="input-reset input confirmation-form__input input-link"
                placeholder="https://upcard-link/user123"
                required
              />
              <span>Ссылка реферала</span></label
            >
            <div class="confirmation-form__btns">
              <button class="btn-reset btn btn-form confirmation-form__btn">
                Отправить код
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "up-auth-confirmation-referral",
};
</script>


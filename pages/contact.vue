<template lang="pug">
  #contact
    #map.contact__map карта хуярта
    .contact__data
      .container
        p.number.lptracker_phone +7 (499) 391-22-21
        p.week с 10:00 до 19:00 с Пн. по Пт.
        p.adress Москва, ул. Южнопортовая 5 с.1
        p.park На территории БЦ доступна платная парковка
        p.online On-line заявки – круглосуточно
        p.email
          a(href="mailto:prosto@prostokna.ru") PROSTO@PROSTOKNA.RU
      //- ul.social_icons.white
      //-   include ../assets/img/contact/social_icons.pug
      //- .line 1
      //- .line 2
      //- .line 3
    .contact__reqvizits
      .container
        p ОГРН 1157746588449
        p ИНН 7722332230
        p Р/с 40702810038000143570
        p ПАО СБЕРБАНК
        p Кор/с 30101810400000000225
        p БИК 044525205
    form.contact__form
      //- .form__img 
        //- img(src='/assets/img/contact/Keyboard.svg')
      //- .form__name 
        //- input(name="name" placeholder='ИМЯ *')
      //- .form__area
        //- textarea(name="message" placeholder='СООБЩЕНИЕ')
      //- .form__email
        //- input(name="email" placeholder='EMAIL')
      //- .form__phone
        //- input(name="tel" placeholder='ТЕЛЕФОН *')
      //- .form__button
        //- button отправить
      

</template>

<script>
// import $ from 'jquery'
export default {
  mounted () {
    var script = document.createElement('script')
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCt8zCnAdWM57-hf6vndvzWZ0UKDPc2yxE&callback=initMap'
    document.body.appendChild(script)
  }
}
</script>

<style lang='scss'>
#contact {
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr 25% 25%;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "contact__map contact__data contact__reqvizits"
    "contact__map contact__form contact__form";
  .contact__map {
    grid-area: contact__map;
    background-color: grey;
  }
  .contact__data {
    grid-area: contact__data;

    // background: green;
    // display: flex;
    // flex-direction: column;
    // padding: 50px;
    // .line {
    //   flex-grow: 1;
    //   display: flex;
    //   align-items: center;
    //   &:last-child {
    //     align-items: flex-end;
    //   }
    // }
    background-color: #353535;
    // padding: 6.9% 0 0 45px;
    padding: 50px 0 50px 30px;
    .container {
      display: flex;
      flex-direction: column;
      p {
        font-family: "MontserratMedium";
        font-size: 18px;
        color: white;
      }
      .number {
        font-size: 26px;
      }
      .week {
        font-size: 14px;
        color: #ededed;
        opacity: 0.5;
        margin-top: -10px;
        margin-bottom: 40px;
      }
      .park {
        font-size: 12px;
        opacity: 0.5;
        // @media screen and (max-width: 992px) {
        //   width: 200%;
        // }
        // @media screen and (max-width: 768px) {
        //   width: 100%;
        // }
      }
      .online {
        font-size: 14px;
      }
      .email {
        font-size: 16px;
        margin-top: 90px;
        a {
          color: white;
          text-decoration: underline;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
  .contact__reqvizits {
    grid-area: contact__reqvizits;
    // height: 100%;
    // min-height: 479px;
    // padding: 8.5% 0 0 40px;
    background-color: #353535;
    padding: 50px 0 50px 30px;
    opacity: 0.95;
    .container {
      // height: 34.56vh;
      // min-height: 290px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        font-family: "MontserratMedium";
        font-size: 16px;
        color: white;
      }
    }
  }
  .contact__form {
    grid-area: contact__form;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "form__img form__img"
      "form__name form__area"
      "form__email form__area"
      "form__phone form__button";

    .form__img {
      grid-area: form__img;
    }
    .form__name {
      grid-area: form__name;
    }
    .form__area {
      grid-area: form__area;
    }
    .form__email {
      grid-area: form__email;
    }
    .form__phone {
      grid-area: form__phone;
    }
    .form__button {
      grid-area: form__button;
    }
  }
}
</style>

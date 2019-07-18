<template lang="pug">
  .wrapper
    #toggleMenu
      span
      span
      span
      span
      span
      span
      span
      span
      span
    header
      .logo
        nuxt-link(to="/")
          img(src="~assets/img/logo3.svg")
      .search
        input(type='text',placeholder='Введите поисковый запрос...')
        a(href='#').mbutton.grey.small Найти
      .phone
        .line1
          a.tel.lptracker_phone(href='tel:+74993912221') +7 499 391 22 21
        .line2
          a.callme(href='#') Перезвоните мне
      .icons
        .callall
          img(src="~assets/img/call.svg", alt="")
        .calc
          img(src="~assets/img/top/calc.png", alt="")
    nav leftmenu
    main
      nuxt
  //- #top
    .logo
      a(href='/')
        img(src="~assets/img/logo3.svg")
        
    .search
      a(href='#').mbutton.grey.small Найти
      .bginput
        input(type='text',placeholder='Введите поисковый запрос...').form-control.form-control-pokna.small.grey
    .phone
      a.tel.lptracker_phone(href='tel:+74993912221') +7 499 391 22 21
      a.callme(href='#' data-toggle="modal" data-target="#zay_modal" data-class="zay_modal_white") Перезвоните мне
      a.callall(href="#" data-toggle="modal" data-target="#modal_mobile_contact")
        img(src="~assets/img/call.svg", alt="")
    .l
      #toggleBasicMenu
        .wrap
          span
          span
          span
          span
          span
          span
          span
          span
          span
      .menu
        ul
          if left_menu
            each item, index in left_menu
              if (left_menu_active || left_menu_active === 0) && index == left_menu_active
                - var active_class = 'active'
              else
                - var active_class = ''
              li(class= active_class)
                a(href= item.uri)
                  .b
                    img(src="/images/top/" + item.ico[0], alt="")
                  .h
                    img(src="/images/top/" + item.ico[1], alt="")
                  .title #{item.title}
    
</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="scss">


a.mbutton {
    font-family: 'MontserratSemiBold';
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    padding: 13px 30px;
    border-radius: 22px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    &.small {
        padding: 11px 30px;
    }
    &.grey {
        background-color: #383838;
        color: #FFF;
    }
    &.white {
        background-color: #FFF;
        color: #000000;
    }
    &.white_blue_border {
        background-color: #FFF;
        color: #000000;
        border: 1px solid #2d70e4;
        padding-top: 12px;
        padding-bottom: 12px;
    }
    &.blue_border {
        color: white;
        border: 1px solid #2d70e4;
        padding-top: 12px;
        padding-bottom: 12px;
    }
    &.blue {
        background: -moz-linear-gradient(135deg, rgba(21,93,211,1) 0%, rgba(75,132,245,1) 100%); /* ff3.6+ */
        background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, rgba(75,132,245,1)), color-stop(100%, rgba(21,93,211,1))); /* safari4+,chrome */
        background: -webkit-linear-gradient(135deg, rgba(21,93,211,1) 0%, rgba(75,132,245,1) 100%); /* safari5.1+,chrome10+ */
        background: -o-linear-gradient(135deg, rgba(21,93,211,1) 0%, rgba(75,132,245,1) 100%); /* opera 11.10+ */
        background: -ms-linear-gradient(135deg, rgba(21,93,211,1) 0%, rgba(75,132,245,1) 100%); /* ie10+ */
        background: linear-gradient(315deg, rgba(21,93,211,1) 0%, rgba(75,132,245,1) 100%); /* w3c */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4b84f5', endColorstr='#155dd3',GradientType=0 ); /* ie6-9 */
        color: #FFF;
        &:hover {
            color: #FFF;
        }
    }
    &.trans-white {
        color: #FFF;
        border: 1px solid #FFF;
        padding-top: 12px;
        padding-bottom: 12px;
    }
    &.mbutton-block {
        width: 100%;
        text-align: center;
    }
}

input, textarea {
    &.form-control-pokna {
        border-radius: 22px;
        padding: 12px 20px;
        font-family: 'Montserrat';
        font-size: 14px;
        line-height: 18px;
        &.white {
            border-color:rgba(255,255,255,.5);
            background: none;
            color: #FFF;
            &::-webkit-input-placeholder {
                color: rgba(255,255,255,.5);
            }
            &::-moz-placeholder {
                color: rgba(255,255,255,.5);
            }
            &:-ms-input-placeholder {
                color: rgba(255,255,255,.5);
            }
            &:-moz-placeholder {
                color: rgba(255,255,255,.5);
            }
            &:active,
            &:focus {
                color: #FFF;
                border-color:rgba(255,255,255,1);
                box-shadow: none;
                background: -moz-linear-gradient(360deg, rgba(255,255,255,.05) 0%, rgba(255,255,255,.2) 100%); /* ff3.6+ */
                background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255,255,255,.05)), color-stop(100%, rgba(255,255,255,.2))); /* safari4+,chrome */
                background: -webkit-linear-gradient(360deg, rgba(255,255,255,.05) 0%, rgba(255,255,255,.2) 100%); /* safari5.1+,chrome10+ */
                background: -o-linear-gradient(360deg, rgba(255,255,255,.05) 0%, rgba(255,255,255,.2) 100%); /* opera 11.10+ */
                background: -ms-linear-gradient(360deg, rgba(255,255,255,.05) 0%, rgba(255,255,255,.2) 100%); /* ie10+ */
                background: linear-gradient(90deg, rgba(255,255,255,.05) 0%, rgba(255,255,255,.2) 100%); /* w3c */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#FFFFFF',GradientType=1 ); /* ie6-9 */            
            }
        }
        &.grey {
            border-color:rgba(0,0,0,.1);
            background: none;
            color: #FFF;
            &::-webkit-input-placeholder {
                color: rgba(0,0,0,.2);
            }
            &::-moz-placeholder {
                color: rgba(0,0,0,.2);
            }
            &:-ms-input-placeholder {
                color: rgba(0,0,0,.2);
            }
            &:-moz-placeholder {
                color: rgba(0,0,0,.2);
            }
            &:active,
            &:focus {
                color: #333;
                border-color:rgba(0,0,0,.2);
                box-shadow: none;
            }
        }
        &.small {
            padding: 10px 20px;
            border-radius: 20px;
            line-height: 17px;
        }
    }
}


header {
    // position: fixed;
    // top: 0;
    // right: 0;
    // left: 0;
    // height: 60px;
    // border-bottom: 1px solid #999;
    // z-index: 100;
    // background-color: #FFF;
    // @media (max-width: 575px) {
    //     height: 50px;
    // }
    .l {
        position: absolute;
        top: 0;
        left: 0;
        width: 60px;
        height: 100vh;
        border-right: 1px solid #999;
        @media (max-width: 1200px) {
            width: 0;
            border-right: none;
        }
        .handle {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            height: 60px;
            background: #ededed;
            z-index: 4;
            border-bottom: 1px solid #999;
            cursor: pointer;
            .hamburger {
                height: 59px;
                padding: 19px 15px;
                @media (max-width: 575px) {
                    height: 50px;
                    padding: 15px 10px;
                }
                .hamburger-box {
                    width: 30px;
                    height: 24px;
                    @media (max-width: 575px) {
                        width: 25px;
                        height: 17px;
                    }
                    .hamburger-inner {
                        height: 4px;
                        border-radius: 2px;
                        background: #353535;
                        width: inherit;
                        @media (max-width: 575px) {
                            height: 3px;
                        }
                        &::before {
                            width: inherit;
                            height: 4px;
                            top: 9px;
                            border-radius: 2px;
                            background: #353535;
                            @media (max-width: 575px) {
                                height: 3px;
                                top: 7px;
                            }
                        }
                        &::after {
                            width: inherit;
                            height: 4px;
                            top: 18px;
                            border-radius: 2px;
                            background: #353535;
                            @media (max-width: 575px) {
                                height: 3px;
                                top: 14px;
                            }
                        }
                    }
                }
                &.is-active {
                    .hamburger-box {
                        .hamburger-inner {
                            @media (max-width: 575px) {
                                top: -1px;
                                left: -2px;
                            }
                            &::after {
                                left: 0;
                                top: 20px;
                                @media (max-width: 575px) {
                                    left: 0px;
                                }
                            }        
                        }
                    }
                }
            }
        }
        .menu {
            position: absolute;
            top: 60px;
            bottom: 0;
            left: 0;
            z-index: 1;
            width: 59px;
            background-color: #FFF;
            -moz-transition: all .25s linear;
            -o-transition: all .25s linear;
            -webkit-transition: all .25s linear;
            @media (max-width: 1199px) {
                top: 50px;
                width: 0vw;
            }
            ul {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: 0;
                padding: 0;
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;
                @media (max-width: 575px) {
                    top: 0;
                    transform: none;
                    height: 100%;
                }
                li {
                    position: relative;
                    flex-basis: 60px;
                    a {
                        display: flex;
                        height: 100%;
                        text-decoration: none;
                        .title {
                            flex-grow: 1;
                            flex-shrink: 0;
                            flex-basis: 240px;
                            display: flex;
                            align-items: center;
                            justify-content: left;
                            flex-wrap: wrap;
                            white-space: wrap;
                            padding: 0 20px 0 10px;
                            font-family: 'MontserratMedium';
                            color: #353535;
                            font-size: 14px;                            
                        }
                        .b {
                            flex-grow: 0;
                            flex-shrink: 0;
                            height: 100%;
                            img {
                                height: 30px;
                                width: 30px;
                                margin: 15px;
                            }
                        }
                        .h {
                            flex-grow: 0;
                            flex-shrink: 0;
                            height: 100%;
                            display: none;
                            img {
                                height: 30px;
                                width: 30px;
                                margin: 15px;
                            }
                        }
                    }
                    &.active, &:hover {
                        background-color: #ededed;
                        .title {
                            color: #2d70e4;
                        }                        
                        .b {
                            display: none;
                        }
                        .h {
                            display: block;
                        }
                    }
                }
            }
            &.opened {
                width: 300px;
                box-shadow: 10px 0 25px rgba(0,0,0,.25);
                @media (max-width: 575px) {
                    position: absolute;
                    top: 50px;
                    left: 0;
                    right: 0;
                    // background-color: yellow;
                    // bottom: 0;
                    width: 100vw;
                    height: auto;
                    box-shadow: none;
                }
            }
        }
    }
    .logo {
        // position: absolute;
        // left: 60px;
        // top: 0;
        // width: 220px;
        // height: 59px;
        // z-index: 3;
        // background-color: red;
        // background-image: url("/images/logo1.svg");
        // background-position: left;
        // background-repeat: no-repeat;
        // background-color: #FFF;
        // background-size: contain;
        // @media (max-width: 575px) {
        //     height: 49px;
        //     left: 50px;
        //     width: 139px;
        //     // background-position: left center;
        // }
        &:hover {
            // opacity: 0.8;
            // background-image: url("/images/logo2.svg");
        }
        a {
            // position: absolute;
            // width: 100%;
            // height: 100%;
            // img {
            //     display: block;
            //     height: 31px;
            //     margin: 14px 0 14px 20px;
            //     @media (max-width: 575px) {
            //         height: 27px;
            //         margin: 11px 0 11px 0;
            //     }
            // }
        }
    }
    .phone {
        // position: absolute;
        // right: 60px;
        // top: 0;
        // width: 210px;
        // height: 59px;
        // z-index: 3;
        // padding: 9px 0;
        // background-color: red;
        a.callall {
            // position: absolute;
            // top: 14px;
            // right: 15px;
            // height: 30px;
            // width: 30px;
            // opacity: 1;
            // @media (max-width: 575px) {
            //     top: 12px;
            //     right: 12px;
            //     height: 25px;
            //     width: 25px;
            // }
            // img {
            //     display: block;
            // }
        }
        // a.tel {
        //     float: left;
        //     display: block;
        //     font-family: 'MontserratBold';
        //     font-size: 18px;
        //     line-height: 24px;
        //     color: #000000;
        //     text-decoration: none;
        // }
        // a.callme {
        //     float: left;
        //     display: block;
        //     font-family: 'Montserrat';
        //     font-size: 14px;
        //     line-height: 16px;
        //     color: #2d70e4;
        //     text-decoration: none;
        //     border-bottom: 1px dashed #2d70e4b2;
        // }
        a.whatsapp {
            // position: absolute;
            // top: 14px;
            // right: 15px;
            // display: block;
            // height: 30px;
            // width: 30px;
            // // opacity: .75;
            // background-image: url('/images/whatsapp_grey.svg');
            // background-size: contain;
            // background-repeat: no-repeat;
            // background-position: center;
            // transition: all .25s;
            // &:hover {
            //     background-image: url('/images/whatsapp.svg');
            //     transition: all .25s;
            // }
            // img {
            //   width: 100%;
            //   height: 100%;
            // }
            // img:hover {
            //     opacity: 0.8;
            // }
        }
        // @media (max-width: 575px) {
        //     height: 49px;
        //     width: 49px;
        //     padding: 0;
        //     right: 0;
        //     a.tel {
        //         display: none;
        //     }
        //     a.callme {
        //         display: none;
        //     }
        //     a.whatsapp {
        //         top: 9px;
        //         right: 10px;
        //     }
        //     a.whatsapp {
        //         display: none;
        //     }
        // }
    }
    .search {
        // position: absolute;
        // top: 0;
        // left: 280px;
        // right: 360px;
        // height: 59px;
        // z-index: 3;
        // background-color: #FFF;
        // padding: 9px 0 10px 0;
        // max-width: 1000px;
        // .bginput {
        //     margin-right: 180px;
        //     input {
        //       height: 40px;
        //     }
        // }
        // a.mbutton {
        //     width: 150px;
        //     text-align: center;
        //     float: right;
        // }
        // @media (max-width: 1199px) {
        //    display: none;
        // }
    }
    .cal {
        // position: absolute;
        // top: 0;
        // right: 0;
        // width: 60px;
        // height: 100%;
        // border-left: 1px solid #999;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        // cursor: pointer;
        // @media (max-width: 575px) {
        //     display: none;
        // }
        // div.img {
        //     width: 25px;
        //     height: 25px;
        //     background: url('/assets/img/top/calc.png');
        // }
    }
}

.wrapper {
  height: 100vh;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: "toggleMenu header" "nav main";
  overflow: hidden;
  background: #999999;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas: "toggleMenu header" "main main";
  }
}
#toggleMenu {
  grid-area: toggleMenu;
  background: #EDEDED;
  display: flex;
  flex-direction: row;
  padding: 14px;
  flex-wrap: wrap;
  cursor: pointer;
  span {
    flex-basis: 33.33%;
    // background: red;
    flex-grow: 1;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -3px 0 0 -3px;
      width: 6px;
      height: 6px;
      background: #383838;
      border-radius: 50%;
    }
  }
}
header {
  grid-area: header;
  background: white;
  display: grid;
  grid-template-columns: 240px 1fr 300px 120px;
  .logo {
    background: white;
    img {
      height: 31px;
      margin: 15px 0 14px 25px;
    }
  }
  .search {
    background: white;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 150px;
    padding: 10px 0;
    grid-gap: 20px;
    input {
      border: 1px solid #E5E5E5;
      margin: 0;
      padding: 0 20px;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      font-family: 'Montserrat';
      font-size: 14px;
      outline: none;
      &::placeholder {
        color: #CCC;
      }
      &:-ms-input-placeholder {
        color: #CCC;
      }
      &::-ms-input-placeholder {
        color: #CCC;
      }
    }
    a {
      text-align: center;
    }
  }
  .phone {
    overflow: hidden;
    background: #CCC;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
    .line1 {
      background: red;
      flex-grow: 1;
      a.tel {
        font-family: 'MontserratBold';
        font-size: 18px;
        line-height: 24px;
        color: #000;
        text-decoration: none;
      }
    }
    .line2 {
      background: blue;
      flex-basis: 16px;
      a.callme {
        font-family: 'Montserrat';
        font-size: 14px;
        line-height: 16px;
        color: #2d70e4;
        text-decoration: none;
        border-bottom: 1px dashed #2d70e4b2;
      }
    }
  }
  .icons {
    display: grid;
    grid-template-columns: 60px 60px;
    grid-template-rows: 60px;
    grid-gap: 1px;
    background: #999999;
    .callall {
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .calc {
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
main {
  grid-area: main;
  background: white;
  overflow: auto;
}
nav {
  grid-area: nav;
  background: white;
  @media (max-width: 1200px) {
    display: none;
  }
}
</style>

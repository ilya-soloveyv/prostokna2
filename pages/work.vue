<template lang="pug">
  .work.ppage
    h1.work-title Как мы работаем
    .work-tabs
      ul.work-users
        li.person.active Если вы физлицо
        li.entity Если вы юрлицо
      .tabs-content.active
        .stages
          ul.stages__list
            li.stages__item.active(data-target='1') 01
              span.day День 1
            li.stages__item(data-target='2') 02
              span.day День 2
            li.stages__item(data-target='3') 03
              span.day День 3
            li.stages__item(data-target='4') 04
              span.day Заключения договора
            li.stages__item(data-target='5') 05
              span.day Проведение монтажных работ
            li.bg
        .all-wrap
          .days-content.active
            ul.steps
              li.steps__item.active Шаг 1
              li.steps__item Шаг 2
            .step-wrapp
              .step-content.active
                p.step__desc Вы отправляете проект по вашему объекту этими способами:
                ul.way__list
                  li.way__item
                    a.way__link(href="/calculation")
                      span.way__icon
                        img.sch(src="~assets/img/work/mouse.svg", alt="mouse")
                      p.way__text Через формы на сайте
                  li.way__item
                    a.way__link(href="#" data-toggle="modal" data-target="#zay_modal" data-class="zay_modal_black")
                      span.way__icon
                        img.sc(src="~assets/img/work/call.svg", alt="call")
                      p.way__text По телефону
                  li.way__item
                    a.way__link(href="mailto:prosto@prostokna.ru")
                      span.way__icon
                        img.sc(src="~assets/img/work/mail.svg", alt="mail")
                      p.way__text По email
                  li.way__item.last
                    a.way__link.last(href="#")
                      span.way__icon
                        img.sc(src="~assets/img/work/message.svg", alt="message")
                      p.way__text Через мессенджеры<br> What’s app, Viber, Telegram
                    ul.msn
                      li.msn__item
                        a.msn__link(href="https://api.whatsapp.com/send?phone=79779390290&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5", target="_blank")
                          .msn__wrap
                            img.msn__icon(src="~assets/img/work/whatsapp.svg", alt="whatsup")
                          span.msn__title WhatsApp
                      li.msn__item
                        a.msn__link(href="viber://add?number=79779390290", target="_blank")
                          .msn__wrap
                            img.msn__icon(src="~assets/img/work/viber.svg", alt="viber")
                          span.msn__title Viber
                      li.msn__item
                        a.msn__link(href="https://telegram.me/79779390290", target="_blank")
                          .msn__wrap
                            img.msn__icon(src="~assets/img/work/telegram.svg", alt="telegram")
                          span.msn__title Telegram
              .step-content.step-content_middle.bor-left
                p.step__desc С вами свяжется специалист розничного отдела для первичного обсуждения вашего проекта. На данном этапе уточняются текущие задачи, проверяется тех. задание, подготавливаются эскизы и предварительная смета по проекту.								
          .days-content
            ul.steps.steps_two
              li.steps__item.active Шаг 3
            .step-wrapp.step-wrapp_two
              .step-content.step-content_middle.active
                p.step__desc.tac После согласования цен и сроков, к вам на объект выезжает замерщик или техноглог в зависимости от текущей сложности.
          .days-content
            ul.steps.steps_two
              li.steps__item.active Шаг 4
            .step-wrapp.step-wrapp_two
              .step-content.step-content_middle.active
                p.step__desc.tac После получения замерных листов расчётно-сметный отдел произведёт подготовку эскизов и сметы в нескольких окончательных вариантах.
          .days-content
            ul.steps
              li.steps__item.active Шаг 5
              li.steps__item Шаг 6
              li.steps__item Шаг 7
            .step-wrapp
              .step-content.active
                p.step__desc С вами свяжется ваш личный менеджер для окончательного согласования проекта. Подписание договора вы сможете совместить с посещением оконного шоу-рума в центре Москвы. Также договор можно заключить полностью удалённо. На этом этапе формируется окончательная цена, срок исполнения, рабочий проект.
              .step-content.step-content_middle.bor-all
                p.step__desc Внесение оплаты/предоплаты по договору.		
              .step-content
                p.step__desc После запуска заказа в производство, происходит согласование с личным менеджером, удобной для вас даты доставки, а перед доставкой заблаговременно вы получите оповещение о времени прибытия.		
          .days-content
            ul.steps.steps_two
              li.steps__item.active Шаг 8
            .step-wrapp.step-wrapp_two
              .step-content.step-content_middle.active
                p.step__desc.tac Заблаговременное (минимум за 4-5 дней) согласование удобной даты и времени выполнения монтажных работ с представителем монтажного отдела. После завершения установки осуществляется приемка работ по Акту, далее вносится окончательная оплата по договору, если требуется.
      .tabs-content
        .stages
          ul.stages__list
            li.stages__item.active(data-target='1') 01
              span.day День 1
            li.stages__item(data-target='2') 02
              span.day День 2
            li.stages__item(data-target='3') 03
              span.day День 3
            li.stages__item(data-target='4') 04
              span.day Заключения договора
            li.stages__item(data-target='5') 05
              span.day Проведение монтажных работ
            li.bg
        .all-wrap
          .days-content.active
            ul.steps
              li.steps__item.active Шаг 1
              li.steps__item Шаг 2
              li.steps__item Шаг 3
            .step-wrapp
              .step-content.active
                p.step__desc Вы отправляете проект по вашему объекту этими способами:
                ul.way__list
                  li.way__item
                    a.way__link(href="/calculation")
                      span.way__icon
                        img.sch(src="~assets/img/work/mouse.svg", alt="mouse")
                      p.way__text Через формы на сайте
                  li.way__item
                    a.way__link(href="#" data-toggle="modal" data-target="#zay_modal" data-class="zay_modal_black")
                      span.way__icon
                        img.sc(src="~assets/img/work/call.svg", alt="call")
                      p.way__text По телефону
                  li.way__item
                    a.way__link(href="mailto:prosto@prostokna.ru")
                      span.way__icon
                        img.sc(src="~assets/img/work/mail.svg", alt="mail")
                      p.way__text По email
                  li.way__item.last
                    a.way__link.last(href="#")
                      span.way__icon
                        img.sc(src="~assets/img/work/message.svg", alt="message")
                      p.way__text Через мессенджеры<br> What’s app, Viber, Telegram
                    ul.msn
                      li.msn__item
                        a.msn__link(href="https://api.whatsapp.com/send?phone=79779390290&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5", target="_blank")
                          .msn__wrap
                            img.msn__icon(src="~assets/img/work/whatsapp.svg", alt="whatsup")
                          span.msn__title WhatsApp
                      li.msn__item
                        a.msn__link(href="viber://add?number=79779390290", target="_blank")
                          .msn__wrap
                            img.msn__icon(src="~assets/img/work/viber.svg", alt="viber")
                          span.msn__title Viber
                      li.msn__item
                        a.msn__link(href="https://telegram.me/79779390290", target="_blank")
                          .msn__wrap
                            img.msn__icon(src="~assets/img/work/telegram.svg", alt="telegram")
                          span.msn__title Telegram

              .step-content.step-content_middle.bor-all
                p.step__desc За вами закрепляется один из личных ведущих менеджеров корпоративного отдела для сопровождения имеющегося и ведения всех последующих проектов.
                p.step__desc На данном этапе уточняются:
                ul.todo__list
                  li.todo__item
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.679" height="12.222" viewBox="0 0 19.679 12.222">
                      <path id="Path_11513" data-name="Path 11513" d="M-5459.027-1225.745l7.947,8.155,11.018-11.156" transform="translate(5459.385 1229.098)" fill="none" stroke="#fff" stroke-width="1"/>
                    </svg>
                    p.todo__text текущие задачи;
                  li.todo__item
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.679" height="12.222" viewBox="0 0 19.679 12.222">
                      <path id="Path_11513" data-name="Path 11513" d="M-5459.027-1225.745l7.947,8.155,11.018-11.156" transform="translate(5459.385 1229.098)" fill="none" stroke="#fff" stroke-width="1"/>
                    </svg>
                    p.todo__text проверяется тех. задание;
                  li.todo__item
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.679" height="12.222" viewBox="0 0 19.679 12.222">
                      <path id="Path_11513" data-name="Path 11513" d="M-5459.027-1225.745l7.947,8.155,11.018-11.156" transform="translate(5459.385 1229.098)" fill="none" stroke="#fff" stroke-width="1"/>
                    </svg>
                    p.todo__text подготавливаются эскизы и предварительная смета по проекту.
              .step-content
                p.step__desc Вам будет отправлен пакет уставных документов для проверки и возможного дальнейшего занесения в реестр ваших поставщиков.
          .days-content
            ul.steps.steps_two
              li.steps__item.active Шаг 4
            .step-wrapp.step-wrapp_two
              .step-content.step-content_middle.active
                p.step__desc.tac После согласования цен и сроков, к вам на объект выезжает технолог или инженер-геодезист в зависимости от текущей сложности.
          .days-content
            ul.steps.steps_two
              li.steps__item.active Шаг 5
            .step-wrapp.step-wrapp_two
              .step-content.step-content_middle.active
                p.step__desc.tac После получения замерных листов, расчётно-сметный отдел произведёт подготовку эскизов и сметы в нескольких окончательных вариантах. На данном этапе начинается разработка монтажных узлов, подготовка исполнительной документации (КМ, КМД, ППР) при необходимости.
          .days-content
            ul.steps
              li.steps__item.active Шаг 6
              li.steps__item Шаг 7
              li.steps__item Шаг 8
            .step-wrapp
              .step-content.active
                p.step__desc До окончательного согласования проекта и перед заключением договора представителя вашей компании при необходимости запишут вас на посещение нашего производства для ознакомления с объемом мощностей, возможностей и уровнем качества.
              .step-content.step-content_middle.bor-all
                p.step__desc Подписание самого договора также можно совместить с посещением оконного шоу-рума в центре Москвы. Также договор можно заключить полностью удалённо с последующим обменом оригиналами через курьера. На этом этапе формируется окончательная цена, срок исполнения, рабочий проект.		
              .step-content
                p.step__desc Внесение оплаты/предоплаты по договору.		
          .days-content
            ul.steps
              li.steps__item.active Шаг 9
              li.steps__item Шаг 10
            .step-wrapp
              .step-content.active
                p.step__desc Представители монтажного отдела выходят на объект согласно заранее составленному, удобно для вас, графику проведения работ. В процессе проведения работ подписываются промежуточные Акты, в том числе Акты скрытых работ (при необходимости).
              .step-content.step-content_middle.bor-left
                p.step__desc Представитель нашего монтажного отдела осуществляет сдачу завершённых объёмов. Окончательная приёмка работ производится согласно Актам, составленным по формам КС-2, КС-3 и Акту сдачи-приёмки выполненных работ.
    a.btn-call(href="#" data-toggle="modal" data-target="#zay_modal" data-class="zay_modal_black")
      img(src="~assets/img/work/call.svg", alt="call")
</template>

<script>
import $ from 'jquery'
export default {
  mounted () {
    $('.work-users li').on('click', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.work-tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active')

      $('.bg').css('transform', 'translate(145%,-50%)')

      $('.stages__list .stages__item:first-child').addClass('active').siblings().removeClass('active')

      $('.all-wrap').find('.days-content:first').addClass('active').siblings().removeClass('active')

      if ($(window).width() <= '576') {
        $(this).removeClass('active').siblings().addClass('active').closest('div.work-tabs').find('div.tabs-content').addClass('active').eq($(this).index()).removeClass('active')
      }
    })

    $('.stages__list .stages__item').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active')
        .closest('div.tabs-content').find('div.days-content').removeClass('active').eq($(this).index()).addClass('active')

      var attr = $(this).attr('data-target')

      if (attr === 1) {
        $('.bg').css('transform', 'translate(145%,-50%)')
      }
      if (attr === 2) {
        $('.bg').css('transform', 'translate(341.25%,-50%)')
      }
      if (attr === 3) {
        $('.bg').css('transform', 'translate(537%,-50%)')
      }
      if (attr === 4) {
        $('.bg').css('transform', 'translate(733.75%,-50%)')
      }
      if (attr === 5) {
        $('.bg').css('transform', 'translate(930%,-50%)')
      }
    })
    $('.steps .steps__item').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active')
        .closest('div.days-content').find('div.step-content').removeClass('active').eq($(this).index()).addClass('active')
    })
    $('.way__link').on('click', function (e) {
      // e.preventDefault()
    })
    if ($(window).width() <= '992') {
      $('.tabs-content').swipe({
        swipeLeft: workLeftSwipe,
        swipeRight: workRightSwipe,
        threshold: 75
      })
    }
    function workLeftSwipe (e) {
      swipeGo('left')
    }
    function workRightSwipe (e) {
      swipeGo('right')
    }

    function swipeGo (swipe) {
      var dayActive = $('.work .stages .stages__list .stages__item.active')
      var dayActiveIndex = dayActive.index()
      var stepActive = $('.work .tabs-content.active .all-wrap .days-content').eq(dayActiveIndex).find('.steps .steps__item.active')
      var dayPrev = dayActive.prev('.stages__item')
      var dayNext = dayActive.next('.stages__item')
      var stepPrev = stepActive.prev()
      var stepNext = stepActive.next()
      if (swipe === 'left') {
        if (stepNext.length) {
          stepNext.click()
        } else if (dayNext.length) {
          dayNext.click()
        }
      } else if (swipe === 'right') {
        if (stepPrev.length) {
          stepPrev.click()
        } else if (dayPrev.length) {
          dayPrev.click()
        }
      }
    }

    $('.way__item.last').hover(
      function () {
        if ($('.way__link.last').hasClass('none') === false) {
          setTimeout(function () {
            $('.way__link.last').addClass('none')
          }, 10)
          setTimeout(function () {
            $('.msn').addClass('active')
          }, 250)
          $.each($('.msn__link'), function (i, el) {
            setTimeout(function () {
              $(el).addClass('active')
            }, 350 + (i * 100))
          })
        }
      },
      function () {
        if ($('.way__link.last').hasClass('none') === true) {
          $.each($('.msn__link'), function (i, el) {
            setTimeout(function () {
              $(el).removeClass('active')
            }, 200 + (i * 100))
          })
          setTimeout(function () {
            $('.msn').removeClass('active')
          }, 300)
          setTimeout(function () {
            $('.way__link.last').removeClass('none')
          }, 400)
        }
      })
  }
}
</script>

<style lang="scss">
$dark: rgba(#000, 0.74);



@keyframes soc_animation {
	0% {
		opacity: 1;
		visibility: visible;
		background: red;
	}
	100% {
		opacity: 0;
		visibility: hidden;
		background: blue;
	}
}

.work {
		font-family: 'Montserrat';
    background: $dark;
		overflow: hidden;
    height: 100%;
		@media screen and (max-width: 576px) {
			display: flex;
			flex-direction: column;
		}
		@media screen and (max-width: 359px) {
			justify-content: space-around;
		}
		p {
			margin: 0;
			padding: 0;
		}

		.tac {
			text-align: center;
		}
		&-title {
			font-family: 'MontserratSemiBold';
			color: #fff;
			text-align: center;
			font-size: 18px;
			text-transform: uppercase;
			margin-top: 4%;
			@media screen and (max-width: 992px) {
				font-size: 16px;
			}
			@media screen and (max-width: 576px) {
				font-size: 14px;
				margin-top: 8%;
			}
		}
		&-tabs {
			@media screen and (max-width: 576px) {
				height: 467px;
				margin-top: 3%;
			}
			@media screen and (max-width: 359px) {
				margin-top: 0;
			}
		}
		&-users {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 479px;
			margin: 0 auto;
      padding: 0;
      list-style: none;
			margin-top: 4%;
			height: 38px;
			background: #363636;
			border-radius: 100px;
			@media screen and (max-width: 576px) {
				width: 200px;
				margin-bottom: 8%;
			}		
			.person {
				position: relative;
				width: 50%;
				line-height: 38px;
				font-size: 14px;
				font-family: 'MontserratSemiBold';
				color: #fff;
				text-transform: uppercase;
				text-align: center;
				z-index: 1;
				cursor: pointer;
				@media screen and (max-width: 1200px) {
					font-size: 13px;
				}
				@media screen and (max-width: 576px) {
					font-size: 12px;
				}
				&:before {
					content: '';
					display: block;
					position: absolute;
					top: 0;
					left: 100%;
					width: 100%;
					height: 100%;
					background: #222;
					border-radius: 100px;
					transition: all 0.2s;
					z-index: -1;
					@media screen and (max-width: 576px) {
						display: none;
					}
				}
				&:after {
					@media screen and (max-width: 576px) {
						content: '';
						background: url('~assets/img/work/down-arrow1.png') no-repeat center top / cover;
						display: inline-block;
						margin-left: 20px;
						width: 11px;
						height: 9px;
					}					
				}	
				&.active:before {
					left: 0;
				}
				@media screen and (max-width: 576px) {
					display: none;
					width: 100%;
				}
				&.active {
					@media screen and (max-width: 576px) {
						display: block;
					}
				}
			}
			.entity {
				position: relative;
				width: 50%;
				line-height: 38px;
				font-size: 14px;
				font-family: 'MontserratSemiBold';
				color: #fff;
				text-transform: uppercase;
				text-align: center;
				z-index: 1;
				cursor: pointer;
				@media screen and (max-width: 1200px) {
					font-size: 13px;
				}
				@media screen and (max-width: 576px) {
					display: none;
					width: 100%;
					font-size: 12px;
				}
				&.active {
					@media screen and (max-width: 576px) {
						display: block;
					}
				}
				&:after {
					@media screen and (max-width: 576px) {
						content: '';
						background: url('~assets/img/work/down-arrow1.png') no-repeat center top / cover;
						display: inline-block;
						margin-left: 20px;
						width: 11px;
						height: 9px;					
					}					
				}
			}
			
			
		}
		.btn-call {
			position: fixed;
			right: 10vw;
			bottom: 10vh;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 40px;
			height: 40px;
			border-radius: 9px;
			box-shadow: 0 0 0 3px #424242,
									0 0 0 4px #fff;
			transition: box-shadow 0.3s;		
			background: rgba(155,71,229,1);
			background: -moz-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
			background: -webkit-gradient(left top, right top, color-stop(0%, rgba(155,71,229,1)), color-stop(100%, rgba(228,90,233,1)));
			background: -webkit-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
			background: -o-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
			background: -ms-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
			background: linear-gradient(to right, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9b47e5', endColorstr='#e45ae9', GradientType=1 );
			&:hover {
				box-shadow: 0 0 0 4px #424242,
										0 0 0 6px #fff;
				img {
					transform: scale(1.2);
				}
			}
			img {
				width: 60%;
				transition: transform .3s;
			}
			@media screen and (max-width: 576px) {
				display: none;
			}
		}
}

.tabs-content {
	display: none;
	color: white;	
	&.active {
		display: block;
		@media screen and (max-width: 576px) {
			display: flex;
			flex-direction: column-reverse;
			justify-content: space-between;
			height: 390px;
		}
	}
	// @media screen and (max-width: 576px) {
	// 	height: 377px;
	// }
	.stages {
		width: 90%;
		height: 39px;
		max-width: 1352px;
		margin: 0 auto;
		background: #363636;
		border-radius: 100px;
		margin-top: 41px;
		margin-bottom: 5%;
		font-size: 14px;
		font-family: 'MontserratSemiBold';	
		@media screen and (max-width: 1200px) {
			font-size: 13px;
		}
		@media screen and (max-width: 992px) {
			font-size: 12px;
		}
		@media screen and (max-width: 576px) {
			margin-top: 0;
		}
		&__list {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100%;
			padding: 0px 12%;
      margin: 0;
      padding: 0;
      list-style: none;
		}
		&__item {
			position: relative;
			z-index: 1;
			width: 12.5%;
			text-align: center;
			cursor: pointer;
			line-height: 39px;	
			.day {
				position: absolute;
				width: 200%;
				top: 115%;
				left: 50%;
				transform: translateX(-50%);
				text-transform: uppercase;
				font-size: 10px;
				transition: color .2s;
				@media screen and (max-width: 1400px) {
					font-size: 9px;
				}
				@media screen and (max-width: 1200px) {
					display: none;
				}
			}	
			&.active {
				.day {
					color: #777;
				}
			}	
		}
		.bg {
			display: block;
			position: absolute;
			top: 50%;
			left: 0;
			transform: translate(145%, -50%);
			width: 8.5%;
			height: 100%;
			border-radius: 100px;			
			transition: all .3s;
			background: rgba(155,71,229,1);
			background: -moz-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
			background: -webkit-gradient(left top, right top, color-stop(0%, rgba(155,71,229,1)), color-stop(100%, rgba(228,90,233,1)));
			background: -webkit-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
			background: -o-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
			background: -ms-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
			background: linear-gradient(to right, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9b47e5', endColorstr='#e45ae9', GradientType=1 );
			@media screen and (max-width: 576px) {
				height: 130%;	
			}
		}
	}
	.all-wrap {
		width: 90%;
		max-width: 1352px;
		margin: 0 auto;
		.days-content {
			display: none;
			&.active {
				display: block;				
				animation: op 0.5s;
			}
			.steps {
				display: flex;
				align-items: center;
				margin: 0 0 53px 0;
        padding: 0;
        list-style: none;
				@media screen and (max-width: 992px) {
					margin: 0 auto;
					margin-bottom: 4%;
					justify-content: space-around;
					width: 360px;					
				}
				@media screen and (max-width: 576px) {
					width: 90%;					
				}
				&_two {
					justify-content: center;
				}			
				&__item {
					width: 33.3%;
					text-align: center;
					text-transform: uppercase;
					font-size: 14px;
					@media screen and (max-width: 992px) {
						opacity: .4;
						width: auto;
						font-size: 13px;
					}
					@media screen and (max-width: 576px) {
						
						font-size: 12px;
					}
					&.active {
						opacity: 1;
					}				
				}
			}			
			.step-wrapp {
				display: flex;				
				@media screen and (max-width: 992px) {
					justify-content: center;
				}
				&_two {
					justify-content: center;									
				}			
			}
			.step-content {
				width: 33.3%;
				padding-right: 4%;
				@media screen and (max-width: 992px) {
					display: none;
					width: auto;
					padding-right: 0;
				}	
				&.active {
					@media screen and (max-width: 992px) {
						display: block;
						animation: op 0.3s;
					}					
				}			
				&_middle {
					padding: 0px 4%;
					@media screen and (max-width: 1200px) {
						padding: 0px 3%;
					}					
				}
				&.bor-all {
					border-right: 1px solid rgba(#fff, 0.11);
					border-left: 1px solid rgba(#fff, 0.11);
					@media screen and (max-width: 992px) {
						border: none;
					}
				}
				&.bor-left {
					border-left: 1px solid rgba(#fff, 0.11);
					@media screen and (max-width: 992px) {
						border: none;
					}
				}
				&:nth-child(3) {
					padding-left: 4%;
					padding-right: 3%;
				}
				.step__desc {
					font-size: 14px;
					font-family: 'Montserrat';
					margin-bottom: 26px;
					@media screen and (max-width: 1200px) {
						font-size: 13px;
					}
					@media screen and (max-width: 992px) {
						width: 360px;
					}
					@media screen and (max-width: 576px) {
						width: 90%;
						margin: 0 auto;
						margin-bottom: 7%;
						font-size: 12px;					
					}
				}
				.way__list {
          padding: 0;
          margin: 0 auto;
          list-style: none;
					@media screen and (max-width: 576px) {
						width: 280px;
					}					
					.way__item {
						position: relative;
						margin-bottom: 25px;
						@media screen and (max-width: 576px) {
							margin-bottom: 15px;				
						}
						&:last-child {
							margin-bottom: 0;
							.way__link {							
								&.none{
									opacity: 0;
									visibility: hidden;
								}
								&:hover {
									// animation: soc_animation .25s ease-in-out forwards;
								}
							}
						}
						.way__link {
							display: flex;							
							align-items: center;
							width: 80%;
							text-decoration: none;
							color: #fff;
							background: transparent;
							transition: .3s;
							font-size: 14px;
							@media screen and (max-width: 1460px) {
								width: 95%;
							}
							@media screen and (max-width: 1200px) {
								font-size: 13px;
							}
							@media screen and (max-width: 576px) {
								font-size: 12px;
							}
							&:hover {
								background-clip: content-box;
								border-radius: 10px;
								box-shadow: 0 0 0 3px #424242,
														0 0 0 5px #fff;
								background: rgba(155,71,229,1);
								background: -moz-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
								background: -webkit-gradient(left top, right top, color-stop(0%, rgba(155,71,229,1)), color-stop(100%, rgba(228,90,233,1)));
								background: -webkit-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
								background: -o-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
								background: -ms-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
								background: linear-gradient(to right, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
								filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9b47e5', endColorstr='#e45ae9', GradientType=1 );
								.way__icon {
									border: none;
									background: transparent;
									.sch {
										transform: scale(1.3);
									}
									.sc {
										transform: scale(1.5);
									}								
								}
								.way__text {
									font-size: 15px;
									@media screen and (max-width: 1200px) {
										font-size: 14px;
									}
									@media screen and (max-width: 576px) {
										font-size: 13px;
									}
								}
							}						
							.way__icon {
								display: flex;
								justify-content: center;
								align-items: center;
								flex-shrink: 0;
								width: 42px;
								height: 42px;
								padding: 4px;
								background: #595959;
								background-clip: content-box;
								border: 1px solid #595959;
								border-radius: 10px;
								margin-right: 35px;
								transition: border, background-color .3s;								
								@media screen and (max-width: 576px) {
									width: 37px;
									height: 37px;
									padding: 2px;
									margin-right: 15px;					
								}						
							}
							.way__text {								
								font-family: 'Montserrat';
								transition: text-transform .3s;
							}
						}
						.msn {
							position: absolute;
							opacity: 0;
							top: 0;
							left: 0;
							z-index: -1;
							width: 100%;
							height: 100%;
							display: flex;
							justify-content: space-around;
							align-items: center;
							&.active {
								z-index: 1;
								opacity: 1;
							}
							&__item {
								width: 42px;
								height: 42px;
							}
							&__link {
								display: none;
								justify-content: center;
								align-items: center;
								flex-shrink: 0;
								width: 42px;
								height: 42px;
								padding: 4px;
								background: #595959;
								background-clip: content-box;
								border: 1px solid #595959;
								border-radius: 10px;
								margin-right: 35px;
								transition: box-shadow .3s;
								background: rgba(155,71,229,1);
								background: -moz-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
								background: -webkit-gradient(left top, right top, color-stop(0%, rgba(155,71,229,1)), color-stop(100%, rgba(228,90,233,1)));
								background: -webkit-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
								background: -o-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
								background: -ms-linear-gradient(left, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
								background: linear-gradient(to right, rgba(155,71,229,1) 0%, rgba(228,90,233,1) 100%);
								filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9b47e5', endColorstr='#e45ae9', GradientType=1 );
								box-shadow: 0 0 0 3px #424242, 0 0 0 4px #fff;
								position: relative;
								&.active {
									display: block;
									animation: op .3s;
								}
								.msn__wrap {
									display: flex;
									align-items: center;
									justify-content: center;
									height: 30px;
									img {
										width: 20px;
										height: 20px;
									}
								}
								.msn__title {
									position: absolute;
									left: 50%;
									bottom: -24px;
									transform: translate(-50%, 0);
									font-size: 12px;
									color: white;
									text-decoration: none;
								}
								&:hover {																	
									box-shadow: 0 0 0 2px #424242,
															0 0 0 4px #fff;
								}
							}
						}
					}
				}
				.todo__item {
					display: flex;
					align-items: flex-start;
					margin-bottom: 29px;
					@media screen and (max-width: 576px) {
						margin-bottom: 20px;
					}
					&:last-child {
						margin-bottom: 0;
						@media screen and (max-width: 576px) {
							margin-bottom: 0;
						}
					}
					&:hover {
						svg {
							transform: scale(1.2);									
							path {
								stroke: rgba(228,90,233,1);								
							}
						}
					}	
					svg {
						min-width: 20px;
						min-height: 15px;
						margin-right: 24px;
						transition: transform 0.3s;
						path {
							transition: stroke 0.3s;
						}				
					}				
					.todo__text {
						font-size: 14px;
						font-family: 'Montserrat';
						@media screen and (max-width: 1200px) {
							font-size: 13px;
						}
						@media screen and (max-width: 576px) {
							font-size: 12px;
						}
					}
				}
			}		
			
		}		
	}
}
@keyframes op {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>


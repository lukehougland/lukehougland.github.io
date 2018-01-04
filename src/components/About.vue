<template>
  <div class="a" id="contact">
    <div class="a__container">
      <div class="a__about">
        <div class="a__about__face">
          <img src="../assets/lukeHead.png"/>
        </div>
        <div class="a__about__info">
          <h2 class="a__about__info__name">Luke Hougland</h2>
          <p class="a__about__info__title">Loan Officer NMLS #1600704</p>
          <div class="a__about__info__contact">
            <a href="tel:+19134490687">(913) 449-0687</a>
            <a href="mailto:lhougland@myamcap.com">lhougland@myamcap.com</a>
          </div>
          <div class="a__about__info__contact">
            <p class="a__about__info__contact__address">AmCap Mortgage, Ltd.</p>
            <p class="a__about__info__contact__address">7450 W 130th St Suite 200</p>
            <p class="a__about__info__contact__address">Overland Park, KS 66213</p>
          </div>
          <p class="a__about__info__copy">Rather apply over the phone or in person? Contact me to schedule a phone call or a face to face meeting — I’ll buy the coffee!</p>
        </div>
      </div>
      <div class="a__links">
        <a class="a__links__regular" href="https://www.myamcap.com/lukehougland/">Apply Online</a>
        <a class="a__links__ghost" href="https://itunes.apple.com/us/app/amcap-loan-alert/id833057336?mt=8">Download the app</a>
      </div>
      <ul class="a__social">
        <li class="a__social__item"><a href="https://www.facebook.com/lhougland"><img src="../assets/facebook.svg"/></a></li>
        <li class="a__social__item"><a href="https://www.instagram.com/Luke.houg.land/"><img src="../assets/instagram.svg"/></a></li>
        <li class="a__social__item"><a href="https://twitter.com/wuke20"><img src="../assets/twitter.svg"/></a></li>
      </ul>
    </div>
  </div>
</template>


<script>
import translations from '@/config/translations';

export default {
  data() {
    return {
      translations,
    };
  },
};
</script>

<style lang="scss">
@import '../sass/global.scss';

.a{
  &__container{
    max-width: 680px;
    margin: 0 auto;
  }
  &__about{
    display: flex;
    flex-direction: column;
    text-align: center;
    @include breakpoint('phone'){
      flex-direction: row;
      text-align: left;
    }
    &__face{
      @include breakpoint('phone'){
        margin-right: 3rem;
      }
      img{
        max-width: 200px;
      }
    }
    &__info{
      color: $dark-grey;
      &__name{
        font-family: $lato;
        font-weight: 600;
        font-size: 1.5rem;
        margin: 0 0 0.5rem 0;
      }
      &__title{
        font-family: $lato;
        font-weight: 600;
        font-size: 1rem;
        margin: 0 0 1rem 0;
      }
      &__contact{
        a{
          color: $dark-grey;
          margin: 1rem 1rem 1rem 0;
          transition: all 0.25s ease-in-out;
          &:link, &:visited, &:hover, &:active{
            font-family: $lato;
            border-bottom:thin dashed $dark-grey;
            padding-bottom:0.5rem;
            text-decoration: none;
          }
          &:hover{
            color: $medium-purple;
            border-bottom:thin dashed $medium-purple;
          }
        }
        &__address{
          &:first-child{
            margin-top: 2rem;
          }
          font-family: $lato;
          color: $dark-grey;
          font-size: 0.9rem;
          margin: 0;
        }
      }
      &__copy{
        font-family: $lato;
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 2rem;
        @include breakpoint('phone'){
          margin: 2rem 0;
        }
      }
    }
  }
  &__links{
    display: flex;
    max-width: 450px;
    margin: 2rem auto;
    flex-direction: column;
    @include breakpoint('phone'){
      flex-direction: row;
    }
    a{
      &:link, &:visited, &:hover, &:active{
        display: block;
        outline: 0;
        text-decoration: none;
        padding: 1rem 2rem;
        border-radius: 50px;
        text-align: center;
        font-weight: 700;
        font-family: $montserrat;
        font-size: 1rem;
        transition: all 0.25s ease-in-out;
      }
      margin: 0.5rem auto;
      @include breakpoint('phone'){
        margin: 0 auto;
      }
    }
    &__regular{
      border: solid 2px $purple;
      background: darken($light-purple, 5%);
      color: $purple;
      &:hover{
        background: darken($light-purple, 15%);
      }
    }
    &__ghost{
      border: solid 2px $purple;
      background: white;
      color: $purple;
      &:hover{
        background: darken($light-purple, 10%);
      }
    }
  }
  &__social{
    display: flex;
    padding: 0;
    justify-content: center;
    &__item{
      list-style-type: none;
      margin: 0.5rem;
      img{
        height: 40px;
        width: 40px;
      }
    }
  }
}

</style>

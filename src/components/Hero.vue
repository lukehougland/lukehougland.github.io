<template>
  <div>
    <div class="h__bg"></div>
    <h2 class="h__name">{{translations.hero.name}}</h2>
    <a class="h__logo" href="https://www.myamcap.com/">
      <img src="../assets/amcapLogo.png"/>
    </a>
    <section class="h">
      <div class="h__heading-container">
        <h1 class="h__heading">{{translations.hero.heading}}</h1>
        <a class="h__cta" v-scroll-to="'#contact'">{{translations.hero.cta}}</a>
      </div>
    </section>
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

.h{
  &__logo{
    position: absolute;
    display: block;
    height: 86.625px;
    width: 109.6875px;
    top: 2rem;
    left: 2rem;
    outline: none;
    border: none;
    img{
      height: auto;
      width: 100%;
    }
  }
  &__name{
    font-family: $lato;
    font-weight: 600;
    color: $dark-grey;
    text-align: right;
    position: absolute;
    top: 3rem;
    right: 2rem;
    font-size: 1rem;
  }
  &__bg{
    min-height: 600px;
    background: url('../assets/hero.svg') no-repeat;
    background-size: cover;
    background-position: 50% 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: -1;
    opacity: 0.7;
  }
  &__heading{
    text-align: center;
    font-size: 2rem;
    max-width: 720px;
    color: $dark-grey;
    font-family: $montserrat;
    font-weight: 500;
    margin: 10rem auto 2rem auto;
    @include breakpoint('tablet'){
      margin: 10rem auto 4rem auto;
    }
    &-container{
      min-height: 420px;
      margin: 1rem 0.25rem;
      @include breakpoint('phone'){
        margin: 1rem;
      }
    }
  }
  &__cta{
    display: block;
    max-width: 280px;
    outline: 0;
    border: solid 2px $purple;
    background: white;
    border-radius: 50px;
    text-align: center;
    margin: 0 auto;
    font-weight: 700;
    font-family: $montserrat;
    color: $purple;
    font-size: 1rem;
    transition: all 0.25s ease-in-out;
    padding: 1rem 1rem;
    &:link, &:active, &:hover, &:visited{
      outline: none;
      text-decoration: none;
    }
    &:hover{
      background: $purple;
      border: solid 2px darken($purple, 10%);
      color: white;
      cursor: pointer;
    }
  }
}

</style>

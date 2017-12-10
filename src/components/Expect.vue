<template>
  <div class="e">
    <h2 class="e__heading">{{translations.expect.heading}}</h2>
    <swiper class="e__slide-container" :options="swiperOption">
      <swiper-slide class="e__slide" v-for="slide in translations.expect.slides" :key="slide.heading">
        <div class="e__slide__inner">
          <h2 class="e__slide__heading">{{slide.heading}}</h2>
          <p class="e__slide__paragraph">{{slide.copy}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import translations from '@/config/translations';

// require styles
import '../../node_modules/swiper/dist/css/swiper.css';

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      translations,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 32,
        freeMode: true,
        breakpoints: {
          680: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import '../sass/global.scss';

.e{
  margin: 4rem 0;
  &__heading{
    font-size: 1.25rem;
    font-family: $montserrat;
    font-weight: 500;
    color: $purple;
    padding: 0 0 0 3rem;;
  }
  &__slide{
    background: white;
    box-shadow: $box-shadow;
    text-align: left;
    height: auto;
    &__inner{
      padding: 2rem;
    }
    &__heading{
      font-family: $montserrat;
      font-weight: 500;
      margin-bottom: 2rem;
    }
    &__paragraph{
      font-family: $lato;
      font-weight: 400;
      line-height: 1.75rem;
    }
    &-container{
      padding: 2rem;
      width: calc(100% - 4rem);
      display: flex;

    }
  }
}
// Swiper overrides
.swiper-pagination-bullet{
  background: $purple;
}
.swiper-pagination{
  bottom: 0 !important;
}
</style>

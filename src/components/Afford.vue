<template>
  <div class="a">
    <div class="a__calculate">
      <h2 class="a__calculate__heading">{{translations.afford.heading}}</h2>
      <div class="a__calculate__number-container">
        <div class="a__calculate__number">
          <p class="a__calculate__number__title">{{translations.afford.mortgageAmount}}</p>
          <div class="a__calculate__number__value-container">$<input class="a__calculate__number__value" v-model="mortgageAmount"></div>
        </div>
        <div class="a__calculate__number">
          <div class="a__calculate__number">
            <p class="a__calculate__number__title">{{translations.afford.interestRate}}</p>
            <div class="a__calculate__number__value-container"><input class="a__calculate__number__value" v-model="mortgageInterest"></div>
          </div>
        </div>
        <div class="a__calculate__number">
          <div class="a__calculate__number">
            <p class="a__calculate__number__title">{{translations.afford.mortgagePeriod}}</p>
            <div class="a__calculate__number__value-container"><input class="a__calculate__number__value" v-model="mortgagePeriod"></div>
          </div>
        </div>
      </div>
      <p class="a__calculate__disclaimer">*This mortgage calculator does not guarantee any loan term. Get an official loan estimate to qualify for terms/rates.</p>

    </div>
    <div class="a__result">
      <div class="a__result__payment">
        <p class="a__result__payment__description">{{translations.afford.monthlyPayments}}</p>
        <p class="a__result__payment__value">${{calculatedMonthlyPayments}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import translations from '@/config/translations';

const mortgageCalculate = require('mortgage-calculate');

export default {
  data() {
    return {
      translations,
      mortgageAmount: translations.afford.defaultMortgageAmount,
      mortgageInterest: translations.afford.defaultInterestRate,
      mortgagePeriod: translations.afford.defaultMortgagePeriod,
    };
  },
  computed: {
    calculatedMonthlyPayments() {
      return mortgageCalculate({
        loanAmount: this.mortgageAmount,
        APR: this.mortgageInterest,
        termYears: this.mortgagePeriod,
      }).monthlyPayment.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    calculatedTotalCost() {
      return mortgageCalculate({
        loanAmount: this.mortgageAmount,
        APR: this.mortgageInterest,
        termYears: this.mortgagePeriod,
      }).totalCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>

<style lang="scss">
@import '../sass/global.scss';

.a{
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  @include breakpoint('desktop'){
    flex-direction: row;
  }
  &__calculate{
    padding: 2rem;
    flex: 1 0 calc(70% - 4rem);
    background: $light-purple;
    &__disclaimer{
      font-family: $lato;
      padding: 2rem;
      max-width: 400px;
      margin: 0 auto;
      text-align: center;
      @include breakpoint('phone'){
        max-width: 100%;
        text-align: left;
        padding: 0;
        margin: 0;
      }
    }
    &__heading{
      font-size: 1.25rem;
      font-family: $montserrat;
      font-weight: 500;
      color: $dark-grey;
      text-align: center;
      @include breakpoint('tablet'){
        text-align: left;
      }
    }
    &__number-container{
      display: flex;
      margin: 2rem 0;
      flex-direction: column;
      align-items: center;
      @include breakpoint('tablet'){
        flex-direction: row;
        align-items: flex-start;
      }
      @include breakpoint('desktop'){
        margin: 4rem 0 6rem 0;
      }
    }
    &__number{
      flex: 1 0 auto;
      &__title{
        font-family: $lato;
        font-weight: 600;
        font-size: 0.9rem;
        color: $dark-grey;
      }
      &__value{
        font-family: $montserrat;
        color: $dark-grey;
        font-size: 16px;
        background: transparent;
        border:none;
        outline:none;
        margin: 1rem 0;
        @include breakpoint('phone'){
          font-size: 2rem;
        }
        @include breakpoint('tablet'){
          max-width: 160px;
        }
        &-container{
          font-family: $montserrat;
          color: $dark-grey;
          font-size: 16px;
          display: flex;
          border-bottom:thin dashed $dark-grey;
          padding-bottom:0;
          align-items: center;
          @include breakpoint('phone'){
            font-size: 2rem;
          }
          @include breakpoint('tablet'){
            margin: 0 0 1rem 0.5rem;
            max-width: 160px;
          }
        }
      }
    }
  }
  &__result{
    padding: 2rem;
    flex: 1 0 calc(30% - 4rem);
    background: $medium-purple;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    text-align: center;
    @include breakpoint('desktop'){
      text-align: right;
    }
    &__payment{
      margin: 1rem;
      @include breakpoint('desktop'){
        margin: 0 2rem 0 0;
      }
      &__description{
        font-family: $lato;
        font-weight: 400;
        font-size: 1rem;
        margin: 0 0 0.5rem 0;
      }
      &__value{
        margin: 0;
        font-family: $montserrat;
        font-weight: 700;
        font-size: 2rem;
      }
    }
  }
}

</style>

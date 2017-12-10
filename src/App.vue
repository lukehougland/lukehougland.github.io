<template>
  <div id="app">
    <Hero/>
    <Expect/>
    <Afford/>
    <About/>
  </div>
</template>


<script>
import Hero from '@/components/Hero';
import Expect from '@/components/Expect';
import Afford from '@/components/Afford';
import About from '@/components/About';


export default {
  name: 'app',
  components: {
    Hero,
    Expect,
    Afford,
    About,
  },
};
</script>

<style lang="scss">
body{
  margin: 0 auto;
}
</style>

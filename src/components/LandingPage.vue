<template>
  <banner-component></banner-component>
</template>
<script>
import BannerComponent from '@/components/LandingPage/Banners.vue';

export default {
  name: 'LandingPage',
  props: {
    msg: String,
  },
  components: {
    BannerComponent,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

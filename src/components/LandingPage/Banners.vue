<template>
  <!-- ======= Banner Section ======= -->
  <section id="index" class="vh-90 d-flex justify-content-center pastelcolor pt-10vh">
    <div class="m-0 text-center d-flex justify-content-center">
      <img src="../../assets/img/cake.svg" alt="logo" class="w-100" />
    </div>
    <div class="m-0 text-center d-flex flex-column justify-content-center">
      <p class="blue-text banner-subtext">Taste our flavors</p>
      <h2 class="pink-text banner-text">Baked</h2>
      <h2 class="pink-text banner-text">with love!</h2>
      <p class="blue-text banner-subtext">At pastelPalette</p>
      <a href="index.html#stepper-cake" class="justify-self-center mx-auto btn-banner">
        Diseña tu pastel</a
      >

      <a href="index.html#stepper-cake" class="justify-self-center mx-auto btn-banner"> |</a>

      <a href="index.html#stepper-cake" class="justify-self-center mx-auto btn-banner"> |</a>

      <a href="index.html#stepper-cake" class="justify-self-center mx-auto btn-banner"> v</a>
    </div>
  </section>
  <!-- ======= End Banner Section ======= -->
</template>

<script>
export default {
  name: 'Banner',
  props: {
    src: {
      type: String,
      required: true,
      default: 'https://images.freeimages.com/images/large-previews/172/pastel-clouds-1311657.jpg',
    },
    alt: {
      type: String,
      required: true,
      default: 'banner',
    },
  },
};
</script>

<style scoped>
.vh-90 {
  height: 100%;
  min-height: 100vh;
}

.blue-text {
  color: #5d69ba;
}

.pink-text {
  color: #fd6895;
}

.red-text {
  color: #e8473f;
  font-size: 3.5em;
}

.pastelcolor {
  background-color: #fff7e5;
}

.banner-text {
  font-size: 5.5rem;
}

.banner-subtext {
  font-size: 3.5rem;
}

.header {
  min-height: 5vh;
  width: 100%;
  position: fixed;
  z-index: 2;
  background-repeat: repeat-x;
  background-position: bottom;
}

.btn-banner {
  width: 14em;
}
</style>

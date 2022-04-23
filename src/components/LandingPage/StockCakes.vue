<template>
  <!-- ======= End Stepper-cake Section ======= -->
  <div
    id="stock-cakes"
    class="spacer"
  />
  <!-- ======= End Stock-cakes Section ======= -->
  <section
    class="
      container
      pasteles
      my-0
      pt-0
      pb-4
      d-flex
      flex-wrap
      justify-content-center
    "
  >
    <h1 class="text-center red-text text-center">
      Can't choose? Try a stock cake!
    </h1>
    <!-- Slider main container -->
    <div
      class="container"
      style="background-color: none"
    >
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :modules="modules"
        navigation
        :pagination="{
          clickable: true,
          dynamicBullets: true,
          el: '.swiper-pagination',
          type: 'bullets',
        }"
        class="swiper mySwiper"
      >
        <swiper-slide
          v-for="(slide, index) in stockcakes"
          :key="index"
        >
          <div class="row">
            <div class="col-6">
              <img
                class="card-img-top"
                :src="slide.img"
                alt="Card image cap"
              >
            </div>
            <div class="col-6 d-flex flex-column align-items-start">
              <h1 class="text-start">
                {{ slide.title }}
              </h1>
              <h1 class="text-start red-text">
                {{ slide.subtitle }}
              </h1>
              <p class="text-start">
                {{ slide.description }}
              </p>
              <a
                href="#contact"
                class="w-50 btn btn-outline-primary mb-3"
              >
                I want this!
              </a>
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th>Shape</th>
                    <th>Measures</th>
                    <th>Persons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(info, index2) in slide.table"
                    :key="index2"
                  >
                    <td>{{ info.shape }}</td>
                    <td>{{ info.measures }}</td>
                    <td>{{ info.persons }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <!-- ======= End Stock-cakes Section ======= -->
</template>

<script>
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
// eslint-disable-next-line no-unused-vars
import { Navigation, Pagination, Virtual } from "swiper";
// Import Swiper styles
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Virtual],
    };
  },
  data() {
    return {
     
    };
  },
  computed:{
    stockcakes(){
      return  this.$store.getters.getstockcakes;
    }
  }
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background-color: transparent;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: flex;
  width: 100%;
  min-height: 100%;
  object-fit: cover;
}

.swiper {
  height: auto;
  padding-bottom: 40px;
}
</style>
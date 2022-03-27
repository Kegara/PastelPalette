<template>
  <!-- ======= Stepper-cake Section ======= -->
  <div id="stepper-cake" class="spacer" />
  <section class="container justify-content-center pastelcolor pt-10vh">
    <h1 class="text-center red-text">Make your cake as you want!</h1>
    <!-- Stepers Wrapper -->
    <ul class="stepper stepper-horizontal d-flex justify-content-between">
      <!-- First Step -->
      <li class="stepper-tabs">
        <button
          id=""
          :class="[
            currentStep == 1 ? 'active' : 'disabled',
            currentStep > 1 ? 'completed' : '',
          ]"
          @click="changeStep(1)"
          title="Step 1"
        >
          1
        </button>
      </li>
      <!-- Second Step -->
      <li class="stepper-tabs">
        <button
          id=""
          :class="[
            currentStep == 2 ? 'active' : 'disabled',
            currentStep > 2 ? 'completed' : '',
          ]"
          @click="changeStep(2)"
          title="Step 2"
        >
          2
        </button>
      </li>
      <!-- Third Step -->
      <li class="stepper-tabs">
        <button
          id=""
          :class="[
            currentStep == 3 ? 'active' : 'disabled',
            currentStep > 3 ? 'completed' : '',
          ]"
          @click="changeStep(3)"
          title="Step 3"
        >
          3
        </button>
      </li>
    </ul>
    <!-- /.Stepers Wrapper -->
    <div :class="[currentStep != 1 ? 'd-none' : '', 'step']">
      <h2 class="text-center">Step 1</h2>
      <p class="text-center">Choose your flavor</p>
      <div class="row justify-content-center">
        <div v-for="(cake, index) in cakes" :key="index" class="col-md-4 mb-2">
          <div class="card" :title="cake.name">
            <input
              :id="'flavor' + index"
              type="checkbox"
              name="decoraciones"
              class="decoration"
            />
            <label :for="'flavor' + index" class="text-center d-flex">
              <div class="centered-img">{{ cakePrice(cake.price) }}</div>
              <img
                class="card-img-top"
                alt="Card image cap"
                :src="cake.image"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div :class="[currentStep != 2 ? 'd-none' : '', 'step']">
      <h2 class="text-center">Step 2</h2>
      <p class="text-center">Choose your topping</p>
      <div class="row text-center justify-content-center">
        <div
          v-for="(topping, index) in toppings"
          :key="index"
          class="col-md-4 mb-2"
        >
          <div class="card" :title="topping.name">
            <input
              :id="'topping' + index"
              type="checkbox"
              name="decoraciones"
              class="decoration"
            />
            <label :for="'topping' + index">
              <div class="centered-img">{{ cakePrice(topping.price) }}</div>
              <img
                class="card-img-top"
                alt="Card image cap"
                :src="topping.image"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div :class="[currentStep != 3 ? 'd-none' : '', 'step']">
      <h2 class="text-center">Step 3</h2>
      <full-contact-form />
    </div>
    <div
      :class="[
        'd-flex ',
        currentStep > 1 ? 'justify-content-between' : 'justify-content-end',
      ]"
    >
      <button
        v-if="currentStep > 1"
        class="btn-outline-primary"
        :title="'Step' + (currentStep - 1)"
        @click="currentStep--"
      >
        Back
      </button>
      <button
        v-if="currentStep < 3"
        class="btn-outline-primary"
        :title="'Step' + (currentStep + 1)"
        @click="currentStep++"
      >
        Next
      </button>
    </div>
  </section>
  <!-- ======= End Stepper-cake Section ======= -->
</template>

<script>
import fullContactForm from "../contactForms/fullContactForm.vue";
export default {
  components: { fullContactForm },
  data() {
    return {
      currentStep: 1,
      cakes: [
        {
          id: 1,
          name: "birthday",
          price: "1.99",
          image: require("@/assets/img/pasteles/birthday.svg"),
        },
        {
          id: 2,
          name: "carrot",
          price: "2.99",
          image: require("@/assets/img/pasteles/carrot.svg"),
        },
        {
          id: 3,
          name: "cherry",
          price: "3.99",
          image: require("@/assets/img/pasteles/cherry.svg"),
        },
        {
          id: 4,
          name: "chocolate",
          price: "4.99",
          image: require("@/assets/img/pasteles/chocolate.svg"),
        },
        {
          id: 5,
          name: "sanvalentin",
          price: "5.99",
          image: require("@/assets/img/pasteles/sanvalentin.svg"),
        },
        {
          id: 6,
          name: "vainilla",
          price: "6.99",
          image: require("@/assets/img/pasteles/vainilla.svg"),
        },
      ],
      toppings: [
        {
          id: 1,
          name: "Candle",
          price: "1.99",
          image: require("@/assets/img/decoraciones/pastel_decoration.svg"),
        },
        {
          id: 2,
          name: "Cherries",
          price: "2.99",
          image: require("@/assets/img/decoraciones/pastel_decoration1.svg"),
        },
        {
          id: 3,
          name: "Fruits",
          price: "3.99",
          image: require("@/assets/img/decoraciones/pastel_decoration2.svg"),
        },
        {
          id: 4,
          name: "Fresh Fruits",
          price: "4.99",
          image: require("@/assets/img/decoraciones/pastel_decoration3.svg"),
        },
      ],
    };
  },
  computed: {},
  methods: {
    cakePrice(price) {
      return "$" + price;
    },
    changeStep(step) {
      this.currentStep = step;
    },
  },
};
</script>
<style scoped>
.stepper .stepper-tabs {
  content: "";
  list-style-type: none;
}

.stepper .stepper-tabs > button {
  background: #34bc9b;
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 20px auto;
  border: none;
  padding: 0;
  color: #f1f1f1;
}

.stepper .stepper-tabs > .completed {
  content: " ✔ ";
}

.stepper .stepper-tabs .disabled {
  opacity: 0.5;
}
.card .decoration {
  display: none;
}

.card .decoration:checked + label {
  border: 5px solid #5d69ba;
}

/* Centered text */
.centered-img {
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: #05050586;
  color: #fff;
  font-size: 2.5em;
}
</style>
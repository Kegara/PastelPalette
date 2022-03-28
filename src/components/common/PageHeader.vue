<template>
  <div class="header d-flex justify-content-center mb-4 f">
    <header 
      id="nav" 
      class=""
    >
      <ul class="menu-bar">
        <router-link
          v-for="(item, index) in items"
          :key="index"
          :to="{name:item.link}"
          :hash="item.hash"
          class="px-2 mx-1"
        >
          <li>{{ item.title }}</li>
        </router-link>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Pageheader",
  data() {
    return {
      items: [
        { title: "Home", link: "Home" , hash: "#Home" },
        { title: "Admin", link: "Admin", hash: "#Admin" },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.header {
  min-height: 5vh;
  width: 100%;
  position: fixed;
  z-index: 2;
  background-image: url("/assets/img/top-banner.svg");
  background-repeat: repeat-x;
  background-position: bottom;
}
.menu-bar {
  border-radius: 25px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  display: inline-flex;
  background-color: #47023f;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 0 10px;
  margin: 50px 0 0 0;
}

.menu-bar li {
  list-style: none;
  color: #ff5e6c;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  padding: 12px 16px;
  margin: 0 8px;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
}

.menu-bar li::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  transition: 0.2s;
  border-radius: 25px;
}

.menu-bar li:hover {
  color: #fff;
  text-decoration: none;
}

.menu-bar li:hover::before {
  background: #ff5e6c;
  box-shadow: 0px 3px 20px 0px black;
  transform: scale(1.2);
}

.menu-bar a {
  text-decoration: none;
}
</style>
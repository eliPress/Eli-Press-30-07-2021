<template>
  <div class="header-navigation">
    <nav
      class="navbar navbar-expand-lg navbar-light "
      :class="[themeLight ? 'light' : 'bg-dark']"
    >
      <div class="d-flex">
        <router-link exact to="/favorites" class="btn ">
            <img src="../../assets/heart.svg" alt="" height="22" width="22" />
        </router-link>
        <router-link exact to="/" class="btn ">
          <img src="../../assets/home.svg" alt="" height="22" width="22" />
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavigationHeader",

  computed: {
    ...mapState(["themeLight"]),
  },

  data() {
    return {
      homeScreenSelected: true,
    };
  },
};
</script>

<style scoped>
.header-navigation {
  direction: rtl;
  border-bottom: 1px solid rgba(54, 53, 53, 0.32);
}

.btn {
  margin-right: 10%;
  box-shadow: 0 0 0 0 !important;
}

.navbar {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.navbar-item img {
  max-height: 2rem;
}
.light{
   background-color: rgba(50,90,90,.5)
}
</style>

<template>
  <header
    class="tai-header container-fluid p-0"
    :class="{ 'menu-shadow': isMobileMenuOpened }"
  >
    <b-navbar
      toggleable="lg"
      class="header-navbar px-3 py-2 py-lg-3 px-lg-0 container-lg"
    >
      <b-navbar-brand href="#">
        <b-img
          :src="logoImg"
          alt="Amazing Taiwan logo"
          class="logo-img"
        ></b-img>
      </b-navbar-brand>

      <b-navbar-toggle
        class="navbar-toggle-btn"
        target="nav-collapse"
        @click="toggleMenuVisibility"
      >
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="x"></b-icon>
          <b-icon v-else icon="list"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        class="d-lg-flex justify-content-end menu-opened"
        is-nav
      >
        <b-navbar-nav class="my-5 my-lg-0">
          <b-nav-item
            class="d-lg-flex align-items-center mx-6"
            href="#"
            active
            disabled
            >Home</b-nav-item
          >
          <b-nav-item class="d-lg-flex align-items-center mx-6" href="#"
            >Explore</b-nav-item
          >
          <b-nav-item class="d-lg-flex align-items-center mx-6" href="#"
            >About</b-nav-item
          >
        </b-navbar-nav>
        <b-button variant="secondary" class="sign-in-btn mb-2 mb-lg-0"
          >Sign In</b-button
        >
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import logoImg from "@/assets/images/logo.png";

export default {
  data() {
    return {
      logoImg,
      isMobileMenuOpened: false,
    };
  },
  methods: {
    toggleMenuVisibility() {
      this.isMobileMenuOpened = !this.isMobileMenuOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
.tai-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.menu-shadow {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  transition: background-color, 0.25s linear;
}

.header-navbar {
  background-color: $body-bg;
  .navbar-toggle-btn {
    border: none;
    background-color: map-get($theme-colors, "secondary");
    color: map-get($theme-colors, "light");
    padding: $input-btn-padding-y $input-btn-padding-x;
  }

  .sign-in-btn {
    margin-left: 0;
    padding: $input-btn-padding-y $input-btn-padding-x;
  }

  .navbar-nav .nav-item .nav-link {
    &.active {
      color: map-get($theme-colors, "primary");
      font-weight: 700;
    }

    &:hover {
      color: map-get($theme-colors, "primary");
    }
  }
}
.logo-img {
  width: 100px;
  height: auto;
}
@include media-breakpoint-up(sm) {
  .header-navbar {

    .navbar-toggle-btn {
      padding: $input-btn-padding-y-sm $input-btn-padding-x-sm;
    }
    .sign-in-btn {
      margin-left: 58;
      padding: $input-btn-padding-y-sm $input-btn-padding-x-sm;
    }
  }
}

@include media-breakpoint-up(lg) {
  .header-navbar {

    .navbar-toggle-btn {
      padding: $input-btn-padding-y-lg $input-btn-padding-x-lg;
    }
    .sign-in-btn {
      margin-left: 58;
      padding: $input-btn-padding-y-lg $input-btn-padding-x-lg;
    }
  }
  .logo-img {
    width: 148px;
  }
}
</style>

<template>
  <section class="container-lg header-section p-0">
    <div
      class="overflow-hidden container-fluid d-flex justify-content-end py-3 px-0"
    >
      <b-img
        :src="headerBg"
        alt="Header section background image"
        class="header-section__bg-image"
      ></b-img>
      <div class="header-section__text-container pl-3">
        <h1 class="header-section__title mb-1">
          Discover your next place to travel in Taiwan
        </h1>
        <p class="header-section__paragraph mb-3 mb-lg-6">
          Since 2020, we’ve guided more than 100.000 people to enjoy their best
          <b>Taiwan Experience</b>
        </p>
        <b-button variant="secondary" class="header-section__button"
          >Let's Explore</b-button
        >
      </div>
    </div>
  </section>
</template>

<script>
import headerBg from "@/assets/images/header-bg.png";

export default {
  data() {
    return {
      headerBg,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-section {
  position: relative;

  &__bg-image {
    width: auto;
    height: 315px;
  }

  &__text-container {
    width: 70%;
    height: 100%;
    padding-left: 10%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    top: 0;
    z-index: 10;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 30%,
      rgba(255, 255, 255, 0.7) 60%,
      rgba(255, 255, 255, 0.6) 80%,
      transparent
    );
  }

  &__title {
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    color: map-get($theme-colors, "secondary");
  }

  &__paragraph {
    width: 80%;
    font-size: 10px;
    line-height: 16px;
    color: map-get($theme-colors, "primary");
  }

  &__button {
    width: max-content;
    box-shadow: 0px 12px 20px 0px rgba(238, 108, 77, 0.63);
    padding: $input-btn-padding-y $input-btn-padding-x;
  }
}

@include media-breakpoint-up(sm) {
  .header-section {
    &__text-container {
      width: 50%;
    }

    &__bg-image {
      height: 564px;
    }

    &__title {
      font-size: 30px;
      line-height: 42px;
    }

    &__paragraph {
      font-size: 16px;
      line-height: 24px;
    }

    &__button {
      box-shadow: 0px 14px 25px 0px rgba(238, 108, 77, 0.63);
      padding: $input-btn-padding-y-sm $input-btn-padding-x-sm;
    }
  }
}

@include media-breakpoint-up(md) {
  .header-section {
    &__text-container {
      width: 50%;
    }

    &__title {
      font-size: 38px;
      line-height: 56px;
    }

    &__paragraph {
      font-size: 18px;
      line-height: 26px;
    }

    &__button {
      box-shadow: 0px 15px 27px 0px rgba(238, 108, 77, 0.63);
      padding: $input-btn-padding-y-sm $input-btn-padding-x-sm;
    }
  }
}

@include media-breakpoint-up(lg) {
  .header-section {
    &__bg-image {
      height: 631px;
    }

    &__text-container {
      width: 420px;
    }

    &__title {
      font-size: 48px;
      line-height: 76px;
    }

    &__paragraph {
      font-size: 19px;
      line-height: 30px;
    }

    &__button {
      box-shadow: 0px 16px 30px 0px rgba(238, 108, 77, 0.63);
      padding: $input-btn-padding-y-lg $input-btn-padding-x-lg;
    }
  }
}
</style>

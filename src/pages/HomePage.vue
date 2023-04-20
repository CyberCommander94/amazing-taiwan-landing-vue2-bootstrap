<template>
  <div class="container-fluid p-0">
    <AppHeaderSection />
    <AppDestinationsSection />
    <AppAboutUsSection />
    <AppFeedbackSection />
    <AppSubscribeSection />
  </div>
</template>

<script>
import AppHeaderSection from "@/components/layout/AppHeaderSection.vue";
import AppDestinationsSection from "@/components/layout/AppDestinationsSection.vue";
import AppAboutUsSection from "@/components/layout/AppAboutUsSection.vue";
import AppFeedbackSection from "@/components/layout/AppFeedbackSection.vue";
import AppSubscribeSection from "@/components/layout/AppSubscribeSection.vue";

export default {
  components: {
    AppHeaderSection,
    AppDestinationsSection,
    AppAboutUsSection,
    AppFeedbackSection,
    AppSubscribeSection,
  }
};
</script>

<style lang="scss" scoped></style>

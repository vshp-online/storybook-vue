<script setup>
  import { ref, watchEffect } from "vue";
  import { cnTransform } from "../../utils/cn-transform";
  import ArrowIcon from "./ArrowIcon.vue";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    header: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  });

  const isToggled = ref(false);
  const renderClassNames = ref("");

  let modeOpen = isToggled.value && "collapse__item_open";
  renderClassNames.value = cnTransform("collapse__item", modeOpen, `${props.className}`);

  watchEffect(() => {
    modeOpen = isToggled.value && "collapse__item_open";
    renderClassNames.value = cnTransform("collapse__item", modeOpen, `${props.className}`);
  });

  function handleQuestionToggle() {
    isToggled.value = !isToggled.value;
  }
</script>

<template>
  <!-- {{ console.log(isToggled) }} -->
  <div :class="renderClassNames">
    <div class="collapse__header" @click="handleQuestionToggle">
      <div class="collapse__header-icon"><arrow-icon /></div>
      <div class="collapse__header-text" v-html="header"></div>
    </div>
    <div class="collapse__content" v-html="content"></div>
  </div>
</template>

<style lang="scss">
  @import "@/styles/variables.scss";
  @import "@/styles/collapse.scss";
</style>

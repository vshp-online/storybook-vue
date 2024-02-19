<script setup>
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },
  });

  const renderClassNames = cnTransform("link_decor", `${props.className}`);
</script>

<template>
  <a :class="renderClassNames" :href="link" target="_blank" rel="noreferrer">
    <slot />
  </a>
</template>

<style lang="scss">
  @import "@/styles/variables.scss";
  @import "@/styles/link.scss";
</style>

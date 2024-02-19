<script setup>
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    headerText: {
      type: String,
      default: "",
    },
    noSpaceAround: {
      type: Boolean,
      default: false,
    },
    noBorderLast: {
      type: Boolean,
      default: false,
    },
    isLarge: {
      type: Boolean,
      default: false,
    },
  });

  const modeSize = props.isLarge && "list_lg";
  const modeBorder = props.noBorderLast && "list_no-border-last";
  const modeSpace = props.noSpaceAround && "list_no-space-around";

  const renderClassNames = cnTransform("list", modeSize, modeBorder, modeSpace, `${props.className}`);
</script>

<template>
  <section :class="renderClassNames">
    <div v-if="headerText" class="list__header">{{ headerText }}</div>

    <ul class="list__items">
      <slot />
    </ul>
  </section>
</template>

<style lang="scss">
  @import "@/styles/variables.scss";
  @import "@/styles/list.scss";
</style>

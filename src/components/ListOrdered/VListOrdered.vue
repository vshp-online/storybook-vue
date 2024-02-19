<script setup>
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    isTwoColumns: {
      type: Boolean,
      default: false,
    },
    isThreeColumns: {
      type: Boolean,
      default: false,
    },
  });

  const modeColumns = props.isTwoColumns && "list-ordered_cols";
  const modeColumnsThree = props.isThreeColumns && "list-ordered_multi_cols";
  const renderClassNames = cnTransform("list-ordered", modeColumns, modeColumnsThree, `${props.className}`);
</script>

<template>
  <div :class="renderClassNames">
    <slot />
  </div>
</template>

<style lang="scss">
  @import "@/styles/variables.scss";
  @import "@/styles/list-ordered.scss";
</style>

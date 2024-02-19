<script setup>
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    view: {
      type: String,
      default: "primary",
    },
    maxWidth: {
      type: Boolean,
      default: false,
    },
    corners: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    icon: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: undefined,
    },
    spaceTop: {
      type: Boolean,
      default: false,
    },
  });

  const modeWidth = props.maxWidth && "btn_max-width-sm";
  const modeSize = props.size && `btn_${props.size}`;
  const modeIcon = props.icon && "btn_small-icon";
  const modeCorners = props.corners && "btn_square";
  const modeSpaceTop = props.spaceTop && "btn_space_top";

  const renderClassNames = cnTransform("btn", `btn_${props.view}`, modeCorners, modeWidth, modeSize, modeIcon, modeSpaceTop, `${props.className}`);
</script>

<template>
  <a v-if="props.href" :href="props.href" :class="renderClassNames">
    <slot />
  </a>

  <button v-else type="button" :class="renderClassNames">
    <slot />
  </button>
</template>

<style lang="scss">
  @import "@/styles/variables.scss";
  @import "@/styles/button.scss";
</style>

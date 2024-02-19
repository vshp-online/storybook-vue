<script setup>
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    progress: {
      type: Number,
      default: 0,
    },
  });

  const renderClassNames = cnTransform("progress", `${props.className}`);

  const style = { width: `${props.progress}%` };
</script>

<template>
  <div :class="renderClassNames">
    <div class="progress__header">{{ progress }}/100</div>
    <div class="progress__line-wrap">
      <div class="progress__line" :style="style"></div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/styles/variables.scss";
  @import "@/styles/progress.scss";
</style>

<script setup>
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "h1",
    },
    decor: {
      type: Boolean,
      default: true,
    },
  });

  const modeDecor = props.decor && "title_decor";
  const renderClassNames = cnTransform("title", modeDecor, `${props.className}`);
</script>

<template>
  <h1 v-if="props.type === 'h1'" :class="renderClassNames"><slot /></h1>
  <h2 v-else-if="props.type === 'h2'" :class="renderClassNames"><slot /></h2>
  <div v-else-if="props.type === 'block'" :class="renderClassNames"><slot /></div>
</template>

<style lang="scss">
  @import "@/styles/variables.scss";
  @import "@/styles/title.scss";
</style>

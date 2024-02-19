<script setup>
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    coverAlt: {
      type: String,
      default: "",
    },
    border: {
      type: Boolean,
      default: false,
    },
    coverSrc: {
      type: String,
      default: "",
    },
    centered: {
      type: Boolean,
      default: false,
    },
    coverType: {
      type: String,
      default: "",
    },
    noSpaceBottom: {
      type: Boolean,
      default: false,
    },
    textSizeLg: {
      type: Boolean,
      default: false,
    },
  });

  const modeDecor = props.border && "page__block_border";
  const modeCentered = props.centered && "page__block_center";
  const modeCover = props.coverSrc.length > 0 && "page__block_cover";
  const modeCoverType = props.coverType.length > 0 && `page__block_cover_${props.coverType}`;
  const modeSpaceBottom = props.noSpaceBottom && "page__block_no_space_bottom";
  const modeTextSizeLg = props.textSizeLg && "page__block_text_lg";

  const renderClassNames = cnTransform("page__block", modeDecor, modeCover, modeCentered, modeCoverType, modeSpaceBottom, modeTextSizeLg, `${props.className}`);
</script>

<template>
  <section :class="renderClassNames">
    <template v-if="coverSrc.length > 0">
      <img class="page__block-img" :src="coverSrc" :alt="coverAlt" />
      <div class="page__block-body"><slot /></div>
    </template>
    <template v-else><slot /></template>
  </section>
</template>

<style lang="scss">
  @import "@/styles/variables.scss";
  @import "@/styles/section.scss";
</style>

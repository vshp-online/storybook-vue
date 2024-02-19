<script setup>
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    isCover: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    isLink: {
      type: Boolean,
      default: false,
    },
  });

  const renderClassNames = cnTransform("card", `${props.className}`);
</script>

<template>
  <div :class="renderClassNames">
    <template v-if="isCover">
      <template v-if="isLink">
        <div class="card__header">
          <slot name="link_header" />
          <slot name="cover" />
          <h2 class="card__header-title">{{ title }}</h2>
        </div>
      </template>
      <div v-else class="card__header">
        <slot name="cover" />
        <h2 class="card__header-title">{{ title }}</h2>
      </div>
    </template>

    <div class="card__body"><slot /></div>
    <template v-if="isLink">
      <div class="card__more">
        <slot name="link_more" />
      </div>
    </template>
  </div>
</template>

<style lang="scss">
  @import "@/styles/variables.scss";
  @import "@/styles/card.scss";
</style>

<script setup>
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
  });

  const renderClassNames = cnTransform("list-ordered__item", `${props.className}`);
</script>

<template>
  <div :class="renderClassNames">
    <slot />
  </div>
</template>

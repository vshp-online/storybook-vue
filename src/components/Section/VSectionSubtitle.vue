<script setup>
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
  });

  const renderClassNames = cnTransform("page__block-subtitle", `${props.className}`);
</script>

<template>
  <h3 :class="renderClassNames"><slot /></h3>
</template>

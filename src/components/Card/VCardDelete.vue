<script setup>
  import { ref, watchEffect } from "vue";
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    isDelete: {
      type: Boolean,
      default: false,
    },

    textConfirm: {
      type: String,
      default: "Вы уверены, что хотите удалить данную программу?",
    },
  });

  const renderClassNames = ref("");

  let modeDeleteBackdrop = props.isDelete && "card__delete-backdrop_active";
  renderClassNames.value = cnTransform("card__delete-backdrop", `${props.className}`, modeDeleteBackdrop);

  watchEffect(() => {
    modeDeleteBackdrop = props.isDelete && "card__delete-backdrop_active";
    renderClassNames.value = cnTransform("card__delete-backdrop", `${props.className}`, modeDeleteBackdrop);
  });
</script>

<template>
  <slot name="btnDelete"></slot>

  <div :class="renderClassNames">
    <div class="card__delete-backdrop-title">{{ textConfirm }}</div>
    <div class="card__delete-backdrop-buttons">
      <slot name="btnConfirm"></slot>
      <slot name="btnCancel"></slot>
    </div>
  </div>
</template>

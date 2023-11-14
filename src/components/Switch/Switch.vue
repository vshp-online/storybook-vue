<script setup>
  import { cnTransform } from "../../utils/cn-transform";
  import { ref, watchEffect } from "vue";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    defaultChecked: {
      type: Boolean,
      default: false,
    },
    onChange: {
      type: Function,
    },
  });
  const switchState = ref(props.defaultChecked);
  const animationState = ref("false");

  const modeChecked = switchState.value && "switch_checked";

  let renderClassNames = cnTransform("switch", modeChecked, `${props.className}`);

  let timeAnimation;

  watchEffect(() => {
    renderClassNames = cnTransform("switch", switchState.value && "switch_checked", `${props.className}`);
  });

  const toggleSwitch = () => {
    clearTimeout(timeAnimation);
    switchState.value = !switchState.value;
    animationState.value = "true";
    timeAnimation = setTimeout(() => {
      animationState.value = "false";
    }, 700);
    props.onChange();
  };
</script>

<template>
  <button type="button" role="switch" :aria-checked="switchState" :class="renderClassNames" @click="toggleSwitch" :switch-click-animating="animationState">
    <span class="switch__handle"></span>
    <slot />
  </button>
</template>

<style scoped lang="scss">
  @import "../../styles/index.scss";
</style>

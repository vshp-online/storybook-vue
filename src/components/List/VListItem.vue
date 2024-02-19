<script setup>
  import { cnTransform } from "../../utils/cn-transform";

  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    isLinkOut: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    titleClass: {
      type: String,
      default: "",
    },
    isMark: {
      type: Boolean,
      default: false,
    },
    markClass: {
      type: String,
      default: "",
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
    iconClass: {
      type: String,
      default: "",
    },
  });

  const modeItem = props.isIcon && "list__item_icon";
  const renderClassNames = cnTransform("list__item", modeItem, `${props.className}`);
  const renderIconClassNames = cnTransform("list__item-icon", `${props.iconClass}`);
  const renderTitleClassNames = cnTransform("list__item-title", `${props.titleClass}`);
  const renderMarkClassNames = cnTransform("list__item-mark", `${props.markClass}`);
</script>

<template>
  <li v-if="link">
    <div v-if="isLinkOut" :class="renderClassNames">
      <a :href="link" target="_blank" rel="noopener noreferrer"></a>
      <div v-if="isIcon" :class="renderIconClassNames">
        <slot name="icon"></slot>
      </div>

      <div class="list__item-body">
        <slot name="content"></slot>
        <h3 v-if="title" :class="renderTitleClassNames">{{ title }}</h3>
      </div>

      <div v-if="isMark" :class="renderMarkClassNames">
        <slot name="mark"></slot>
      </div>
    </div>

    <div v-else :class="renderClassNames">
      <slot name="linkItem"></slot>

      <div v-if="isIcon" :class="renderIconClassNames">
        <slot name="icon"></slot>
      </div>
      <div class="list__item-body">
        <slot name="content"></slot>
        <h3 v-if="title" :class="renderTitleClassNames">{{ title }}</h3>
      </div>
      <div v-if="isMark" :class="renderMarkClassNames">
        <slot name="mark"></slot>
      </div>
    </div>
  </li>

  <li v-else :class="renderClassNames">
    <div v-if="isIcon" :class="renderIconClassNames">
      <slot name="icon"></slot>
    </div>
    <div class="list__item-body">
      <slot name="content"></slot>
      <h3 v-if="title" :class="renderTitleClassNames">{{ title }}</h3>
    </div>
    <div v-if="isMark" :class="renderMarkClassNames">
      <slot name="mark"></slot>
    </div>
  </li>
</template>

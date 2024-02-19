import VProgress from "./VProgress.vue";

export default {
  title: "VProgress",
  component: VProgress,
};

const Template = (args) => ({
  components: { VProgress },
  setup() {
    return { args };
  },
  template: '<v-progress v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  progress: 30,
};

import VLinkDecor from "./VLinkDecor.vue";

export default {
  title: "VLinkDecor",
  component: VLinkDecor,
};

const Template = (args) => ({
  components: { VLinkDecor },
  setup() {
    return { args };
  },
  template: '<VLinkDecor v-bind="args">Title</VLinkDecor>',
});

export const Default = Template.bind({});
Default.args = {
  link: "#",
};

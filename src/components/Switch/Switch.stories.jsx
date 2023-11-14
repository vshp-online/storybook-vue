import Switch from "./Switch.vue";

export default {
  title: "Switch",
  component: Switch,
};

const Template = (args) => ({
  components: { Switch },
  setup() {
    return { args };
  },
  template: '<Switch v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  onChange: () => {
    console.log("switch");
  },
  defaultChecked: false,
};

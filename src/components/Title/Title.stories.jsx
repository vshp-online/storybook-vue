import Title from "./Title.vue";

export default {
  title: "Title",
  component: Title,
  argTypes: {
    type: {
      options: ["h1", "h2", "block"],
      control: { type: "radio" },
    },
    decor: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => ({
  components: { Title },
  setup() {
    return { args };
  },
  template: '<Title v-bind="args">Title</Title>',
});

export const Default = Template.bind({});
Default.args = {
  type: "h1",
  decor: true,
};

export const WithNoDecor = Template.bind({});
WithNoDecor.args = {
  type: "h1",
  decor: false,
};

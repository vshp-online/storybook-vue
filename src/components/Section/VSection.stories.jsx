import VSection from "./VSection.vue";
import VSectionSubtitle from "./VSectionSubtitle.vue";
import VSectionBodySmall from "./VSectionBodySmall.vue";

export default {
  title: "VSection",
  component: VSection,
  argTypes: {
    coverType: {
      options: ["", "white", "light"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => ({
  components: { VSection },
  setup() {
    return { args };
  },
  template: '<v-section v-bind="args">Title</v-section>',
});

export const Default = Template.bind({});

export const SectionWithBorder = Template.bind({});
SectionWithBorder.args = {
  border: true,
};

export const SectionCover = Template.bind({});
SectionCover.args = {
  coverSrc: "https://picsum.photos/id/1/400/400",
};

export const SectionCoverWhite = Template.bind({});
SectionCoverWhite.args = {
  coverSrc: "https://picsum.photos/id/1/400/400",
  coverType: "white",
};

export const SectionCoverLight = Template.bind({});
SectionCoverLight.args = {
  coverSrc: "https://picsum.photos/id/1/400/400",
  coverType: "light",
};

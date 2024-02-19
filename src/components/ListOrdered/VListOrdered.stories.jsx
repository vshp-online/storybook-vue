import VListOrdered from "./VListOrdered.vue";
import VListOrderedItem from "./VListOrderedItem.vue";

export default {
  title: "VListOrdered",
  component: VListOrdered,
};

const Template = (args) => ({
  components: { VListOrdered, VListOrderedItem },
  setup() {
    return { args };
  },
  template: '<VListOrdered v-bind="args"><VListOrderedItem><div>content</div></VListOrderedItem><VListOrderedItem><div>content</div></VListOrderedItem><VListOrderedItem>content</VListOrderedItem></VListOrdered>',
});

export const Default = Template.bind({});
export const ListOrderedTwoColumnsLg = Template.bind({});
ListOrderedTwoColumnsLg.args = {
  isTwoColumns: true,
};
export const ListOrderedThreeColumnsLg = Template.bind({});
ListOrderedThreeColumnsLg.args = {
  isThreeColumns: true,
};

import VCollapse from "./VCollapse.vue";
import VCollapseItem from "./VCollapseItem.vue";
// import CollapseDoc from "./Collapse-Doc.mdx";

export default {
  title: "VCollapse",
  component: VCollapse,
  // parameters: {
  //   docs: {
  //     page: CollapseDoc,
  //   },
  // },
};

const Template = (args) => ({
  components: { VCollapse, VCollapseItem },
  setup() {
    return { args };
  },
  template: '<v-collapse v-bind="args"><v-collapse-item header="title" content="content" /><v-collapse-item header="title" content="content" /></v-collapse>',
});

export const Default = Template.bind({});
Default.args = {};

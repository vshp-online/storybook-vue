import VList from "./VList.vue";
import VListItem from "./VListItem.vue";

export default {
  title: "VList",
  component: VList,
};

const Template = (args) => ({
  components: { VList, VListItem },
  setup() {
    return { args };
  },
  template:
    '<VList v-bind="args">  <VListItem title="title" :isLinkOut="true" :isIcon="true" :isMark="true" link="cdcd">   <template #icon>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M250,196c-29.8,0.1-54,24.2-54,54c0.1,29.8,24.2,54,54,54c29.8-0.1,54-24.2,54-54S279.8,196,250,196z M497.1,240.9 C441.4,165,345.5,87.5,250,87.1C154.3,87.5,58.2,165.6,2.9,240.9c-3.8,5.5-3.8,12.7,0,18.1C58.6,335,154.5,412.5,250,412.9 c95.7-0.3,191.8-78.4,247.1-153.8C501,253.6,501,246.4,497.1,240.9z M250,348c-54.1,0-98-43.9-98-98s43.9-98,98-98s98,43.9,98,98 S304.1,348,250,348z"></path></svg>  </template>  <template #mark>gfdg</template>    <div>content</div>  </VListItem>  <VListItem title="title" link="#" :isMark="true" mark="text" />  <VListItem title="title" mark="text" /></VList>',
});

// const TemplateLinkOut = (args) => (
//   <MemoryRouter>
//     <List {...args}>
//       <List.Item title="title" isLinkOut={true} link="#" icon={icon} mark="text" target="_blank">
//         <div>content</div>
//       </List.Item>
//     </List>
//   </MemoryRouter>
// );

export const Default = Template.bind({});

// export const ListWithTitle = Template.bind({});
// ListWithTitle.args = {
//   headerText: "Title",
// };

// export const ListLarge = Template.bind({});
// ListLarge.args = {
//   isLarge: true,
// };

// export const ListWithLinkOut = TemplateLinkOut.bind({});

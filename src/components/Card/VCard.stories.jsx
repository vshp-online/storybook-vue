import VCard from "./VCard.vue";
import VCardDelete from "./VCardDelete.vue";
import VCardRow from "./VCardRow.vue";
import VCardSubtitle from "./VCardSubtitle.vue";
import VCardTitle from "./VCardTitle.vue";

import VProgress from "../Progress/VProgress.vue";

export default {
  title: "VCard",
  component: VCard,
  // parameters: {
  //   docs: {
  //     page: CollapseDoc,
  //   },
  // },
};

const Template = (args) => ({
  components: { VCard, VCardTitle, VCardRow, VCardSubtitle },
  setup() {
    return { args };
  },
  template:
    '<v-card v-bind="args"><v-card-row><v-card-title>Title</v-card-title><v-card-subtitle>Subtitle</v-card-subtitle></v-card-row><template #cover><img alt="example" src="https://picsum.photos/id/1/400/400" /></template><template #link_header><a class="card__header-link" href="#fdsf">Подробнее</a></template><template #link_more><a class="card__more-link" href="#fdsf">Подробнее</a></template></v-card>',
});

export const Default = Template.bind({});
Default.args = {
  isCover: true,
  isLink: true,

  title: "Cover Title",
};

// import { Progress } from "../Progress/Progress";

// const deleteIcon = (

// );

const TemplateWithProgress = (args) => ({
  components: { VCard, VCardTitle, VCardRow, VCardSubtitle, VProgress },
  setup() {
    return { args };
  },
  template:
    '<v-card v-bind="args">  <v-card-row>    <v-card-title>Title</v-card-title>    <v-progress progress="40" />  </v-card-row>  <v-card-row><v-card-title>Title</v-card-title><v-card-subtitle>Subtitle</v-card-subtitle></v-card-row></v-card>',
});

export const CardWithProgress = TemplateWithProgress.bind({});
CardWithProgress.args = {
  title: "Cover Title",
};

// const TemplateDelete = (args) => ({
//   components: { VCard, VCardTitle, VCardRow, VCardSubtitle, VCardDelete },
//   setup() {
//     return { args };
//   },
//   template:
//     '<v-card v-bind="args"><v-card-delete isDelete="true"><template #btnDelete><button class="card__delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">    <path d="M25.8,14.2c-0.5-0.5-1.4-0.5-1.9,0L20,18.1l-3.9-3.9c-0.5-0.5-1.4-0.5-1.9,0.1c-0.5,0.5-0.5,1.3,0,1.8l3.9,3.9l-3.9,3.9c-0.5,0.5-0.5,1.4,0.1,1.9c0.5,0.5,1.3,0.5,1.8,0l3.9-3.9l3.9,3.9c0.5,0.5,1.4,0.5,1.9,0c0.5-0.5,0.5-1.4,0-1.9l0,0L21.9,20l3.9-3.9C26.3,15.6,26.3,14.7,25.8,14.2z" /></svg></button></template><template #btnConfirm><button class="card__delete-backdrop-btn">Да</button></template><template #btnCancel><button class="card__delete-backdrop-btn">Нет</button></template></v-card-delete><v-card-row><v-card-title>Title</v-card-title><v-card-subtitle>Subtitle</v-card-subtitle></v-card-row><template #cover><img alt="example" src="https://picsum.photos/id/1/400/400" /></template><template #link><a class="card__header-link" href="#fdsf">Подробнее</a></template></v-card>',
// });

// export const CardWithDeleteBtn = TemplateDelete.bind({});
// CardWithDeleteBtn.args = {
//   title: "Cover Title",
// };

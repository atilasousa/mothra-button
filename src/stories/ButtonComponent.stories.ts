import ButtonComponent from "../components/ButtonComponent.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "CoderFox/Button",
  component: ButtonComponent,
  argTypes: {
    label: {
      description: "Button Label",
      control: { type: "text" },
    },
    icon: {
      description:
        "Button Icon, i'have created a select input with two options just for tests purposes",
      control: { type: "select" },
      options: [
        `<font-awesome-icon icon="user-secret" />`,
        `<font-awesome-icon icon="house" />`,
      ],
    },
    onClick: {
      action: "click",
    },
    backgroundColor: {
      description: "Button Background Color",
      control: { type: "color" },
    },
    size: {
      description: "Button Size",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    loading: {
      description: "Loading effect in the button",
    },
    isDisabled: {
      description: "Enable or disable the button",
    },
    iconPosition: {
      description: "Icon Position",
      control: { type: "select" },
      options: ["left", "right", "onlyIcon"],
    },
  },
} as Meta<typeof ButtonComponent>;

const Template = (args: any, { argTypes }: any) => ({
  components: { ButtonComponent },
  props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: `<button-component @click="click" v-bind="args">
        <template v-if="${"label" in args}" v-slot:label>${
    args.label
  }</template>
        <template v-if="${"icon" in args}" v-slot:icon>${args.icon}</template>
    </button-component>`,
});

export const Small: StoryFn<typeof ButtonComponent> = Template.bind({});
Small.args = {
  size: "sm",
  label: "Button",
};
export const Medium: StoryFn<typeof ButtonComponent> = Template.bind({});
Medium.args = {
  size: "md",
  label: "Button",
};
export const Large: StoryFn<typeof ButtonComponent> = Template.bind({});
Large.args = {
  size: "lg",
  label: "Button",
};

export const Icon: StoryFn<typeof ButtonComponent> = Template.bind({});
Icon.args = {
  icon: `<font-awesome-icon icon="user-secret" />`,
  iconPosition: "onlyIcon",
};

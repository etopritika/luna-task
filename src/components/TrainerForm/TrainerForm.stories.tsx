import type { Meta, StoryObj } from "@storybook/react";
import TrainerForm from ".";

const meta: Meta<typeof TrainerForm> = {
  title: "Forms/TrainerForm",
  component: TrainerForm,
};

export default meta;

type Story = StoryObj<typeof TrainerForm>;

export const Default: Story = {
  args: {
    onNext: () => console.log("Next clicked"),
  },
};

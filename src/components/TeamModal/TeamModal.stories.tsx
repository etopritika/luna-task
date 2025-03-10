import type { Meta, StoryObj } from "@storybook/react";
import { useTeamStore } from "../../store/use-team-store";
import { useEffect } from "react";
import ModalProvider from "../../providers/Modal";
import TeamModal from ".";

const meta: Meta<typeof TeamModal> = {
  title: "Modals/TeamModal",
  component: TeamModal,
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TeamModal>;

export const Default: Story = {
  render: (args) => {
    const setTrainer = useTeamStore((state) => state.setTrainer);
    const resetTeam = useTeamStore((state) => state.resetTeam);
    const addPokemon = useTeamStore((state) => state.addPokemon);

    useEffect(() => {
      resetTeam();
      setTrainer({ firstName: "Ash", lastName: "Ketchum" });

      const mockTeam = [
        {
          id: 1,
          name: "bulbasaur",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
        {
          id: 4,
          name: "charmander",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        },
        {
          id: 7,
          name: "squirtle",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        },
      ];

      mockTeam.forEach((poke) => addPokemon(poke));
    }, []);

    return <TeamModal {...args} />;
  },
  args: {
    onReset: () => console.log("Reset clicked!"),
  },
};

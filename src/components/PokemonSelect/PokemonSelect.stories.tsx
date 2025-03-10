import type { Meta, StoryObj } from "@storybook/react";
import { useTeamStore } from "../../store/use-team-store";
import { useEffect } from "react";
import ModalProvider from "../../providers/Modal";
import PokemonSelect from ".";

const MOCK_POKEMONS = [
  {
    id: 1,
    name: "bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 2,
    name: "ivysaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 3,
    name: "venusaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    id: 4,
    name: "charmander",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
];

const meta: Meta<typeof PokemonSelect> = {
  title: "Forms/PokemonSelect",
  component: PokemonSelect,
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PokemonSelect>;

export const Default: Story = {
  render: (args) => {
    const setTrainer = useTeamStore((state) => state.setTrainer);
    const resetTeam = useTeamStore((state) => state.resetTeam);

    useEffect(() => {
      resetTeam();
      setTrainer({ firstName: "Ash", lastName: "Ketchum" });
    }, []);

    return <PokemonSelect {...args} />;
  },
  args: {
    onReset: () => console.log("Reset clicked"),
  },
};

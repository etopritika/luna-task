import { create } from "zustand";
import { TrainerFormValues } from "../components/TrainerForm/trainerSchema";
import { Pokemon } from "../lib/types";

type TeamStore = {
  trainer: TrainerFormValues | null;
  setTrainer: (trainer: TrainerFormValues) => void;
  team: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (pokemonId: number) => void;
  resetTeam: () => void;
};

export const useTeamStore = create<TeamStore>((set) => ({
  trainer: null,
  setTrainer: (trainer) => set({ trainer }),
  team: [],
  addPokemon: (pokemon) =>
    set((state) =>
      state.team.length < 4 ? { team: [...state.team, pokemon] } : state
    ),
  removePokemon: (pokemonId) =>
    set((state) => ({
      team: state.team.filter((p) => p.id !== pokemonId),
    })),
  resetTeam: () => set({ team: [], trainer: null }),
}));

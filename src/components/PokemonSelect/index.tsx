import { useEffect, useState } from "react";
import axios from "axios";
import Select from "./Select";
import { useModal } from "../../providers/Modal/modal-context";
import TeamModal from "../TeamModal";
import { useTeamStore } from "../../store/use-team-store";

interface PokemonSelectProps {
  onReset: () => void;
}

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
};

export default function PokemonSelect({ onReset }: PokemonSelectProps) {
  const { setOpen } = useModal();
  const team = useTeamStore((state) => state.team);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const results = res.data.results;

        const detailedPokemons = await Promise.all(
          results.map(async (poke: any) => {
            const pokeDetails = await axios.get(poke.url);
            return {
              id: pokeDetails.data.id,
              name: pokeDetails.data.name,
              sprite: pokeDetails.data.sprites.front_default,
            };
          })
        );

        setPokemonList(detailedPokemons);
      } catch (error) {
        console.error("Error fetching pokemons", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const handleShomTeam = () => {
    setOpen(<TeamModal onReset={onReset} />);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold mb-4">Select your Pokémon Team</h2>

      {loading ? <p>Loading Pokémons...</p> : <Select options={pokemonList} />}

      <div className="flex justify-around mt-8 w-full">
        <button
          onClick={onReset}
          className="text-gray-500 hover:text-gray-700 underline text-sm"
        >
          Start Over
        </button>
        <button
          onClick={handleShomTeam}
          disabled={team.length !== 4}
          className={`px-6 py-2 rounded text-white transition
    ${
      team.length !== 4
        ? "bg-gray-500 cursor-not-allowed opacity-50"
        : "bg-gray-700 hover:bg-gray-500"
    }
  `}
        >
          {team.length !== 4
            ? `Select ${4 - team.length} more Pokémon`
            : "Show Team"}
        </button>
      </div>
    </div>
  );
}

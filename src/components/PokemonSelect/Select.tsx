import { useEffect, useState } from "react";
import { Pokemon } from "../../lib/types";
import SelectInput from "./SelectInput";
import SelectDropdown from "./SelectDropdown";
import SelectedPreview from "./SelectedPreview";
import { useTeamStore } from "../../store/use-team-store";
import { useEscapeKey } from "../../hooks/useEscapeKey";

interface SelectProps {
  options: Pokemon[];
  maxSelected?: number;
}

export default function Select({ options, maxSelected = 4 }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const team = useTeamStore((state) => state.team);
  const addPokemon = useTeamStore((state) => state.addPokemon);
  const removePokemon = useTeamStore((state) => state.removePokemon);

  const filteredOptions = options.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (pokemon: Pokemon) => {
    const alreadySelected = team.find((p) => p.id === pokemon.id);

    if (alreadySelected) {
      removePokemon(pokemon.id);
    } else if (team.length < maxSelected) {
      addPokemon(pokemon);
    }
  };

  useEscapeKey(() => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <div className="relative w-full">
      <SelectInput
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        search={search}
        setSearch={setSearch}
        selected={team}
      />

      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-0 cursor-default z-0"
          />

          <SelectDropdown
            options={filteredOptions}
            selected={team}
            handleSelect={handleSelect}
          />
        </>
      )}

      <SelectedPreview selected={team} />
    </div>
  );
}

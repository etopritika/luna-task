import { Pokemon } from "../../lib/types";
import SelectOption from "./SelectOption";

interface SelectDropdownProps {
  options: Pokemon[];
  selected: Pokemon[];
  handleSelect: (pokemon: Pokemon) => void;
}

export default function SelectDropdown({
  options,
  selected,
  handleSelect,
}: SelectDropdownProps) {
  return (
    <ul className="absolute z-10 mt-2 w-full border rounded bg-white shadow-lg max-h-60 overflow-auto">
      {options.length === 0 && (
        <li className="px-4 py-2 text-gray-400 text-center">
          No Pokémon found
        </li>
      )}

      {options.map((pokemon) => (
        <SelectOption
          key={pokemon.id}
          pokemon={pokemon}
          selected={!!selected.find((p) => p.id === pokemon.id)}
          onClick={() => handleSelect(pokemon)}
        />
      ))}
    </ul>
  );
}

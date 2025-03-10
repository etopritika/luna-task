import { Pokemon } from "../../lib/types";

interface SelectOptionProps {
  pokemon: Pokemon;
  selected: boolean;
  onClick: () => void;
}

export default function SelectOption({
  pokemon,
  selected,
  onClick,
}: SelectOptionProps) {
  return (
    <li
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100`}
    >
      <div className="flex items-center gap-2">
        <img src={pokemon.sprite} alt={pokemon.name} className="w-6 h-6" />
        <span className={`capitalize ${selected ? "underline" : ""}`}>
          {pokemon.name}
        </span>
      </div>

      {selected && (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </li>
  );
}

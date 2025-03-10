import { Pokemon } from "../../lib/types";

interface SelectInputProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  search: string;
  setSearch: (val: string) => void;
  selected: Pokemon[];
}

export default function SelectInput({
  isOpen,
  setIsOpen,
  search,
  setSearch,
  selected,
}: SelectInputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={
          selected.length > 0
            ? `${selected.length} selected`
            : "Select Pokémon..."
        }
        onClick={() => setIsOpen(true)}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded cursor-pointer"
      />
      <div className="absolute right-3 top-2/4 -translate-y-1/2 pointer-events-none">
        <svg
          className={`w-4 h-4 transition ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

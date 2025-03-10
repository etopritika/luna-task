import { Pokemon } from "../../lib/types";

interface SelectedPreviewProps {
  selected: Pokemon[];
}

export default function SelectedPreview({ selected }: SelectedPreviewProps) {
  if (selected.length === 0) return null;

  return (
    <section
      aria-labelledby="selected-team-heading"
      className="flex flex-col gap-2 mt-4 w-full"
    >
      <ul className="flex gap-2" role="list">
        {selected.map((poke) => (
          <li
            key={poke.id}
            className="flex items-center gap-1 px-2 py-1 rounded text-white"
            role="listitem"
          >
            <img
              src={poke.sprite}
              alt={`Sprite of ${poke.name}`}
              className="w-4 h-4"
            />
            <span className="capitalize text-sm">{poke.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

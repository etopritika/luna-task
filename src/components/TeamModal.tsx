import { useEscapeKey } from "../hooks/useEscapeKey";
import { useModal } from "../providers/Modal/modal-context";
import { useTeamStore } from "../store/use-team-store";

interface TeamModalProps {
  onReset: () => void;
}

export default function TeamModal({ onReset }: TeamModalProps) {
  const { setClose } = useModal();

  const trainer = useTeamStore((state) => state.trainer);
  const team = useTeamStore((state) => state.team);

  useEscapeKey(() => {
    setClose();
  });

  const handleStartOver = () => {
    onReset();
    setClose();
  };

  const handleClose = () => {
    setClose();
  };

  if (!trainer) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={handleClose}
    >
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl px-2"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Trainer Summary</h2>

          <p className="text-lg">
            Name: {trainer.firstName} {trainer.lastName}
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Pokémon Team</h3>
            <ul className="flex justify-center flex-wrap gap-4">
              {team.map((poke) => (
                <li key={poke.id} className="flex flex-col items-center">
                  <img
                    src={poke.sprite}
                    alt={poke.name}
                    className="w-16 h-16"
                  />
                  <span className="capitalize">{poke.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleStartOver}
            className="px-6 py-2 text-white rounded bg-gray-700 hover:bg-gray-500"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}

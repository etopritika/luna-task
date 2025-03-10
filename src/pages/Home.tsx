import { useState } from "react";
import TrainerForm from "../components/TrainerForm";
import PokemonSelect from "../components/PokemonSelect";
import { useTeamStore } from "../store/use-team-store";

export default function HomePage() {
  const [step, setStep] = useState(1);
  const { resetTeam } = useTeamStore();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-background">
      <section className="w-full max-w-sm">
        <h1 className="sr-only">HomePage</h1>
        {step === 1 && <TrainerForm onNext={() => setStep(2)} />}

        {step === 2 && (
          <PokemonSelect
            onReset={() => {
              setStep(1);
              resetTeam();
            }}
          />
        )}
      </section>
    </main>
  );
}

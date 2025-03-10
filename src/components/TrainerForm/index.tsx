import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TrainerFormValues, trainerSchema } from "./trainerSchema";
import { useTeamStore } from "../../store/use-team-store";

interface TrainerFormProps {
  onNext: () => void;
}

export default function TrainerForm({ onNext }: TrainerFormProps) {
  const setTrainer = useTeamStore((state) => state.setTrainer);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TrainerFormValues>({
    resolver: zodResolver(trainerSchema),
    mode: "onChange",
  });

  const onSubmit = (data: TrainerFormValues) => {
    setTrainer(data);
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      {/* First Name */}
      <div className="flex flex-col">
        <label htmlFor="firstName" className="font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          {...register("firstName")}
          className="border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.firstName && (
          <p className="text-danger text-sm mt-1">{errors.firstName.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div className="flex flex-col">
        <label htmlFor="lastName" className="font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          {...register("lastName")}
          className="border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.lastName && (
          <p className="text-danger text-sm mt-1">{errors.lastName.message}</p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={!isValid}
        className={`mt-4 px-4 py-2 rounded text-white ${
          isValid
            ? "bg-gray-700 hover:bg-gray-500"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </form>
  );
}

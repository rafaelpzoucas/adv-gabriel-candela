import { cn } from "@/lib/utils";

export function CTAButton({ children }: { children?: React.ReactNode }) {
  return (
    <button
      className={cn(
        "w-full sm:w-auto bg-gradient-to-br from-amber-100 via-amber-500 to-amber-800 text-amber-950 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base transition-all duration-300 hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
      )}
    >
      {children ?? "QUERO RESULTADOS"}
    </button>
  );
}

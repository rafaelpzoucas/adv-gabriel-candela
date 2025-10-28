import { cn } from "@/lib/utils";

export function CTAButton({ children }: { children?: React.ReactNode }) {
  return (
    <button
      className={cn(
        "w-auto sm:w-auto bg-gradient-to-r from-[#fac925] via-[#fdf7c7] to-[#c3922f] text-amber-950 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base transition-all duration-300 hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
      )}
    >
      {children ?? "QUERO RESULTADOS"}
    </button>
  );
}

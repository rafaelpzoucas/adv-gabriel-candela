"use client";
import { layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function SecuritySection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  return (
    <section className="bg-gradient-to-b from-amber-100/10 to-background">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 w-full max-w-7xl lg:border-x-2 border-amber-200/20 p-6 py-16 mx-auto">
        <div
          ref={contentRef}
          className={cn(
            "flex flex-col items-center justify-center gap-6 w-full max-w-4xl text-center border-y-4 border-primary py-16",
            "transition-all duration-1000 ease-out",
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          )}
        >
          {/* Ícone com scale + pulse */}
          <ShieldCheck
            className={cn(
              "w-24 h-24 text-primary transition-all duration-700",
              contentVisible
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 -rotate-12"
            )}
            style={{
              transitionDelay: contentVisible ? "200ms" : "0ms",
            }}
          />

          {/* Título */}
          <h2
            className={cn(
              layout.fonts.highlight.className,
              "text-5xl font-bold text-primary",
              "transition-all duration-700 ease-out",
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{
              transitionDelay: contentVisible ? "400ms" : "0ms",
            }}
          >
            Compra 100% segura
          </h2>

          {/* Descrição */}
          <p
            className={cn(
              "max-w-xl transition-all duration-700 ease-out",
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{
              transitionDelay: contentVisible ? "600ms" : "0ms",
            }}
          >
            Se por qualquer motivo você achar que o curso não é para você, tem
            até 7 dias de garantia para pedir a devolução do valor investido.
            Sem burocracia, sem pegadinhas. O risco é meu, não seu.
          </p>
        </div>
      </div>
    </section>
  );
}

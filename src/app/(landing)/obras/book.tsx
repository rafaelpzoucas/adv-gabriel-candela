"use client";
import { layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "./cta-button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  "Técnicas de atuação penal.",
  "Como conquistar e fidelizar clientes.",
  "Gestão financeira para o advogado criminalista.",
  "Planejamento e execução de defesas consistentes.",
];

export function BookSection() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section className="bg-gradient-to-b from-amber-100/10 to-background">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 w-full max-w-7xl lg:border-x-2 border-amber-200/20 p-6 py-16 mx-auto">
        {/* Imagem desktop com fade + slide from left */}
        <div
          ref={imageRef}
          className={cn(
            "hidden lg:block transition-all duration-1000 ease-out",
            imageVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          )}
        >
          <Image
            src="/(landing)/obras/book.png"
            width={500}
            height={900}
            alt="Fotografia do livro Manual De Prática Penal"
          />
        </div>

        {/* Conteúdo com animações staggered */}
        <aside ref={contentRef} className="space-y-8">
          {/* Título + barra */}
          <div className="space-y-4">
            <h2
              className={cn(
                layout.fonts.highlight.className,
                "text-primary font-bold text-5xl",
                "transition-all duration-700 ease-out",
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              O livro
            </h2>
            <div
              className={cn(
                "w-24 h-3 bg-primary transition-all duration-500 delay-100",
                contentVisible ? "scale-x-100" : "scale-x-0"
              )}
            ></div>
          </div>

          {/* Imagem mobile */}
          <div className="lg:hidden relative w-full h-96">
            <Image
              src="/(landing)/obras/book.png"
              fill
              alt="Fotografia do livro Manual De Prática Penal"
              className="object-cover rounded-lg"
            />
          </div>

          {/* Subtítulo */}
          <h3
            className={cn(
              layout.fonts.highlight.className,
              "text-3xl font-bold max-w-md",
              "transition-all duration-700 ease-out delay-200",
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            Domine a prática penal, do planejamento à sentença.
          </h3>

          {/* Descrição */}
          <p
            className={cn(
              "text-muted-foreground max-w-md",
              "transition-all duration-700 ease-out delay-300",
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            Descubra como planejar casos, captar clientes e gerir sua advocacia
            penal de forma lucrativa.
          </p>

          {/* Features com stagger */}
          <div className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <span
                key={feature}
                className={cn(
                  "flex flex-row gap-2 items-start text-sm sm:text-base",
                  "transition-all duration-700 ease-out",
                  contentVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                )}
                style={{
                  transitionDelay: contentVisible
                    ? `${400 + index * 100}ms`
                    : "0ms",
                }}
              >
                <CheckCircle2
                  className="shrink-0 mt-0.5 text-primary"
                  size={20}
                />
                <span>{feature}</span>
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={cn(
              "flex flex-col md:flex-row gap-4",
              "transition-all duration-700 ease-out delay-700",
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <CTAButton>QUERO GARANTIR MEU EXEMPLAR AGORA</CTAButton>
            <CTAButton>PREFIRO EBOOK</CTAButton>
          </div>
        </aside>
      </div>
    </section>
  );
}

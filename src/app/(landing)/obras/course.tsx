"use client";
import { layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "./cta-button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  "Aulas completas.",
  "Fluxogramas e cadernos de apoio",
  "Certificado de conclusão.",
  'BÔNUS: e-book "Manual de Prática Penal: do Planejamento à Sentença"',
];

export function CourseSection() {
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
            src="/(landing)/obras/course.jpg"
            width={500}
            height={900}
            alt="Imagem ilustrativa do curso Criminal Real"
            className="rounded-lg"
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
              O curso
            </h2>
            <div
              className={cn(
                "w-24 h-3 bg-primary transition-all duration-500 delay-100",
                contentVisible ? "scale-x-100" : "scale-x-0"
              )}
            ></div>

            {/* Imagem mobile */}
            <div className="lg:hidden relative w-full h-96">
              <Image
                src="/(landing)/obras/course2.jpg"
                fill
                alt="Imagem ilustrativa do curso Criminal Real"
                className="object-cover rounded-lg"
              />
            </div>
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
            Aprofunde sua prática com o curso de Direito Penal Aplicado
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
            Do estudo à execução, orientação direta de quem atua diariamente na
            advocacia penal.
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

          {/* CTA */}
          <div
            className={cn(
              "transition-all duration-700 ease-out delay-700",
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <CTAButton>QUERO TER ACESSO</CTAButton>
          </div>
        </aside>
      </div>
    </section>
  );
}

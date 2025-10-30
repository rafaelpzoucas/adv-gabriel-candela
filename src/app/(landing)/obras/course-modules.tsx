"use client";
import { layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CTAButton } from "./cta-button";

const modules = [
  {
    title: "Módulo 1",
    description: "Boas-vindas",
  },
  {
    title: "Módulo 2",
    description: "O essencial para quem deseja atuar na advocacia criminal",
  },
  {
    title: "Módulo 3",
    description: "Desenvolvendo a carreira na advocacia",
  },
  {
    title: "Módulo 4",
    description: "O impacto da publicidade",
  },
  {
    title: "Módulo 5",
    description: "Colaboradores",
  },
  {
    title: "Módulo 6",
    description: "Clientes: Do contato ao contrato",
  },
  {
    title: "Módulo 7",
    description: "Honorários",
  },
  {
    title: "Módulo 8",
    description: "Investigação Criminal: O papel do advogado criminalista",
  },
  {
    title: "Módulo 9",
    description: "Atuação técnica e planejada",
  },
];

export function CourseModulesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section>
      <div className="flex flex-col gap-16 w-full max-w-7xl lg:border-x-2 border-amber-200/20 p-6 py-16 mx-auto">
        {/* Header com fade + slide up */}
        <div
          ref={headerRef}
          className={cn(
            "flex flex-col gap-6 items-center",
            "transition-all duration-700 ease-out",
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <h2
            className={cn(
              layout.fonts.highlight.className,
              "text-primary text-center max-w-md text-5xl font-bold"
            )}
          >
            Módulos do curso
          </h2>
          <div
            className={cn(
              "w-24 h-3 bg-primary transition-all duration-500 delay-200",
              headerVisible ? "scale-x-100" : "scale-x-0"
            )}
          ></div>
        </div>

        {/* Grid com stagger em zig-zag */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-5xl mx-auto"
        >
          {modules.map((module, index) => (
            <Card
              key={module.title}
              className={cn(
                "flex flex-col gap-2 p-6 bg-gradient-to-r from-background to-amber-100/10",
                "transition-all duration-700 ease-out",
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{
                transitionDelay: gridVisible ? `${index * 80}ms` : "0ms",
              }}
            >
              <strong
                className={cn(
                  "text-primary transition-all duration-500",
                  gridVisible ? "opacity-100" : "opacity-0"
                )}
                style={{
                  transitionDelay: gridVisible
                    ? `${index * 80 + 150}ms`
                    : "0ms",
                }}
              >
                {module.title}
              </strong>
              <span
                className={cn(
                  "transition-all duration-500",
                  gridVisible ? "opacity-100" : "opacity-0"
                )}
                style={{
                  transitionDelay: gridVisible
                    ? `${index * 80 + 250}ms`
                    : "0ms",
                }}
              >
                {module.description}
              </span>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={buttonRef}
          className={cn(
            "transition-all duration-700 ease-out delay-700 lg:mx-auto",
            buttonVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <CTAButton className="w-full">QUERO TER ACESSO</CTAButton>
        </div>
      </div>
    </section>
  );
}

"use client";
import { layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CTAButton } from "./cta-button";

const depoiments = [
  {
    name: "Carolina Almeida",
    role: "Bacharel em Direito",
    text: "Depois de me formar, pensei em desistir da advocacia. Sentia que o que aprendi na faculdade não me preparava pra realidade. O Manual de Prática Penal reacendeu em mim a vontade de seguir. Cada capítulo me lembrou por que escolhi o Direito. Quero e vou fazer diferença de verdade. Foi o empurrão que eu precisava pra continuar tentando.",
  },
  {
    name: "Larissa Monteiro",
    role: "Advogada",
    text: "Comecei a advogar achando que o tempo resolveria minha insegurança, mas foi o Manual que me deu o norte. A clareza com que o Dr. Gabriel explica cada etapa, do contato com o cliente à sentença, mudou minha rotina. Hoje atuo com confiança e já percebo o reflexo disso nos meus resultados e na quantidade de contratos fechados.",
  },
  {
    name: "Vinícius Rocha",
    role: "Estudante de Direito",
    text: "Ainda estou na graduação, mas depois de ler livro, tenho certeza absoluta de que quero ser advogado criminalista. O livro mostra a realidade da profissão com sinceridade, mas também com paixão. Ele me fez entender que a advocacia penal é feita de coragem e é exatamente nisso que quero basear minha carreira.",
  },
];

export function SocialProofSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation({
    threshold: 0.2,
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
            O que dizem nossos leitores
          </h2>
          <div
            className={cn(
              "w-24 h-3 bg-primary transition-all duration-500 delay-200",
              headerVisible ? "scale-x-100" : "scale-x-0"
            )}
          ></div>
        </div>

        {/* Carousel mobile */}
        <Carousel className="md:hidden">
          <CarouselContent className="-ml-2 md:-ml-4">
            {depoiments.map((depoiment) => (
              <CarouselItem
                key={depoiment.name}
                className="basis-4/5 pl-2 md:pl-4"
              >
                <div className="h-full">
                  <Card className="flex flex-col justify-between gap-2 p-6 bg-white text-background h-full min-h-[400px]">
                    <div className="py-4 flex-1">
                      <p>"{depoiment.text}"</p>
                    </div>
                    <div className="flex flex-col items-start border-t pt-4">
                      <strong className="text-lg font-bold">
                        {depoiment.name}
                      </strong>
                      <span className="text-sm">{depoiment.role}</span>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Grid desktop com stagger */}
        <div
          ref={cardsRef}
          className="hidden md:grid grid-cols-1 gap-6 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {depoiments.map((depoiment, index) => (
            <Card
              key={depoiment.name}
              className={cn(
                "flex flex-col justify-between gap-2 p-6 bg-white text-background",
                "transition-all duration-700 ease-out",
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{
                transitionDelay: cardsVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <div
                className={cn(
                  "py-4 transition-all duration-500",
                  cardsVisible ? "opacity-100" : "opacity-0"
                )}
                style={{
                  transitionDelay: cardsVisible
                    ? `${index * 150 + 200}ms`
                    : "0ms",
                }}
              >
                <p>"{depoiment.text}"</p>
              </div>
              <div
                className={cn(
                  "flex flex-col items-start border-t pt-4",
                  "transition-all duration-500",
                  cardsVisible ? "opacity-100" : "opacity-0"
                )}
                style={{
                  transitionDelay: cardsVisible
                    ? `${index * 150 + 300}ms`
                    : "0ms",
                }}
              >
                <strong className="text-lg font-bold">{depoiment.name}</strong>
                <span className="text-sm">{depoiment.role}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTAs */}
        <div
          ref={buttonsRef}
          className={cn(
            "flex flex-col md:flex-row gap-4 lg:mx-auto",
            "transition-all duration-700 ease-out delay-700",
            buttonsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <CTAButton href="https://loja.uiclap.com/titulo/ua97619/?srsltid=AfmBOooDRfnL0rtO6kvEAF3jv1zg5Qm0wt3ZViIN_-b8kvvFW94I_3uE">
            QUERO GARANTIR MEU EXEMPLAR AGORA
          </CTAButton>
          <CTAButton href="https://www.amazon.com.br/Manual-Pr%C3%A1tica-Penal-Planejamento-Senten%C3%A7a-ebook/dp/B0F9XR3X8H">
            PREFIRO EBOOK
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

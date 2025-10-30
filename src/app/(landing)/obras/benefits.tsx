"use client";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Scale, TrendingUp, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Resultados Concretos",
    image: "/(landing)/obras/benefit1.png",
    icon: Scale,
  },
  {
    title: "Aprenda a captar e manter clientes",
    image: "/(landing)/obras/benefit2.png",
    icon: Users,
  },
  {
    title: "Estruture uma advocacia penal rentável",
    image: "/(landing)/obras/benefit3.png",
    icon: TrendingUp,
  },
];

export function BenefitsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({
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
          <div
            className={cn(
              "w-24 h-3 bg-primary transition-all duration-500",
              headerVisible ? "scale-x-100" : "scale-x-0"
            )}
          ></div>
          <p className="text-center max-w-md">
            Formação em prática penal com materiais objetivos, organizados e
            baseados em casos reais.
          </p>
          <div
            className={cn(
              "w-24 h-3 bg-primary transition-all duration-500 delay-100",
              headerVisible ? "scale-x-100" : "scale-x-0"
            )}
          ></div>
        </div>

        {/* Carousel mobile */}
        <Carousel className="md:hidden">
          <CarouselContent>
            {benefits.map((benefit) => (
              <CarouselItem key={benefit.title} className="basis-3/4 h-[230px]">
                <Card className="flex flex-col gap-8 items-center text-center p-6 bg-gradient-to-b from-amber-100/10 to-background h-full">
                  <benefit.icon size={64} className="text-primary" />
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Grid desktop com stagger */}
        <div
          ref={cardsRef}
          className="hidden md:grid grid-cols-1 gap-6 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className={cn(
                "flex flex-col gap-8 items-center text-center p-6 bg-gradient-to-b from-amber-100/10 to-background",
                "transition-all duration-700 ease-out",
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{
                transitionDelay: cardsVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <benefit.icon
                size={64}
                className={cn(
                  "text-primary transition-all duration-500",
                  cardsVisible ? "scale-100 rotate-0" : "scale-75 -rotate-12"
                )}
                style={{
                  transitionDelay: cardsVisible
                    ? `${index * 150 + 200}ms`
                    : "0ms",
                }}
              />
              <h3 className="text-xl font-bold">{benefit.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

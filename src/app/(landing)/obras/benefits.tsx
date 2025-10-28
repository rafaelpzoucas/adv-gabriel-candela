"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Scale, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    title: "Resultados Concretos.",
    image: "/(landing)/obras/benefit1.png",
    icon: Scale,
  },
  {
    title: "Aprenda a captar e manter clientes.",
    image: "/(landing)/obras/benefit2.png",
    icon: Users,
  },
  {
    title: "Estruture uma advocacia penal rentável.",
    image: "/(landing)/obras/benefit3.png",
    icon: TrendingUp,
  },
];

export function BenefitsSection() {
  return (
    <section>
      <div className="flex flex-col gap-16 w-full max-w-7xl lg:border-x-2 border-amber-200/20 p-6 py-16 mx-auto">
        <div className="flex flex-col gap-6 items-center">
          <div className="w-24 h-3 bg-primary"></div>
          <p className="text-center max-w-md">
            Formação em prática penal com materiais objetivos, organizados e
            baseados em casos reais.
          </p>
          <div className="w-24 h-3 bg-primary"></div>
        </div>

        <Carousel className="md:hidden">
          <CarouselContent>
            {benefits.map((benefit) => (
              <CarouselItem key={benefit.title} className="basis-3/4 h-full">
                <Card className="flex flex-col gap-8 items-center text-center p-6 bg-gradient-to-b from-amber-100/10 to-background">
                  {/* <Image width={100} height={100} src={benefit.image} alt="" /> */}
                  <benefit.icon size={64} className="text-primary" />
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="hidden md:grid grid-cols-1 gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="flex flex-col gap-8 items-center text-center p-6 bg-gradient-to-b from-amber-100/10 to-background"
            >
              {/* <Image width={100} height={100} src={benefit.image} alt="" /> */}
              <benefit.icon size={64} className="text-primary" />

              <h3 className="text-xl font-bold">{benefit.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "./cta-button";

export function BookSection() {
  return (
    <section className="bg-gradient-to-b from-amber-100/10 to-background">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 w-full max-w-7xl lg:border-x-2 border-amber-200/20 p-6 py-16 mx-auto">
        <Image
          src="/(landing)/obras/book.png"
          width={500}
          height={900}
          alt="Fotografia do livro Manual De Prática Penal"
          className="hidden lg:block"
        />

        <aside className="space-y-8">
          <div className="space-y-4">
            <h2
              className={cn(
                layout.fonts.highlight.className,
                "text-primary font-bold text-5xl"
              )}
            >
              O livro
            </h2>
            <div className="w-24 h-3 bg-primary"></div>
          </div>

          <div className="lg:hidden relative w-full h-96">
            <Image
              src="/(landing)/obras/book.png"
              fill
              alt="Fotografia do livro Manual De Prática Penal"
              className=" object-cover rounded-lg"
            />
          </div>

          <h3
            className={cn(
              layout.fonts.highlight.className,
              "text-3xl font-bold max-w-md"
            )}
          >
            Domine a prática penal, do planejamento à sentença.
          </h3>

          <p className="text-muted-foreground max-w-md">
            Descubra como planejar casos, captar clientes e gerir sua advocacia
            penal de forma lucrativa.
          </p>

          <div className="flex flex-col gap-2">
            <span className="flex flex-row gap-2 items-start text-sm sm:text-base">
              <CheckCircle2
                className="shrink-0 mt-0.5 text-primary"
                size={20}
              />
              <span>Técnicas de atuação penal.</span>
            </span>
            <span className="flex flex-row gap-2 items-start text-sm sm:text-base">
              <CheckCircle2
                className="shrink-0 mt-0.5 text-primary"
                size={20}
              />
              <span>Como conquistar e fidelizar clientes.</span>
            </span>
            <span className="flex flex-row gap-2 items-start text-sm sm:text-base">
              <CheckCircle2
                className="shrink-0 mt-0.5 text-primary"
                size={20}
              />
              <span>Gestão financeira para o advogado criminalista.</span>
            </span>
            <span className="flex flex-row gap-2 items-start text-sm sm:text-base">
              <CheckCircle2
                className="shrink-0 mt-0.5 text-primary"
                size={20}
              />
              <span>Planejamento e execução de defesas consistentes.</span>
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <CTAButton>QUERO GARANTIR MEU EXEMPLAR AGORA</CTAButton>
            <CTAButton>PREFIRO EBOOK</CTAButton>
          </div>
        </aside>
      </div>
    </section>
  );
}

import { layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full h-[95dvh] bg-gradient-to-tr from-amber-100/10 to-background">
      <div className="relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl h-full mx-auto px-4 sm:px-6 lg:pl-16 lg:border-x-2 border-amber-200/20 pt-8 sm:pt-12 lg:pt-16 lg:min-h-[85dvh]">
          <aside className="flex flex-col items-center justify-center lg:justify-between gap-8 max-w-2xl w-full h-full max-h-[700px] lg:pb-12 ">
            <div className="space-y-4 sm:space-y-6">
              <h1
                className={cn(
                  layout.fonts.highlight.className,
                  "text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
                )}
              >
                Como transformar sua advocacia penal em uma{" "}
                <span className="text-primary">carreira sólida</span> e{" "}
                <span className="text-primary">bem-sucedida</span>.{" "}
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Saiba como advogados estão captando clientes, precificando
                honorários e crescendo na área criminal.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-200 from-20% via-white via-30% to-amber-600 text-primary-foreground font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base hover:opacity-90 transition-opacity">
                QUERO RESULTADOS
              </button>

              <span className="flex flex-row gap-2 items-start text-sm sm:text-base">
                <CheckCircle2 className="shrink-0 mt-0.5" size={20} />
                <span>
                  Livro e curso baseados em prática, metodologia aplicável e com
                  certificado de conclusão.
                </span>
              </span>
            </div>
          </aside>

          <div className="relative lg:absolute lg:bottom-0 lg:right-16 2xl:right-48 w-full max-w-5xl h-full xl:h-[95%] -z-10 mt-8 ">
            <Image
              src="/(landing)/obras/hero.png"
              fill
              alt="Fotografia de Dr. Gabriel Candela"
              className="object-contain lg:object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

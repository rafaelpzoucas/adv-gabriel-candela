import { layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "./cta-button";

export function HeroSection() {
  return (
    <section className="w-full h-[90vh] bg-gradient-to-bl from-[#443c30] to-background">
      <div className="relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl h-full mx-auto sm:px-6 lg:pl-16 lg:border-x-2 border-amber-200/20 pt-8 sm:pt-12 lg:pt-16 lg:min-h-[85dvh]">
          <aside className="flex flex-col justify-between lg:gap-8 max-w-2xl w-full h-full lg:max-h-[700px] lg:pb-12">
            {/* Título com fade + slide up automático */}
            <div className="space-y-4 sm:space-y-8 md:space-y-10 text-center lg:text-left px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1
                className={cn(
                  layout.fonts.highlight.className,
                  "text-3xl sm:text-4xl lg:text-6xl leading-8"
                )}
              >
                Como transformar sua advocacia penal em uma{" "}
                <span className="text-primary">carreira sólida</span> e{" "}
                <span className="text-primary">bem-sucedida</span>.{" "}
              </h1>
              <p className="text-base text-muted-foreground leading-5 lg:leading-snug animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Saiba como advogados estão captando clientes, precificando
                honorários e crescendo na área criminal.
              </p>
            </div>

            {/* CTA e badge com stagger delay */}
            <div className="space-y-6 sm:space-y-8 w-full">
              <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
                <div className="lg:hidden absolute bottom-0 w-full max-w-5xl h-[525px] -z-20 mt-8">
                  <Image
                    src="/(landing)/obras/hero.png"
                    fill
                    alt="Fotografia de Dr. Gabriel Candela"
                    className="object-contain min-[390px]:object-cover"
                    priority
                  />
                </div>
                <CTAButton />
              </div>

              <span className="flex flex-row gap-2 items-start text-sm sm:text-base bg-gradient-to-t from-black lg:bg-none px-6 pb-4 lg:p-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <CheckCircle2 className="shrink-0 mt-0.5" size={20} />
                <span>
                  Livro e curso baseados em prática, metodologia aplicável e com
                  certificado de conclusão.
                </span>
              </span>
            </div>
          </aside>

          {/* Imagem sem animação - fica sempre visível */}
          <div className="hidden lg:flex relative lg:absolute lg:bottom-0 lg:right-16 2xl:right-48 w-full max-w-5xl h-full xl:h-[95%] -z-10 mt-8">
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

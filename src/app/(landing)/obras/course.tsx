import { layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "./cta-button";

export function CourseSection() {
  return (
    <section className="bg-gradient-to-b from-amber-100/10 to-background">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 w-full max-w-7xl lg:border-x-2 border-amber-200/20 p-6 py-16 mx-auto">
        <Image
          src="/(landing)/obras/course.jpg"
          width={500}
          height={900}
          alt="Imagem ilustrativa do curso Criminal Real"
          className="hidden lg:block rounded-lg"
        />

        <aside className="space-y-8">
          <div className="space-y-4">
            <h2
              className={cn(
                layout.fonts.highlight.className,
                "text-primary font-bold text-5xl"
              )}
            >
              O curso
            </h2>
            <div className="w-24 h-3 bg-primary"></div>

            <div className="lg:hidden relative w-full h-96">
              <Image
                src="/(landing)/obras/course2.jpg"
                fill
                alt="Imagem ilustrativa do curso Criminal Real"
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <h3
            className={cn(
              layout.fonts.highlight.className,
              "text-3xl font-bold max-w-md"
            )}
          >
            Aprofunde sua prática com o curso de Direito Penal Aplicado
          </h3>

          <p className="text-muted-foreground max-w-md">
            Do estudo à execução, orientação direta de quem atua diariamente na
            advocacia penal.
          </p>

          <div className="flex flex-col gap-2">
            <span className="flex flex-row gap-2 items-start text-sm sm:text-base">
              <CheckCircle2
                className="shrink-0 mt-0.5 text-primary"
                size={20}
              />
              <span>Aulas completas.</span>
            </span>
            <span className="flex flex-row gap-2 items-start text-sm sm:text-base">
              <CheckCircle2
                className="shrink-0 mt-0.5 text-primary"
                size={20}
              />
              <span>Fluxogramas e cadernos de apoio</span>
            </span>
            <span className="flex flex-row gap-2 items-start text-sm sm:text-base">
              <CheckCircle2
                className="shrink-0 mt-0.5 text-primary"
                size={20}
              />
              <span>Certificado de conclusão.</span>
            </span>
            <span className="flex flex-row gap-2 items-start text-sm sm:text-base">
              <CheckCircle2
                className="shrink-0 mt-0.5 text-primary"
                size={20}
              />
              <span>
                BÔNUS: e-book “Manual de Prática Penal: do Planejamento à
                Sentença”
              </span>
            </span>
          </div>

          <CTAButton>QUERO TER ACESSO</CTAButton>
        </aside>
      </div>
    </section>
  );
}

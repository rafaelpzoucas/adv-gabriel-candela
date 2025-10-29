"use client";
import { layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AboutPage() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section className="bg-white">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 w-full max-w-7xl lg:border-x-2 border-amber-800/20 p-6 py-16 mx-auto">
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
            src="/(landing)/obras/about.png"
            width={500}
            height={900}
            alt="Fotografia do Dr. Gabriel Candela"
          />
        </div>

        {/* Conteúdo com animações staggered */}
        <aside ref={contentRef} className="text-background space-y-8 max-w-lg">
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
              Quem sou eu para te ensinar prática penal?
            </h2>
            <div
              className={cn(
                "w-24 h-3 bg-primary transition-all duration-500 delay-200",
                contentVisible ? "scale-x-100" : "scale-x-0"
              )}
            ></div>
          </div>

          {/* Imagem mobile */}
          <div className="lg:hidden relative w-full h-96">
            <Image
              src="/(landing)/obras/about.png"
              fill
              alt="Fotografia do Dr. Gabriel Candela"
              className="object-cover"
            />
          </div>

          {/* Parágrafos com stagger */}
          <div className="space-y-4 text-justify text-lg">
            <p
              className={cn(
                "transition-all duration-700 ease-out delay-300",
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              Sou Gabriel Candela, advogado criminalista inscrito na Ordem dos
              Advogados do Brasil, com formação pela Fundação do Município de
              Assis. Represento a terceira geração de uma família de advogados,
              o que me proporcionou contato precoce com o universo jurídico e
              consolidou minha vocação para o Direito Penal.
            </p>
            <p
              className={cn(
                "transition-all duration-700 ease-out delay-500",
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              Atuo em casos complexos, tanto na esfera estadual quanto federal,
              sempre pautado por princípios éticos e compromisso absoluto com a
              defesa dos direitos fundamentais. Além da advocacia, sou autor de
              artigos jurídicos publicados em portais de relevância nacional,
              contribuindo para o debate e o aprimoramento do pensamento
              jurídico.
            </p>
            <p
              className={cn(
                "transition-all duration-700 ease-out delay-700",
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              Com isso em mente, e com o desejo de tornar a advocacia penal mais
              acessível e eficiente, transformei minha experiência em artigos,
              no livro e no curso de Prática Penal, criados para aproximar o
              advogado da prática real.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

import { layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function AboutPage() {
  return (
    <section className="bg-white">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 w-full max-w-7xl lg:border-x-2 border-amber-800/20 p-6 py-16 mx-auto">
        <Image
          src="/(landing)/obras/about.png"
          width={500}
          height={900}
          alt="Fotografia do Dr. Gabriel Candela"
          className="hidden lg:block"
        />

        <aside className="text-background space-y-8 max-w-lg">
          <div className="space-y-4">
            <h2
              className={cn(
                layout.fonts.highlight.className,
                "text-primary font-bold text-5xl"
              )}
            >
              Quem sou eu para te ensinar prática penal?
            </h2>
            <div className="w-24 h-3 bg-primary"></div>
          </div>

          <div className="lg:hidden relative w-full h-96">
            <Image
              src="/(landing)/obras/about.png"
              fill
              alt="Fotografia do Dr. Gabriel Candela"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-justify text-lg">
            <p>
              Sou Gabriel Candela, advogado criminalista inscrito na Ordem dos
              Advogados do Brasil, com formação pela Fundação do Município de
              Assis. Represento a terceira geração de uma família de advogados,
              o que me proporcionou contato precoce com o universo jurídico e
              consolidou minha vocação para o Direito Penal.
            </p>
            <p>
              Atuo em casos complexos, tanto na esfera estadual quanto federal,
              sempre pautado por princípios éticos e compromisso absoluto com a
              defesa dos direitos fundamentais. Além da advocacia, sou autor de
              artigos jurídicos publicados em portais de relevância nacional,
              contribuindo para o debate e o aprimoramento do pensamento
              jurídico.
            </p>
            <p>
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

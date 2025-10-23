import { layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
  return (
    <section>
      <div className="flex flex-col gap-16 w-full max-w-7xl lg:border-x-2 border-amber-200/20 p-6 py-16 mx-auto">
        <div className="flex flex-col gap-6 items-center">
          <h2
            className={cn(
              layout.fonts.highlight.className,
              "text-primary text-center max-w-md text-5xl font-bold"
            )}
          >
            O que dizem nossos leitores
          </h2>
          <div className="w-24 h-3 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
          {depoiments.map((benefit) => (
            <Card
              key={benefit.name}
              className="flex flex-col gap-2 p-6 bg-white text-background"
            >
              <div className="border-b py-4 pb-8">
                <p>"{benefit.text}"</p>
              </div>

              <div className="flex flex-col items-start ">
                <strong className="text-lg font-bold">{benefit.name}</strong>
                <span className="text-sm">{benefit.role}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

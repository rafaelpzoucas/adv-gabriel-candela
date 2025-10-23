import { layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const modules = [
  {
    title: "Módulo 1",
    description: "Boas-vindas",
  },
  {
    title: "Módulo 2",
    description: "O essencial para quem deseja atuar na advocacia criminal",
  },
  {
    title: "Módulo 3",
    description: "Desenvolvendo a carreira na advocacia",
  },
  {
    title: "Módulo 4",
    description: "O impacto da publicidade",
  },
  {
    title: "Módulo 5",
    description: "Colaboradores",
  },
  {
    title: "Módulo 6",
    description: "Clientes: Do contato ao contrato",
  },
  {
    title: "Módulo 7",
    description: "Honorários",
  },
  {
    title: "Módulo 8",
    description: "Investigação Criminal: O papel do advogado criminalista",
  },
  {
    title: "Módulo 9",
    description: "Atuação técnica e planejada",
  },
];

export function CourseModulesSection() {
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
            Módulos do curso
          </h2>
          <div className="w-24 h-3 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          {modules.map((module) => (
            <Card
              key={module.title}
              className="flex flex-col gap-2 p-6 bg-gradient-to-r from-background to-amber-100/10 "
            >
              <strong className="text-primary">{module.title}</strong>
              <span>{module.description}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

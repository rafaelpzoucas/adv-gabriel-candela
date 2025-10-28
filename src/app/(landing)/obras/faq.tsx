"use client";

import { layout } from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const questions = [
  {
    question: "Qual o prazo de produção e entrega do livro?",
    answer:
      "Os livros são produzidos sob demanda, isto é, apenas após a compra é iniciado o processo de produção e envio do livro. Para a produção, o prazo é de 7 dias úteis, após a aprovação do pagamento.",
  },
  {
    question: "Como é feito o envio do livro?",
    answer: `A UICLAP possui os seguintes contratos para a entrega dos livros:
    Correios:

    Entrega Econômica (Impresso Módico)
    PAC
    Sedex
    Mandaê:

    Entrega econômica
    Rápido
    Não realizamos envios internacionais, os próprios escritores é que fazem o envio.`,
  },
  {
    question: "Como recebo o livro digital?",
    answer:
      "Após a compra pela Amazon, o livro digital ficará disponível automaticamente na sua conta. Você poderá acessá-lo imediatamente pelo aplicativo Kindle (disponível para celular, tablet, computador ou e-reader). Basta fazer login com a mesma conta utilizada na compra e o livro aparecerá na sua biblioteca Kindle, pronto para leitura.",
  },
  {
    question: "O curso Criminal Real oferece certificado?",
    answer:
      "Sim. Ao concluir todas as aulas, você poderá emitir o certificado digital de conclusão diretamente pela plataforma. Esse certificado é nominal, comprova sua participação no curso e pode ser utilizado para fins curriculares ou compartilhado em redes profissionais, como o LinkedIn.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: `Assim que a compra for confirmada, você receberá um e-mail com o acesso ao curso Criminal Real – Preparação, Prática e Posicionamento. Lá dentro, encontrará videoaulas, o livro digital, fluxogramas de prática penal e o certificado de conclusão.

      Você pode assistir e ler todo o conteúdo pelo computador, celular ou tablet, quando e onde quiser.

      Também é possível acessar diretamente por esta página:

      Clique em Entrar e faça login com o mesmo e-mail usado na compra.

      No menu lateral, selecione Minha conta.

      Depois, clique em Minhas compras.

      Dentro de “Minhas compras” no site Hotmart, estarão todos os produtos disponíveis, incluindo o acesso completo ao Criminal Real.`,
  },
];

export function FAQSection() {
  return (
    <section className="border-t border-amber-200/10">
      <div className="flex flex-col gap-16 w-full max-w-7xl p-6 py-16 mx-auto">
        <div className="flex flex-col gap-6 items-center">
          <h2
            className={cn(
              layout.fonts.highlight.className,
              "text-primary text-center max-w-md text-5xl font-bold"
            )}
          >
            Ainda tem dúvidas?
          </h2>
          <p>Confira as perguntas mais frequentes</p>
        </div>

        <Accordion
          type="single"
          className="grid grid-cols-1 gap-6 w-full max-w-5xl mx-auto"
          collapsible
        >
          {questions.map((question) => (
            <AccordionItem
              key={question.question}
              value={question.question}
              className=" bg-gradient-to-r from-background to-amber-100/10 border border-amber-200/10 p-4 px-8 rounded-lg text-xl"
            >
              <AccordionTrigger className="text-left">
                {question.question}
              </AccordionTrigger>
              <AccordionContent>{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

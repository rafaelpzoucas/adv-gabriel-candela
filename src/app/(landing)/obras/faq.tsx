"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "Qual o prazo de produção e entrega do livro?",
    answer: "",
  },
  {
    question: "Como é feito o envio do livro?",
    answer: "",
  },
  {
    question: "Como recebo o livro digital?",
    answer: "",
  },
  {
    question: "O curso Criminal Real oferece certificado?",
    answer: "",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "",
  },
];

export function FAQSection() {
  return (
    <section className="border-t border-amber-200/10">
      <div className="flex flex-col gap-16 w-full max-w-7xl p-6 py-16 mx-auto">
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-primary text-center max-w-md text-5xl font-bold">
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

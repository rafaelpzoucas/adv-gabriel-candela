'use client'

import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CornerRightDown } from 'lucide-react'
import { useState } from 'react'

const paragraphs = [
  'Prezados,',
  'Permitam-me apresentar-me de forma mais abrangente. Sou Gabriel Candela, um membro inscrito na Ordem dos Advogados do Brasil, pertencente à 27ª Subseção, localizada no estado de São Paulo. Minha formação jurídica foi realizada pela respeitada Fundação do Município de Assis.',
  'Como terceira geração de advogados em minha família, meu envolvimento com o Direito começou desde tenra idade, cultivando uma afinidade natural frente a complexidades legais. Esta trajetória culminou na obtenção do meu diploma na área, consolidando minha vocação e paixão pelo exercício da advocacia.',
  'Especializado e dedicado exclusivamente ao Direito Penal, tenho trabalhado incansavelmente para aprimorar minhas habilidades e conhecimentos nesta área específica. Ao longo da minha carreira, acumulei uma vasta experiência, vivenciando casos variados dentro do campo do Direito Criminal.',
  'Além disso, tenho o privilégio de ser autor de diversos artigos jurídicos, abordando uma ampla gama de temas relevantes, os quais foram publicados em conceituados portais de notícias. Esta contribuição acadêmica reflete meu compromisso com a disseminação do conhecimento e a promoção de debates construtivos no meio jurídico.',
  'Minha atuação estende-se por todo o território nacional, proporcionando-me uma visão abrangente e multifacetada das questões jurídicas que permeiam nossa sociedade.',
  'Como profissional, sou guiado por princípios éticos inabaláveis, comprometido com a justiça e o respeito aos direitos fundamentais de meus clientes. Minha missão é garantir que a lei seja aplicada de forma justa e equitativa, sempre buscando a melhor defesa dos interesses daqueles que represento.',
  'Agradeço a atenção disponibilizada e coloco-me à disposição para qualquer esclarecimento adicional que possa ser necessário.',
  'Atenciosamente, Dr. Candela.',
]

export function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Section className="!bg-white text-primary-foreground flex justify-center pb-20">
      <div className="max-w-3xl flex flex-col gap-8">
        <div className="flex flex-row items-center gap-4">
          <div className="w-4 h-16 bg-primary"></div>
          <h1
            className={cn(
              layout.fonts.highlight.className,
              'text-2xl md:text-4xl font-bold uppercase text-primary',
            )}
          >
            Quem sou
          </h1>
        </div>

        <div className="flex flex-col items-start gap-6 md:text-xl text-muted/70">
          {paragraphs.slice(0, 2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {isExpanded ? (
            <>
              {paragraphs.slice(2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          ) : (
            <Button variant={'secondary'} onClick={() => setIsExpanded(true)}>
              Continuar lendo <CornerRightDown className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}

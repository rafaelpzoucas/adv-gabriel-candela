import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import Image from 'next/image'
import violenceIcon from '../../public/icons/10.svg'
import criminalIcon from '../../public/icons/11.svg'
import sentenceIcon from '../../public/icons/12.svg'
import freedomIcon from '../../public/icons/13.svg'
import drugsIcon from '../../public/icons/5.svg'
import sexualIcon from '../../public/icons/6.svg'
import fraudeIcon from '../../public/icons/7.svg'
import stealIcon from '../../public/icons/8.svg'
import restrictionIcon from '../../public/icons/9.svg'

type ServiceType = {
  icon: any
  title: string
}

const services: ServiceType[] = [
  {
    icon: drugsIcon,
    title: 'Tráfico de drogas',
  },
  {
    icon: sexualIcon,
    title: 'Crimes sexuais',
  },
  {
    icon: fraudeIcon,
    title: 'Fraude',
  },
  {
    icon: stealIcon,
    title: 'Roubo ou furto',
  },
  {
    icon: restrictionIcon,
    title: 'Ordem de restrição',
  },
  {
    icon: violenceIcon,
    title: 'Violência doméstica',
  },
  {
    icon: criminalIcon,
    title: 'Defesa Criminal',
  },
  {
    icon: sentenceIcon,
    title: 'Execução da pena',
  },
  {
    icon: freedomIcon,
    title: 'Outro',
  },
]

export function Services() {
  function generateWhatsAppMessage(service: ServiceType) {
    if (service.title === 'Outro') {
      return 'Olá, estou buscando orientações legais relacionadas a um caso, poderia me representar?'
    }

    return `Olá, estou buscando orientações legais relacionadas a um caso de ${service.title}, poderia me representar?`
  }

  return (
    <Section
      id="services"
      className="flex flex-col items-center justify-center gap-16 md:gap-32"
    >
      <div className="relative flex flex-col gap-16 md:gap-32 max-w-7xl">
        <div className="w-2/3 max-w-sm h-8 md:h-12 bg-primary"></div>

        <h1
          className={cn(
            layout.fonts.highlight.className,
            'text-3xl md:text-5xl font-bold uppercase w-fit md:pr-16 md:-mt-16',
          )}
        >
          Qual sua história?
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 w-full ">
          {services.map((service, index) => (
            <Link
              href={`https://wa.me/${
                profile.phone
              }?text=${generateWhatsAppMessage(service)}`}
              key={index}
              className="flex flex-col items-center gap-2 md:gap-4 text-center w-full"
            >
              <div className="relative w-32 md:w-52 h-32 md:h-32">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg md:text-3xl font-bold text-primary">
                {service.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

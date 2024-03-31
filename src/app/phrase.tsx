import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import { profile } from '@/data/profile'
import logoWhite from '../../public/logo-white.svg'

export function Phrase() {
  return (
    <Section className="flex flex-col items-center gap-8 w-full bg-white text-primary py-20 px-4">
      <div className="flex flex-col items-start justify-center uppercase">
        <Image src={logoWhite} alt={profile.name} width={400} />
      </div>

      <p
        className={cn(
          layout.fonts.highlight.className,
          'text-xl text-center md:text-3xl max-w-[700px]',
        )}
      >
        O{' '}
        <span className="italic font-bold">
          &quot;Olho por olho e dente por dente&quot;
        </span>{' '}
        nada mais fará do que nos deixar todos cegos e desdentados.
      </p>

      <div className="w-3/4 max-w-[500px] h-1 bg-primary"></div>
    </Section>
  )
}

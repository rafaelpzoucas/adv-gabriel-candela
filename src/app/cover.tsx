'use client'

import Image from 'next/image'

import { layout } from '@/components/layout'
import { buttonVariants } from '@/components/ui/button'
import { cover } from '@/data/cover'
import { cta } from '@/data/cta'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import hero from '../../public/hero-image.jpg'
import logo from '../../public/logo.svg'

export function Cover() {
  const action = cta.actions[0]
  const headlines = [
    'Atuação em âmbito nacional',
    'Defesa criminal especializada em todo Brasil',
    'Tradição em direito penal: terceira geração de advogados',
    `Comprometimento com a justiça`,
  ]

  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0)
  const [animate, setAnimate] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length)
      setAnimate('animate-show-text')

      setTimeout(() => {
        setAnimate('')
      }, 1000)

      setTimeout(() => {
        setAnimate('animate-hide-text')
      }, 4000)
    }, 5000)

    return () => clearInterval(interval)
  }, []) // eslint-disable-line

  return (
    <section id="cover" className="flex items-center justify-center">
      <div className="fixed w-full h-screen">
        <Image
          src={hero}
          alt="background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <aside className="relative z-10 w-full md:max-w-6xl h-screen flex flex-col items-start justify-center text-left gap-4 md:gap-8 p-8">
        <Image src={logo} alt={profile.name} width={380} />

        <div className="flex flex-col gap-4 h-[300px]">
          <span>{cover.subtitle}</span>
          <h1
            id="headline"
            className={cn(
              layout.fonts.highlight.className,
              'text-3xl md:text-6xl font-bold text-primary uppercase max-w-4xl hyphens-manual transition-all duration-1000',
              animate,
            )}
          >
            {headlines[currentHeadlineIndex]}
          </h1>
        </div>
        <p className="text-muted-foreground md:text-xl md:max-w-3xl">
          {cover.paragraph}
        </p>

        <Link
          href={action.link}
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'w-full md:w-fit h-14',
          )}
        >
          <action.icon className="text-lg mr-2" />
          {action.button_text}
        </Link>
      </aside>
    </section>
  )
}

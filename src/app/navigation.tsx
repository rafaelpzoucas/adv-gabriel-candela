import { Section } from '@/components/section'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Link from 'next/link'

import Image from 'next/image'
import articleIcon from '../../public/icons/1.svg'
import phoneIcon from '../../public/icons/2.svg'
import locationIcon from '../../public/icons/3.svg'
import socialIcon from '../../public/icons/4.svg'

const links = [
  {
    icon: articleIcon,
    title: 'Artigos',
    link: '#articles',
  },
  {
    icon: phoneIcon,
    title: 'Contato',
    link: '#footer',
  },
  {
    icon: locationIcon,
    title: 'Maps',
    link: '#footer',
  },
  {
    icon: socialIcon,
    title: 'Redes sociais',
    link: '#footer',
  },
]

export function Navigation() {
  return (
    <Section className="relative w-full p-8 md:p-20 !bg-white flex items-center justify-center">
      <div className="hidden relative z-10 md:grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl">
        {links.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className="flex flex-col gap-4 items-center justify-center"
          >
            <div className="flex items-center justify-center w-full md:w-3/4 aspect-square bg-secondary rounded-3xl">
              <Image src={link.icon} alt={link.title} width={128} />
            </div>
            <p className="uppercase md:text-xl font-bold text-primary">
              {link.title}
            </p>
          </Link>
        ))}
      </div>

      <Carousel>
        <CarouselContent className="relative z-10 w-full md:hidden">
          {links.map((link, index) => (
            <CarouselItem className="flex-[0_0_40%]" key={index}>
              <Link
                href={link.link}
                className="flex flex-col gap-4 items-center justify-center w-"
              >
                <div className="flex items-center justify-center w-full md:w-3/4 aspect-square bg-secondary rounded-3xl">
                  <Image src={link.icon} alt={link.title} width={64} />
                </div>
                <p className="uppercase md:text-xl font-bold text-primary text-center">
                  {link.title}
                </p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-0 left-0 right-0 bg-background w-full h-4/5 md:h-3/5"></div>
    </Section>
  )
}

'use client'

import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { cn } from '@/lib/utils'

import { useState } from 'react'

import Image from 'next/image'
import img1 from '../../public/office/1.png'
import img2 from '../../public/office/2.png'
import img3 from '../../public/office/3.png'
import img4 from '../../public/office/4.png'

const images = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
]

export function Office() {
  const [selectedImage, setSelectedImage] = useState(images[0].src)

  return (
    <Section
      id="articles"
      className="flex flex-col items-center justify-center gap-16 md:gap-32 !bg-white text-primary"
    >
      <div className="relative flex flex-col gap-16 md:gap-32 w-full max-w-7xl">
        <div className="relative flex flex-col gap-16 md:gap-32">
          <div className="w-2/3 max-w-sm h-6 md:h-8 bg-primary"></div>

          <div className="flex flex-row items-center gap-4">
            <h1
              className={cn(
                layout.fonts.highlight.className,
                'text-3xl md:text-5xl font-bold uppercase w-fit md:pr-16',
              )}
            >
              Escritório
            </h1>

            <div className="w-32 md:w-96 h-1 bg-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 md:gap-4 w-full max-w-7xl">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={selectedImage.src}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {images.map((img, index) => (
              <div
                className={cn(
                  'relative w-full aspect-square md:aspect-video cursor-pointer rounded-xl overflow-hidden',
                  img.src === selectedImage &&
                    'ring-4 ring-primary transition-all duration-100',
                )}
                key={index}
                onClick={() => setSelectedImage(img.src)}
              >
                <Image src={img.src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

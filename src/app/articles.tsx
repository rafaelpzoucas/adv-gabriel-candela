import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { articles } from '@/data/articles'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Articles() {
  return (
    <Section
      id="articles"
      className="flex flex-col items-center justify-center gap-16 md:gap-32 bg-white text-primary"
    >
      <div className="relative flex flex-col gap-16 md:gap-32 max-w-7xl">
        <div className="relative flex flex-col gap-16 md:gap-32">
          <div className="w-2/3 max-w-sm h-6 md:h-8 bg-primary"></div>

          <div className="flex flex-row items-center gap-4">
            <h1
              className={cn(
                layout.fonts.highlight.className,
                'text-3xl md:text-5xl font-bold uppercase w-fit md:pr-16',
              )}
            >
              Artigos
            </h1>

            <div className="w-32 md:w-96 h-1 bg-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-7xl">
          {articles.data.map((article) => (
            <Card
              key={article.id}
              className="flex flex-col gap-2 sm:gap-4 overflow-hidden bg-white text-primary-foreground border-foreground"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={article.cover_img}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-4 pt-0">
                <strong>{article.title}</strong>
                <p className="text-sm text-muted line-clamp-3">
                  {article.summary}
                </p>

                <div className="flex justify-end w-full">
                  <Link
                    href={`/articles/${article.id}`}
                    className={cn(
                      buttonVariants({ variant: 'link' }),
                      'flex flex-row gap-2 items-center text-primary',
                    )}
                  >
                    Ler artigo completo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

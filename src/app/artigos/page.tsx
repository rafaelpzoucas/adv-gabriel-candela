import { Section } from '@/components/section'
import { Header } from '../header'
import { cn } from '@/lib/utils'
import { layout } from '@/components/layout'
import { articles } from '@/data/articles'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function ArticlesPage() {
  return (
    <main>
      <Header />

      <Section className="flex justify-center !bg-transparent mt-28">
        <div className="max-w-7xl space-y-16">
          <div className="relative flex flex-col gap-8 md:gap-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.data.map((article) => (
              <Card
                key={article.id}
                className="flex flex-row gap-2 sm:gap-4 overflow-hidden bg-background"
              >
                <div className="relative min-w-[200px] h-[200px]">
                  <Image
                    src={article.cover_img}
                    alt={article.title}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="flex flex-col gap-4 p-4">
                  <strong>{article.title}</strong>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="flex justify-end w-full">
                    <Link
                      href={`/artigos/${article.id}`}
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
    </main>
  )
}

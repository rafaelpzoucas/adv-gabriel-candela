import { Header } from '@/app/header'
import { layout } from '@/components/layout'
import { buttonVariants } from '@/components/ui/button'
import { articles } from '@/data/articles'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.data.filter(
    (article) => article.id.toString() === params.slug,
  )[0]
  return (
    <main className="flex flex-col items-center">
      <Header />
      <header className="flex w-full h-[400px] justify-center">
        <div className="fixed w-full h-[400px]">
          <Image
            src={article.cover_img}
            alt={article.title}
            fill
            className="object-cover opacity-30 grayscale"
          />
        </div>

        <div className="flex flex-col items-start justify-end w-full max-w-5xl h-[400px] z-10 p-8 md:p-16">
          <h1
            className={cn(
              layout.fonts.highlight.className,
              'text-3xl uppercase md:text-5xl font-bold text-primary',
            )}
          >
            {article.title}
          </h1>
          <p className="text-lg">{article.subtitle}</p>
        </div>
      </header>

      <div className="flex flex-col items-center gap-8 w-full p-4 md:p-16 z-10 bg-background">
        <article className="flex flex-col items-center gap-8 w-full p-4 md:p-16 z-10 bg-background">
          <p className="text-muted-foreground text-lg md:text-xl max-w-4xl whitespace-pre-line ">
            {article.body}
          </p>
        </article>

        <footer className="flex flex-col items-center gap-8 w-full p-4 md:p-16 z-10 bg-background">
          <h3 className="font-bold text-xl">Referências</h3>

          <div className="max-w-[320px] md:max-w-4xl">
            {article.references.map((ref, index) => (
              <Link
                href={ref}
                key={ref}
                className={cn(buttonVariants({ variant: 'link' }), 'px-0')}
              >
                <p className="truncate w-[320px] md:w-[896px]">
                  [{index + 1}] {ref}
                </p>
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </main>
  )
}

import { layout } from '@/components/layout'
import { About } from './about'
import { Articles } from './articles'
import { Copyright } from './copyright'
import { Cover } from './cover'
import { Footer } from './footer'
import { Header } from './header'
import { Navigation } from './navigation'
import { Office } from './office'
import { Phrase } from './phrase'
import { Services } from './services'

export default function Home() {
  return (
    <main className="">
      {layout.header && <Header />}
      {layout.cover && <Cover />}
      <div className="relative z-20 bg-background">
        <Phrase />
        <Navigation />
        <Services />
        <About />
        {layout.articles && <Articles />}
        <Office />
        {layout.footer && <Footer />}
        {layout.copyright && <Copyright />}
      </div>
    </main>
  )
}

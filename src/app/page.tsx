import { layout } from '@/components/layout'
import { About } from './about'
import { Articles } from './articles'
import { Benefits } from './benefits'
import { CallToAction } from './call-to-action'
import { Copyright } from './copyright'
import { Cover } from './cover'
import { Faq } from './faq'
import { Features } from './features'
import { Footer } from './footer'
import { Header } from './header'
import { Metrics } from './metrics'
import { Navigation } from './navigation'
import { Office } from './office'
import { Phrase } from './phrase'
import { Services } from './services'
import { SocialProof } from './social-proof'

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
        {layout.metrics && <Metrics />}
        {layout.features && <Features />}
        {layout.cta && <CallToAction />}
        {layout.benefits && <Benefits />}
        {layout.articles && <Articles />}
        <Office />
        {layout.social_proof && <SocialProof />}
        {layout.faq && <Faq />}
        {layout.footer && <Footer />}
        {layout.copyright && <Copyright />}
      </div>
    </main>
  )
}

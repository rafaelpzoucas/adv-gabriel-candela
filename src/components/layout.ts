import {
  Frank_Ruhl_Libre as FrankRuhlLibre,
  Montserrat,
} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const playfair = FrankRuhlLibre({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const layout = {
  fonts: {
    default: montserrat,
    highlight: playfair,
  },
  header: false,
  cover: true,
  metrics: false,
  features: false,
  cta: false,
  benefits: false,
  articles: true,
  social_proof: false,
  faq: false,
  footer: true,
  copyright: true,
}

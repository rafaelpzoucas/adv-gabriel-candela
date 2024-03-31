import { ProfileType } from '@/model/profile'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import logoImg from '../../public/logo.svg'

export const profile: ProfileType = {
  logo: logoImg,
  name: 'Gabriel Candela',
  phone: '5518997731225',
  email: 'gabrielcandela.adv@gmail.com',
  address: 'Av. Rui Barbosa, 15 - Edifício Vieira Dias, Sala Nº 20',
  role: 'Advogado',
  about:
    'Gabriel Candela, advogado especializado em Direito Penal, com vasta experiência e contribuições acadêmicas. Comprometido com ética, justiça e defesa dos direitos fundamentais dos clientes em todo o Brasil.',
  social: [
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://facebook.com/advogado',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://instagram.com/advogado',
    },
  ],
}

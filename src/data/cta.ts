import { FaWhatsapp } from 'react-icons/fa'
import { profile } from './profile'

export const cta = {
  title: ' Agende uma reunião para discutir o seu caso.',
  subtitle: 'Entre em contato',
  actions: [
    {
      icon: FaWhatsapp,
      button_text: 'Entre em contato',
      link: `https://wa.me/${profile.phone}`,
    },
  ],
}

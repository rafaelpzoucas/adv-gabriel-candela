import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button'
import { footer } from '@/data/footer'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.svg'

export function Footer() {
  return (
    <Section className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
        {footer.about && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-2">
              <Image
                src={profile.logo}
                alt={profile.name}
                width={150}
                height={47}
              />
            </div>

            <p className="text-muted-foreground">{profile.about}</p>

            <div className="flex flex-row gap-2">
              {profile.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={cn(
                    buttonVariants({ variant: 'secondary', size: 'icon' }),
                  )}
                >
                  <social.icon className="text-xl" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {footer.maps.active && (
          <iframe
            src={footer.maps.src}
            width="100%"
            className="aspect-square md:aspect-video rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}

        <div className="flex flex-col gap-4 text-primary">
          <Image src={logo} alt={profile.name} width={400} />

          <div className="flex flex-row items-center gap-2 py-2">
            <Phone className="w-5 h-5" />
            <p>{profile.phone}</p>
          </div>
          <div className="flex flex-row items-center gap-2 py-2">
            <Mail className="w-5 h-5" />
            <p>{profile.email}</p>
          </div>
          <div className="flex flex-row items-center gap-2 py-2">
            <MapPin className="w-5 h-5" />
            <p>{profile.address}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

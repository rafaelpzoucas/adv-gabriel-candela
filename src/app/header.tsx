import { profile } from '@/data/profile'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-center p-4 backdrop-blur-sm">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image
            src={profile.logo}
            alt={profile.name}
            width={263}
            height={40}
          />
        </Link>
      </div>
    </header>
  )
}

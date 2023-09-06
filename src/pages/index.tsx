
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Image
            className="logo"
            src="/logo.png"
            alt="PIE Aperture Logo"
            width={128}
            height={128}
            priority
            />
        <h1>Welcome to PIE Aperture</h1>
        <p><Link href="/components">PIE Component Test Page</Link></p>
    </>
  )
}

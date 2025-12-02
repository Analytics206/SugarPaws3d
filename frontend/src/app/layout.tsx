import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { Fredoka } from 'next/font/google';

const display = Fredoka({ subsets: ['latin'], weight: ['700'] });

export const metadata: Metadata = {
  title: 'SugarPaws3D',
  description: 'Playful 3D model showcases for 3D printing',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.className} min-h-screen bg-berryBlue text-sugarPink antialiased`}>
        <header className="fixed top-0 left-0 right-0 z-30">
          <div className="relative w-full bg-sugarPink/90 h-[160px] overflow-hidden">
            <Link href="/" className="absolute top-0 left-0 m-0" aria-label="SugarPaws3D home">
              <Image src="/assets/images/sugarpaws_logo_clear_02.png" alt="SugarPaws3D" width={160} height={160} className="block" priority />
            </Link>
            <nav className="absolute top-0 right-0 flex gap-6 text-sm m-0 p-0">
              <Link href="/models" className="hover:text-sugarPink">Models</Link>
              <Link href="/about" className="hover:text-sugarPink">About</Link>
              <Link href="/contact" className="hover:text-sugarPink">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="px-6 sm:px-8 pt-[170px] pb-12">
          {children}
        </main>
        <footer className="mt-16 border-t border-berryBlue/30 bg-berryBlue">
          <div className="px-6 sm:px-8 py-6 text-sm text-sugarPink flex items-center justify-between">
            <p>© {new Date().getFullYear()} SugarPaws3D. All rights reserved.</p>
            <a
              className="rounded-xl bg-cherryRed px-4 py-2 font-semibold text-white shadow-soft hover:opacity-90"
              href="https://www.patreon.com/SugarPaws3D"
              target="_blank"
              rel="noreferrer"
            >
              Support on Patreon
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SugarPaws3D',
  description: 'Playful 3D model showcases for 3D printing',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-slate-800 antialiased">
        <header className="sticky top-0 z-20 bg-cream/80 backdrop-blur shadow-soft">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-2xl font-extrabold text-sugarPink">SugarPaws3D</Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/models" className="hover:text-sugarPink">Models</Link>
              <Link href="/about" className="hover:text-sugarPink">About</Link>
              <Link href="/contact" className="hover:text-sugarPink">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
        <footer className="mt-16 border-t border-berryBlue/30 bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600 flex items-center justify-between">
            <p>© {new Date().getFullYear()} SugarPaws3D. All rights reserved.</p>
            <a
              className="rounded-xl bg-cherryRed px-4 py-2 font-semibold text-white shadow-soft hover:opacity-90"
              href="https://www.patreon.com/"
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

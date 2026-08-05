import './globals.css';
import type { Metadata } from 'next';
import AnimatedCursor from '@/components/AnimatedCursor';

export const metadata: Metadata = {
  title: 'Rumman Ahmed | AI & Computer Vision Researcher',
  description: 'Premium portfolio of Rumman Ahmed – Computer Engineer, AI researcher, embedded systems expert, and future MS in Artificial Intelligence student.',
  metadataBase: new URL('https://rumman04.github.io'),
  openGraph: {
    title: 'Rumman Ahmed | AI & Computer Vision Researcher',
    description: 'Premium portfolio showcasing AI, computer vision, embedded systems and research work.',
    type: 'website',
    url: 'https://rumman04.github.io',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Rumman Ahmed Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rumman Ahmed | AI & Computer Vision Researcher',
    description: 'Premium portfolio showcasing AI, computer vision, embedded systems and research work.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <AnimatedCursor />
      </body>
    </html>
  );
}

import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Flysound',
  description: 'Ultra-discreet, AI-powered hearing aids at an affordable price. 45-day risk-free trial. Free shipping. Experience crystal-clear hearing with Flysound.',
  url: 'https://www.fly.clawpod.net',
  ogImage: '/og-image.png',
  keywords: [
    'hearing aids',
    'hearing loss',
    'affordable hearing aids',
    'invisible hearing aids',
    'rechargeable hearing aids',
    'hearing technology',
    'Flysound',
  ],
}

export function generateBaseMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...overrides,
  }
}
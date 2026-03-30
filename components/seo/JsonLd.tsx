export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Flysound',
    description: 'Ultra-discreet, AI-powered hearing aids at an affordable price.',
    url: 'https://www.fly.clawpod.net',
    logo: 'https://www.fly.clawpod.net/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-FLYSOUND',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [],
  }

  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Flysound Hearing Aids',
    description: 'Ultra-discreet, AI-powered hearing aids with advanced noise reduction technology.',
    brand: {
      '@type': 'Brand',
      name: 'Flysound',
    },
    offers: {
      '@type': 'Offer',
      price: '299',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Flysound',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1250',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Flysound',
    url: 'https://www.fly.clawpod.net',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.fly.clawpod.net/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
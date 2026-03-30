import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

const includes = [
  'Both hearing aids',
  'Charging case',
  'Multiple ear tip sizes',
  '45-day trial',
  '1-year warranty',
  'Lifetime support',
]

export default function Pricing() {
  return (
    <Section id="pricing">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="heading-2 mb-4">Transparent, Affordable Pricing</h2>
        <p className="text-lg text-gray-600 mb-8">
          Premium hearing technology without the premium price tag.
        </p>
        
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="mb-6">
            <span className="text-5xl md:text-6xl font-bold text-brand-text">$299</span>
            <span className="text-xl text-gray-500"> / pair</span>
          </div>
          
          <div className="border-t border-gray-200 pt-6 mb-8">
            <p className="text-sm font-semibold text-gray-900 mb-4">What's Included:</p>
            <ul className="space-y-3">
              {includes.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button size="lg" className="w-full">
            Get Started Today
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Free shipping • 45-day risk-free trial
          </p>
        </div>
      </div>
    </Section>
  )
}
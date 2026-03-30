import Section from '@/components/ui/Section'

const steps = [
  {
    number: '1',
    title: 'Take Our Hearing Quiz',
    description: '2 minutes to assess your needs',
  },
  {
    number: '2',
    title: 'We Ship Your Flysound',
    description: 'Delivered to your door in 3-5 days',
  },
  {
    number: '3',
    title: 'Hear the Difference',
    description: '45-day risk-free trial',
  },
]

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/10">
      <div className="text-center mb-12">
        <h2 className="heading-2 mb-4">Simple as 1-2-3</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Getting started with Flysound is easy.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-primary/20" />
            )}
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="heading-3 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
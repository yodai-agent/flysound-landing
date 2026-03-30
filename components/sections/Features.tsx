import Section from '@/components/ui/Section'
import { Eye, Cpu, Heart, Bluetooth, Battery, DollarSign } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'Virtually Invisible',
    description: 'Sleek, modern design so discreet, even you\'ll forget you\'re wearing it.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Clarity',
    description: 'Advanced noise reduction separates speech from background noise in real-time.',
  },
  {
    icon: Heart,
    title: 'All-Day Comfort',
    description: 'Lightweight ergonomic fit designed for 16+ hours of comfortable wear.',
  },
  {
    icon: Bluetooth,
    title: 'Seamless Connectivity',
    description: 'Connect directly to your phone, TV, and music for a personalized audio experience.',
  },
  {
    icon: Battery,
    title: 'Rechargeable',
    description: 'No more tiny batteries. One charge lasts all day.',
  },
  {
    icon: DollarSign,
    title: 'Affordable',
    description: 'Premium hearing technology at a fraction of traditional costs.',
  },
]

export default function Features() {
  return (
    <Section id="features" className="bg-brand-light-gray">
      <div className="text-center mb-12">
        <h2 className="heading-2 mb-4">Why Choose Flysound?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Premium hearing technology designed for modern life.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="heading-3 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
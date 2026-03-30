import Section from '@/components/ui/Section'

export default function ProblemSolution() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="heading-2 mb-6">
            You Deserve to{' '}
            <span className="text-brand-primary">Hear Every Word</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Missing conversations? Struggling in noisy restaurants? Turning up the TV too loud?
          </p>
          <p className="text-lg text-gray-600 mb-6">
            You're not alone. Over <strong>466 million people worldwide</strong> experience hearing loss. 
            Flysound delivers the clarity you've been missing — without the stigma of traditional hearing aids.
          </p>
          <ul className="space-y-3">
            {[
              'Reconnect with family and friends',
              'Enjoy restaurants and social gatherings again',
              'Watch TV at normal volumes',
              'Feel confident in every conversation',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative">
          <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8">
            {/* Sound wave visualization */}
            <div className="flex items-center justify-center gap-1 h-48">
              {[40, 65, 45, 80, 55, 90, 60, 75, 50, 85, 70, 95, 65, 80, 55].map((h, i) => (
                <div
                  key={i}
                  className="w-2 bg-brand-primary/60 rounded-full animate-pulse"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1s',
                  }}
                />
              ))}
            </div>
            <p className="text-center text-gray-500 mt-4">AI-Powered Sound Processing</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
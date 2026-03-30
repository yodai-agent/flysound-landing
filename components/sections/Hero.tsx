import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/10 pt-20">
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 text-balance mb-6">
            Hear Life{' '}
            <span className="text-brand-primary">Clearly</span>{' '}
            Again
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ultra-discreet, crystal-clear hearing technology that reconnects you to the moments that matter most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg">
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>45-Day Risk-Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>1-Year Warranty</span>
            </div>
          </div>
        </div>
        
        {/* Product visual placeholder */}
        <div className="mt-16 relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full opacity-20 blur-3xl absolute left-1/2 -translate-x-1/2 -top-4"></div>
          <div className="relative z-10">
            <div className="w-16 h-24 mx-auto bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-xl">
              <div className="w-4 h-4 bg-brand-primary rounded-full mx-auto mt-2"></div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Virtually Invisible Design</p>
          </div>
        </div>
      </div>
    </section>
  )
}
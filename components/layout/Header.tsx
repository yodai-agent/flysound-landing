import Button from '@/components/ui/Button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container-max px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" aria-label="Flysound Home">
          <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          <span className="text-xl font-bold text-brand-text">Flysound</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-brand-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-brand-primary transition-colors">How It Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-brand-primary transition-colors">Pricing</a>
          <a href="#faq" className="text-gray-600 hover:text-brand-primary transition-colors">FAQ</a>
        </div>
        
        <Button size="sm">Start Free Trial</Button>
      </nav>
    </header>
  )
}
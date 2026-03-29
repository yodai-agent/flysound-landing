import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import ProblemSolution from '@/components/sections/ProblemSolution'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Flysound - Crystal-Clear Hearing Aids | Hear Life Clearly Again',
  description: 'Ultra-discreet, AI-powered hearing aids at an affordable price. 45-day risk-free trial. Free shipping. Experience crystal-clear hearing with Flysound.',
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <ProblemSolution />
        <Features />
        <Testimonials />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
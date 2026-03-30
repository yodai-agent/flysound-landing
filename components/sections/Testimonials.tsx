import Section from '@/components/ui/Section'
import StarRating from '@/components/ui/StarRating'

const testimonials = [
  {
    quote: "I forgot I was wearing them within an hour. My family noticed the difference immediately.",
    name: 'Margaret T.',
    age: '67',
    rating: 5,
  },
  {
    quote: "Finally, I can hear my grandchildren clearly. It's changed my life.",
    name: 'Robert J.',
    age: '72',
    rating: 5,
  },
  {
    quote: "The noise cancellation in restaurants is incredible. I'm back in the conversation.",
    name: 'Susan M.',
    age: '58',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="heading-2 mb-4">Real People, Real Results</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join thousands who have rediscovered the joy of clear hearing.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          >
            <StarRating rating={testimonial.rating} />
            <blockquote className="mt-4 text-gray-700 italic">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">Age {testimonial.age}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
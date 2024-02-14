import Courses from '@/components/courses/Courses'
import Cravings from '@/components/cravings/Cravings'
import Hero from '@/components/hero/Hero'
import Register from '@/components/register/Register'
import Stats from '@/components/stats/Stats'
import TestimonialSection from '@/components/testimonial/TestimonialSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
  
      <div className='divider'></div>
      <div> <Stats /> </div>
      <div> <Courses /> </div>
      <div> <Cravings /></div>
      <div> <Register /> </div>
      <div> <TestimonialSection /> </div>
      <div>
        Food Show case
      </div>
      <div>
        Trending Recipes
      </div>
      <div>
        Featured Products
      </div>
      <div>
        testimonials
      </div>
      <div>
        Kitchen Cabinet
      </div>
      <div>
        our certifications
      </div>
      <div>
        meet the team
      </div>
      <div>
        Footer
      </div>
    </main>
  )
}

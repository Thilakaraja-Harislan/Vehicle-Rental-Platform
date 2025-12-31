import { testimonials } from '../assets/assets'
import { Title } from './Title'

export default function Testimonial() {
  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <div className="pt-14 pb-10 bg-fuchsia-100 mb-10">

      <Title title='What Our Customers Say' subTitle='Discover why travelers and locals choose FlexiRide for their transportation needs.'/>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap items-center justify-center gap-8 px-4 md:px-8 max-w-7xl mx-auto mt-24">
        {displayedTestimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="text-sm w-full sm:w-80 border border-gray-200 pb-8 rounded-xl bg-white shadow-[0px_8px_30px_0px] shadow-fuchsia-100 hover:shadow-fuchsia-200 transition-shadow duration-300"
          >
            <div className="flex flex-col items-center px-6 py-6 relative">
              <img 
                className="h-30 w-30 absolute -top-12 rounded-full border-4 border-white shadow-lg" 
                src={testimonial.image} 
                alt={testimonial.name} 
              />
              <div className="pt-16 text-center">
                <h1 className="text-xl font-semibold text-gray-800">{testimonial.name}</h1>
                <p className="text-fuchsia-600 font-medium">{testimonial.role}</p>
                <p className="text-gray-500 text-sm mt-1">{testimonial.location}</p>
              </div>
            </div>
            
            <div className="flex justify-center mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    width="20" 
                    height="20" 
                    viewBox="0 0 22 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={i < testimonial.rating ? "text-amber-400" : "text-gray-300"}
                  >
                    <path 
                      d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" 
                      fill="currentColor"
                    />
                  </svg>
                ))}
              </div>
            </div>
            
            <p className="text-gray-600 px-6 text-center leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium rounded-lg transition-colors duration-300">
          View More Testimonials
        </button>
      </div>
    </div>
  );
}
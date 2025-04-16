import { ArrowRight, Users, Clock, Utensils, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">Delicious Meals for Campus Life</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Enjoy healthy, homestyle meals right on campus. Flexible meal plans designed for student life.
            </p>
            <div className="flex gap-4">
              <Link
                to="/order"
                className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors inline-flex items-center"
              >
                Join Now <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Happy Students', value: '500+' },
              { icon: Clock, label: 'Years of Service', value: '4+' },
              { icon: Utensils, label: 'Meals Served Daily', value: '1500+' },
              { icon: Award, label: 'Quality Rating', value: '4.8/5' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                  <stat.icon size={24} className="text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Menu Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Vegetarian',
                image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Fresh and healthy vegetarian options.'
              },
              {
                title: 'Non-Vegetarian',
                image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Protein-rich non-veg dishes.'
              },
              {
                title: 'Tiffin Service',
                image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Packed meals delivered to you.'
              },
              {
                title: 'Special Diet',
                image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Customized meals for dietary needs.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
                  >
                    View Menu <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Chen',
                course: 'Computer Science',
                content: 'The food quality is consistently great, and the monthly meal plan saves me both time and money.'
              },
              {
                name: 'Sarah Patel',
                course: 'Business Admin',
                content: 'Love the variety of options! The vegetarian meals are delicious and the staff is always friendly.'
              },
              {
                name: 'Mike Thompson',
                course: 'Engineering',
                content: 'Their tiffin service is a lifesaver during exam season. Healthy food delivered right to my dorm.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex text-orange-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join CampusBites?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Get started with our flexible meal plans today. Special discounts for semester bookings!
          </p>
          <Link
            to="/order"
            className="bg-white text-orange-500 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Join Now <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
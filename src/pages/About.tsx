import { Users, Award, Clock, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">About CampusBites</h1>
            <p className="text-xl max-w-2xl">
              Serving delicious and nutritious meals to our campus community since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                CampusBites was founded with a simple mission: to provide students with delicious, 
                nutritious meals that feel like home cooking. What started as a small cafeteria 
                serving 50 students has grown into a full-service dining solution serving over 
                500 students daily.
              </p>
              <p className="text-gray-600">
                We understand the challenges of student life - tight schedules, budget constraints, 
                and the need for healthy, energizing meals. That's why we've created flexible meal 
                plans that cater to diverse dietary preferences and student lifestyles.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Staff" 
                className="rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Student Dining" 
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Quality',
                description: 'We use only the freshest ingredients and maintain high food safety standards.'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Creating a welcoming environment for students to gather and connect.'
              },
              {
                icon: Clock,
                title: 'Convenience',
                description: 'Flexible meal times and plans that fit busy student schedules.'
              },
              {
                icon: Award,
                title: 'Innovation',
                description: 'Constantly improving our menu and services based on student feedback.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                  <value.icon size={24} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Chef Michael Chen',
                role: 'Head Chef',
                image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: '15 years of culinary experience specializing in diverse cuisines.'
              },
              {
                name: 'Sarah Johnson',
                role: 'Operations Manager',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Ensuring smooth daily operations and customer satisfaction.'
              },
              {
                name: 'David Patel',
                role: 'Nutritionist',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Creating balanced meal plans for diverse dietary needs.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Utensils, Box, Heart } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl">
              Flexible meal plans and services designed for student life.
            </p>
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meal Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Plan',
                price: '$199',
                period: 'per month',
                features: [
                  '2 meals per day',
                  'Weekday service',
                  'Basic menu selection',
                  'Dine-in only'
                ]
              },
              {
                name: 'Premium Plan',
                price: '$299',
                period: 'per month',
                features: [
                  '3 meals per day',
                  'All week service',
                  'Full menu access',
                  'Dine-in & takeaway'
                ],
                popular: true
              },
              {
                name: 'Flex Plan',
                price: '$149',
                period: 'per month',
                features: [
                  '15 meals per month',
                  'Flexible timing',
                  'Full menu access',
                  'Dine-in & takeaway'
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-md p-8 ${plan.popular ? 'border-2 border-orange-500 relative' : ''}`}>
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <ArrowRight size={16} className="text-orange-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/order"
                  className={`block text-center py-2 px-4 rounded-md transition-colors ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Menu Categories</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Vegetarian',
                items: ['Paneer Butter Masala', 'Veg Biryani', 'Dal Makhani', 'Mixed Veg Curry']
              },
              {
                icon: Utensils,
                title: 'Non-Vegetarian',
                items: ['Chicken Curry', 'Fish Fry', 'Mutton Biryani', 'Egg Curry']
              },
              {
                icon: Box,
                title: 'Tiffin Service',
                items: ['2 Rotis', '1 Curry', 'Rice', 'Dal', 'Salad']
              },
              {
                icon: Heart,
                title: 'Special Diet',
                items: ['Keto Meals', 'Low Carb', 'High Protein', 'Gluten Free']
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                  <category.icon size={24} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
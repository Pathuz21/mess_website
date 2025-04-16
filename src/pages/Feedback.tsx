import { useState } from 'react';
import { Star } from 'lucide-react';

export default function Feedback() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Share Your Feedback</h1>
            <p className="text-xl">
              Help us serve you better with your valuable feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <form className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Rating
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="text-gray-300 hover:text-orange-400 focus:outline-none"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <Star
                      size={32}
                      fill={star <= (hover || rating) ? 'currentColor' : 'none'}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="">Select a category</option>
                <option value="food">Food Quality</option>
                <option value="service">Service</option>
                <option value="cleanliness">Cleanliness</option>
                <option value="value">Value for Money</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Feedback
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={5}
                placeholder="Share your experience with us"
              ></textarea>
            </div>

            <div className="mb-8">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-orange-500" />
                <span className="ml-2 text-gray-700">
                  I agree to be contacted about my feedback
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600 transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
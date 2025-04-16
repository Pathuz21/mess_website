import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What are the meal timings?",
      answer: "Breakfast: 7:30 AM - 9:30 AM\nLunch: 12:00 PM - 2:30 PM\nDinner: 7:00 PM - 9:30 PM\nNote: Timings may vary during holidays and special events."
    },
    {
      question: "How does the meal plan work?",
      answer: "Our meal plans are flexible and can be customized to your needs. You can choose from monthly, weekly, or pay-per-meal options. Monthly plans include a set number of meals per day, while the Flex plan gives you a certain number of meal credits to use throughout the month."
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "Yes, we cater to various dietary needs including vegetarian, vegan, gluten-free, and other special diets. Please inform us about your dietary requirements when signing up, and our nutritionist will help create a suitable meal plan."
    },
    {
      question: "Can I cancel or modify my meal plan?",
      answer: "Yes, you can modify or cancel your meal plan with 7 days notice before the start of the next billing cycle. Please contact our customer service team for assistance with plan changes."
    },
    {
      question: "Is there a takeaway option?",
      answer: "Yes, we offer takeaway services for all meals. You can either bring your own containers or use our eco-friendly packaging (small additional charge may apply)."
    },
    {
      question: "What's included in the tiffin service?",
      answer: "Our standard tiffin includes 2 rotis, 1 curry, rice, dal, and salad. Premium tiffin services include additional items like dessert and snacks. All meals are packed in hygienic, microwave-safe containers."
    },
    {
      question: "Do you deliver to all campus locations?",
      answer: "Yes, we deliver to all campus dormitories and major campus buildings. Delivery is included in the tiffin service plans."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, meal plan cards, and digital payment methods like PayPal and campus cash."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl">
              Find answers to common questions about our services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-gray-500" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
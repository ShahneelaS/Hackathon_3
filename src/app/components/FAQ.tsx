import React, { useState } from 'react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    { question: 'How do I contact customer support?', answer: 'You can contact support via the contact form or email us at support@example.com.' },
    { question: 'Where can I track my order?', answer: 'You can track your order through the "Order Tracking" section in your profile.' },
    { question: 'How can I apply for a refund?', answer: 'Refund requests can be submitted via the customer support contact form.' },
    // Add more FAQ items as needed
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search FAQs..."
        className="w-full p-3 mb-4 border rounded-md"
      />
      {filteredFaqs.length === 0 ? (
        <p>No FAQs match your search query.</p>
      ) : (
        <ul>
          {filteredFaqs.map((faq, index) => (
            <li key={index} className="mb-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FAQ;

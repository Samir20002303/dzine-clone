import React, { useState } from 'react';
import './FAQ.css'; 

const faqData = [
  {
    id: 1,
    question: "Is this AI image generator suitable for beginners?",
    answer: "Yes, Dzine (formerly Stylar AI) has a user-friendly interface that requires no coding skills or high-end GPUs - just click to create. Choose between text-to-image or image-to-image, easily picking from various styles. No need for advanced prompt skills ; if you have an idea, our built-in GPT crafts the full prompt for you. With the canvas system, you can directly tweak details. "
  },
  {
    id: 2,
    question: "How do i create a unique AI-generated image?",
    answer: "Dzine (formerly Stylar AI) streamlines your creative process. Start by selecting 'image-to-image' or 'text-to-image then pick a style from our vast library and input your prompt. For precise control, adjust 'structure match' and 'style intensity', and click 'Generate'. Place your images on the canvas, utilize 'Generative Fill' among other features to enhance your designs. Once satisfied, hit 'export' to obtain your final image. For more detailed information, explore our comprehensive guide here"
  },
  {
    id: 3,
    question: "Where can I generate AI images for free?",
    answer: "Dzine (formerly Stylar AI) gives you 100 free credits during registration, and 30 free credits will be refreshed daily. For professional users with high-volume image creation demands, we offer a premium subscription. This plan offers extra credits and lets you skip waiting times, enabling you to turn your ideas into reality more efficiently."
  },
  {
    id: 4,
    question: "WWhat sets Dzine (formely Stylar AI) apart in the AI Design landscape?",
    answer: "Dzine (formerly Stylar AI) distinguishes itself in the AI design landscape as a user-friendly, controllable AI image editor and graphic design assistant. Dzine (formerly Stylar AI) features a versatile range of styles for easy selection and integrates built-in GPT technology to assist in generating prompts. It excels with its groundbreaking image-to-image and generative fill functions, allowing for precise control over visual details. With its intuitive layer system and a comprehensive suite of features, Dzine (formerly Stylar AI) enables designers to concentrate more on creativity and less on software complexities, making it approachable for both beginners and professionals."
  },
  {
    id: 5,
    question: "Which AI tool can remouve the background from a photo?",
    answer: "Dzine (formerly Stylar AI) simplifies background removal to a single click and makes changing the background a breeze with just a few additional steps. First, simply click 'remove background'. If you want to switch to a more appealing background, just place an imported or generated background layer beneath the main subject. For more detailed information, explore our comprehensive guide here"
  },
  {
    id: 6,
    question: "How do i get involved with the Dzine (formely Stylar AI) community?",
    answer: "Dive into  Dzine (formerly Stylar AI) community to discover a supportive and creative network on platforms like Discord, Instagram, Reddit, and YouTube. Share your work, get tips, and find new ideas. It's a place for joining creative contests and making stuff together. By joining, you play a role in guiding  Dzine (formerly Stylar AI)'s evolution, merging technology with artistry. Let's make cool things happen with our ideas, backed by friends from all over the world."
  },
];

function FAQ() {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h1 className="faq-main-title">Frequently Asked Questions</h1>
        

        <div className="faq-list">
          {faqData.map((item) => (
            <div key={item.id} className="faq-item">
              <button
                className={`faq-question ${openQuestionId === item.id ? 'open' : ''}`}
                onClick={() => toggleQuestion(item.id)}
                aria-expanded={openQuestionId === item.id}
              >
                <span className="faq-arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                {item.question}
              </button>
              <div
                className={`faq-answer-container ${openQuestionId === item.id ? 'open' : ''}`}
                style={{
                  maxHeight: openQuestionId === item.id ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease-in-out'
                }}
              >
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

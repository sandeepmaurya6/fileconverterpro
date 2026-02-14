'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is the file converter really free?',
      answer:
        'Yes, completely free! We provide unlimited file conversions without any registration, hidden fees, or premium plans.',
    },
    {
      question: 'How does PNG to WebP conversion save space?',
      answer:
        'WebP format uses advanced compression techniques that typically reduce file sizes by 25-35% compared to PNG while maintaining excellent visual quality.',
    },
    {
      question: 'Where are my files stored?',
      answer:
        'Your files never leave your device. All conversions happen locally in your browser using client-side processing. We do not upload or store any files.',
    },
    {
      question: 'What image and video formats are supported?',
      answer:
        'We support PNG, WebP, JPEG, GIF, BMP, TIFF, MP4, MOV, MP3, WAV, AAC, and many more. You can convert between virtually any common format.',
    },
    {
      question: 'Can I convert multiple files at once?',
      answer:
        'Absolutely! Our batch processing feature allows you to convert up to 20 files simultaneously, saving you significant time.',
    },
    {
      question: 'Does it work on mobile devices?',
      answer:
        'Yes, our converter works seamlessly on desktop, tablet, and mobile devices. Any modern web browser will work perfectly.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We have answers
          </p>
        </motion.div>

        <motion.div
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-4 md:p-6 border border-border rounded-lg hover:border-primary/50 transition-colors bg-card"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-sm md:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-border/50 text-muted-foreground text-sm md:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

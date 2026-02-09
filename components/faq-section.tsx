'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 'privacy',
    question: 'Is my data private and secure?',
    answer: 'Yes, 100% private and secure. All file conversions happen directly in your browser using client-side processing. Your files are never uploaded to any server, so they never leave your device. We don\'t store any files or personal data.'
  },
  {
    id: 'limits',
    question: 'Are there any file size or conversion limits?',
    answer: 'You can convert up to 20 files at once. Individual file size limits are 50MB for images and 2GB for videos. There are no limits on the total number of conversions you can perform.'
  },
  {
    id: 'formats',
    question: 'What file formats are supported?',
    answer: 'We support WebP, PNG, JPEG, MP4, and MOV formats. You can convert between images (WebP ↔ PNG, JPEG ↔ WebP) and videos (MP4 ↔ MOV, MP4 → MP3), as well as optimize PNG and JPEG images.'
  },
  {
    id: 'speed',
    question: 'How fast is the conversion process?',
    answer: 'Conversion speed depends on your device\'s processing power and the file size. Most images convert in seconds, while videos may take longer. Since processing happens locally, faster devices will see faster conversions.'
  },
  {
    id: 'quality',
    question: 'Will I lose quality when converting files?',
    answer: 'For lossless formats like PNG, quality is preserved. For lossy formats like JPEG and WebP, you have control over the optimization level. Our default settings balance quality and file size, but you can adjust compression settings as needed.'
  },
  {
    id: 'browser',
    question: 'Do I need to install anything or sign up?',
    answer: 'No installation or sign-up required. The converter works directly in your web browser. Just open the page, select your files, choose your format, and start converting. Works on desktop and mobile devices.'
  },
  {
    id: 'batch',
    question: 'Can I convert multiple files at once?',
    answer: 'Yes! You can upload and convert up to 20 files in a single batch. After conversion, download them individually or as a ZIP file containing all converted files.'
  },
  {
    id: 'compatibility',
    question: 'Which browsers are supported?',
    answer: 'Our file converter works on all modern browsers including Chrome, Firefox, Safari, and Edge. It requires WebGL and Web Workers support for optimal performance.'
  },
  {
    id: 'offline',
    question: 'Can I use this offline?',
    answer: 'Yes! Once the page loads, you can convert files offline. However, you\'ll need an internet connection to initially load the application.'
  },
  {
    id: 'cost',
    question: 'Is there a cost to use this service?',
    answer: 'No, the service is completely free! We don\'t charge for conversions, and there are no hidden fees or subscription plans. Convert as many files as you want at no cost.'
  }
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-12" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <h2 id="faq-heading" className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
          <p className="text-center text-slate-600 mb-8">Find answers to common questions about our file converter</p>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={openId === faq.id}
                >
                  <h3 className="font-semibold text-foreground">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0 ml-2" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 py-4 border-t border-border/50 bg-muted/30">
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

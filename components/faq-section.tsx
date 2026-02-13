'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'Is the file converter really free?',
      answer:
        'Yes, completely free! We believe in providing quality tools without hidden fees or premium subscriptions. Convert unlimited files without any cost or registration required.',
    },
    {
      question: 'How does PNG to WebP conversion improve my images?',
      answer:
        'WebP format typically reduces file sizes by 25-35% compared to PNG while maintaining the same visual quality. Smaller files mean faster loading times and better performance for your website or application.',
    },
    {
      question: 'Will my files be uploaded to your servers?',
      answer:
        'No, your files never leave your device. All conversions happen locally in your browser using client-side processing. Your privacy and security are our top priority.',
    },
    {
      question: 'What formats are supported?',
      answer:
        'We support PNG, WebP, JPEG, GIF, BMP, TIFF, MP4, MOV, MP3, WAV, AAC, and many more formats. You can convert between most common image and video formats.',
    },
    {
      question: 'Can I convert multiple files at once?',
      answer:
        'Absolutely! You can batch process up to 20 files simultaneously, saving you time and effort compared to converting files one by one.',
    },
    {
      question: 'Is the converter mobile-friendly?',
      answer:
        'Yes, our converter works seamlessly on desktop, tablet, and mobile devices. Use it anywhere with any modern web browser.',
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
    <section className="py-16 md:py-24 px-6 md:px-8">
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
            Everything you need to know about our file converter
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="border border-border rounded-lg mb-3 px-6">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors py-4 md:py-5">
                    <span className="font-semibold text-sm md:text-base">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4 md:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

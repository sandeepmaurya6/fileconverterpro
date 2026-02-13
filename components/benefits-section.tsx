'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, FileSize, Zap, BarChart3 } from 'lucide-react';

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const benefits = [
    {
      icon: CheckCircle2,
      title: 'Free & Unlimited',
      description: 'Convert as many files as you need without hidden fees or limitations',
    },
    {
      icon: FileSize,
      title: 'Smart Compression',
      description: 'Reduce file size by up to 80% while maintaining quality with WebP conversion',
    },
    {
      icon: Zap,
      title: 'Batch Processing',
      description: 'Convert up to 20 files simultaneously to save time and effort',
    },
    {
      icon: BarChart3,
      title: 'Format Support',
      description: 'Support for PNG, WebP, JPEG, MP4, MOV, MP3 and many more formats',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Why Choose Our File Converter?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide the most reliable and user-friendly file conversion experience available online
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <benefit.icon className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

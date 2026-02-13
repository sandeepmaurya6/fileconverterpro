'use client';

import { motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

export function ComparisonSection() {
  const features = [
    { name: 'Free to Use', ours: true, others: false },
    { name: 'No Registration Required', ours: true, others: false },
    { name: 'Batch Processing (20 files)', ours: true, others: false },
    { name: 'Client-side Processing (Offline)', ours: true, others: false },
    { name: 'Multiple Format Support', ours: true, others: true },
    { name: 'File Size Optimization', ours: true, others: true },
    { name: 'Mobile Friendly', ours: true, others: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-16 md:py-24 px-6 md:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            How We Compare
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer the most transparent and feature-rich file conversion solution
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-block min-w-full">
            <div className="bg-white rounded-lg border border-border overflow-hidden">
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-0">
                <div className="p-4 md:p-6 font-semibold text-sm md:text-base border-r border-b border-border bg-muted/50">
                  Feature
                </div>
                <div className="p-4 md:p-6 font-semibold text-sm md:text-base text-center border-r border-b border-border bg-primary/5">
                  Our Converter
                </div>
                <div className="p-4 md:p-6 font-semibold text-sm md:text-base text-center border-b border-border">
                  Other Tools
                </div>
              </motion.div>

              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  variants={itemVariants}
                  className="grid grid-cols-3 gap-0"
                >
                  <div className="p-4 md:p-6 text-sm md:text-base border-r border-b border-border">
                    {feature.name}
                  </div>
                  <div className="p-4 md:p-6 border-r border-b border-border flex justify-center">
                    {feature.ours && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                    {!feature.ours && (
                      <X className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="p-4 md:p-6 border-b border-border flex justify-center">
                    {feature.others && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                    {!feature.others && (
                      <X className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

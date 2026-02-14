'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export function ComparisonSection() {
  const features = [
    { name: 'Free & No Registration', ours: true, others: false },
    { name: 'Batch Processing (20 files)', ours: true, others: false },
    { name: 'Client-side Only (100% Private)', ours: true, others: false },
    { name: 'Multiple Format Support', ours: true, others: true },
    { name: 'Compression Options', ours: true, others: true },
    { name: 'Fast Processing', ours: true, others: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
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
          <p className="text-muted-foreground text-lg">
            See what makes our converter different
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 font-semibold text-base">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-primary text-base w-32">Our Tool</th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground text-base w-32">
                  Others
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-4 px-4 text-sm md:text-base font-medium">{feature.name}</td>
                  <td className="py-4 px-4 text-center">
                    {feature.ours ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto inline-block" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto inline-block" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.others ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto inline-block" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto inline-block" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

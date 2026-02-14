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
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-primary">Our Tool</th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                  Others
                </th>
              </tr>
            </thead>
            <tbody>
              <motion.tbody
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {features.map((feature, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-sm md:text-base">{feature.name}</td>
                    <td className="py-4 px-4 text-center">
                      {feature.ours ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {feature.others ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

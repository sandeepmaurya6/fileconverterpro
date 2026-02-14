'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Zap, BarChart3, Lock } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: 'Unlimited Conversions',
      description: 'Convert as many files as you want with no limits or hidden fees',
    },
    {
      icon: Zap,
      title: '25-35% Smaller Files',
      description: 'Reduce file size significantly using modern compression techniques',
    },
    {
      icon: BarChart3,
      title: 'Batch Processing',
      description: 'Convert up to 20 files simultaneously to save your time',
    },
    {
      icon: Lock,
      title: '100% Private & Secure',
      description: 'All processing happens locally in your browser, nothing uploaded',
    },
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
    <section className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Why Choose Our Converter?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fast, secure, and reliable file conversion that respects your privacy
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
